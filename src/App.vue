<template>
    <v-app style="background-color: #FCF1EF;">
        <figure class="swing"
                style="position: fixed; top:-0.2rem; right:2rem; z-index:4; height: 120px; width: 120px;">
            <v-img @click="showMenu = !showMenu"
                   height="120"
                   src="../static/img/layout/suo.png"
                   aspect-ratio="1"
                   contain></v-img>
        </figure>
        <v-card class="pt-5"
                :class="`${!showMenu? 'elevation-0': 'elevation-3'}`"
                style="transition: .25s linear 0s;"
                :style="styleObject">
            <v-layout layout
                      align-center
                      justify-center
                      row
                      wrap>
                <v-flex xs12
                        class="d-flex justify-center">
                    <v-img height="90"
                           src="../static/img/layout/royal-panda.png"
                           aspect-ratio="2.75"
                           contain></v-img>
                </v-flex>
                <v-flex xs12
                        style="height:64px;">
                    <v-slide-y-transition mode="out-in">
                        <div v-if="!showMenu"
                             class="d-flex justify-center">
                            <v-img height="30"
                                   max-width="30"
                                   src="../static/img/layout/panda.png"
                                   contain>
                            </v-img>
                        </div>
                        <tab-menu v-else></tab-menu>
                    </v-slide-y-transition>
                </v-flex>
            </v-layout>
        </v-card>
        <p-main></p-main>
        <p-footer></p-footer>
    </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
import Filter from './components/Filter.vue'
import Help from './components/Help.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        TabMenu: Menu,
        PMain: Main,
        PFilter: Filter,
        Help,
        PFooter: Footer
    },
    data() {
        return {
            showMenu: false
        }
    },
    computed: {
        styleObject() {
            return {
                backgroundColor: this.showMenu ? '#f2dbcf' : 'rgba(0,0,0,0)'
            }
        }
    },
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
