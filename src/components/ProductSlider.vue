<template>
    <v-container style="position:relative;"
                 class="pt-0"
                 grid-list-lg
                 fluid>
        <v-btn @click="swipeLeft"
               color="accent"
               fab
               small
               outline
               dark
               style="border-width: 3px; position: absolute; top: 12.2rem; left: -2rem; z-index:4;">
            <v-icon class="black--text"
                    large>navigate_before</v-icon>
        </v-btn>
        <v-btn @click="swipeRight"
               color="accent"
               fab
               small
               outline
               dark
               style="border-width: 3px; position: absolute; top: 12.2rem; right: -2rem; z-index:4;">
            <v-icon class="black--text"
                    large>navigate_next</v-icon>
        </v-btn>
        <slot name="product"></slot>
    </v-container>
</template>

<script>
export default {
    methods: {
        scrollTo(element, scrollPixels, duration) {
            const scrollPos = element.scrollLeft
            // Condition to check if scrolling is required
            if (
                !(
                    (scrollPos === 0 || scrollPixels > 0) &&
                    (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0)
                )
            ) {
                // Get the start timestamp
                const startTime = 'now' in window.performance ? performance.now() : new Date().getTime()

                function scroll(timestamp) {
                    //Calculate the timeelapsed
                    const timeElapsed = timestamp - startTime
                    //Calculate progress
                    const progress = Math.min(timeElapsed / duration, 1)
                    //Set the scrolleft
                    element.scrollLeft = scrollPos + scrollPixels * progress
                    //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
                    if (timeElapsed < duration) {
                        //Request for animation
                        window.requestAnimationFrame(scroll)
                    } else {
                        return
                    }
                }
                //Call requestAnimationFrame on scroll function first time
                window.requestAnimationFrame(scroll)
            }
        },
        swipeLeft() {
            const content = this.$refs.content
            this.scrollTo(content, -600, 800)
        },
        swipeRight() {
            const content = this.$refs.content
            this.scrollTo(content, 600, 800)
        }
    }
}
</script>

<style>
</style>
