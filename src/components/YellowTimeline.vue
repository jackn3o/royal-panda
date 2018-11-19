<template>
    <v-container>
        <v-container style="position:relative; height: 400px;"
                     v-resize="onResize"
                     class="pt-0"
                     grid-list-xl
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
            <v-layout row
                      class="mb-3 pa-3"
                      style="overflow: hidden;"
                      ref="content">
                <v-flex class="test__width"
                        xs6
                        md4
                        xl2
                        style="flex-shrink: 0;">
                </v-flex>
                <v-flex v-for="d in details"
                        :key="d.id"
                        class="test__width"
                        style="flex-shrink: 0;"
                        xs6
                        md4
                        xl2
                        d-flex>
                    <v-card height="360"
                            class="product_detail_box"
                            @click.native="selectedDetail = d">
                        <v-img :src="d.src"
                               :height="`${d.id== selectedDetail.id? 320:100 }`"
                               contain
                               aspect-ratio="4/3"
                               style="transition: all .2s ease-in-out; transition-delay: .05s;">
                        </v-img>
                    </v-card>
                </v-flex>
                <v-flex class="test__width"
                        xs6
                        md4
                        xl2
                        style="flex-shrink: 0;">
                    <v-card height="360"
                            class="transparent product_detail_box"></v-card>
                </v-flex>
            </v-layout>
            <div>
                <div class="mb-3"
                     style="display: flex; justify-content: space-around; align-items:center;">
                    <div class="title font-weight-light">{{ this.selectedDetail.name }}</div>
                    <div class="display-2 font-weight-medium">{{ this.selectedDetail.description }}</div>
                    <div class="title font-weight-light">{{ this.selectedDetail.price }} 元</div>
                </div>
                <div style="display: flex; justify-content: center;">
                    <template v-for="(h,i) in helps">
                        <v-tooltip :key="i"
                                   v-model="showTooltip"
                                   bottom>
                            <v-btn slot="activator"
                                   class="mr-5"
                                   :icon="h.id != selectedHelp"
                                   outline
                                   color="accent"
                                   @click="setHelpId(h.id)">
                                <v-icon class="grey--text text--darken-2">{{ h.icon }}</v-icon>
                            </v-btn>
                            <span>{{ h.tooltip }}</span>
                        </v-tooltip>
                    </template>
                </div>
            </div>
        </v-container>
    </v-container>
</template>

<script>
import ProductSlider from './ProductSlider.vue'
export default {
    components: {
        ProductSlider
    },
    data() {
        return {
            showTooltip: false,
            scrollWidth: 400,
            selectedDetail: {
                id: 1,
                name: 'Abott',
                description: '新生儿配方液态奶',
                src: '../static/img/product-detail/hegen-main.png',
                price: 238
            },
            details: [
                {
                    id: 1,
                    name: 'Abott',
                    description: '新生儿配方液态奶',
                    src: '../static/img/product-detail/hegen-main.png',
                    price: 238
                },
                {
                    id: 2,
                    name: 'Abott',
                    description: '新生儿配方液态奶',
                    src: '../static/img/product-detail/hegen-1.png',
                    price: 238
                },
                {
                    id: 3,
                    name: 'Abott',
                    description: '新生儿配方液态奶',
                    src: '../static/img/product-detail/hegen-2.png',
                    price: 238
                }
            ],
            selectedHelp: 0,
            helps: [
                { id: 1, icon: 'shopping_cart', tooltip: '加入购物车' },
                { id: 2, icon: 'attach_money', tooltip: '立刻购买' },
                { id: 3, icon: 'help', tooltip: '售后保障' },
                { id: 4, icon: 'thumbs_up_down', tooltip: '产品比较' },
                { id: 5, icon: 'settings_input_component', tooltip: '自制配套' }
            ]
        }
    },
    methods: {
        setHelpId(id) {
            if (this.selectedHelp == id) {
                this.selectedHelp = 0
                return
            }
            this.selectedHelp = id
        },
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
            const selectedIndex = this.details.findIndex(x => x.id == this.selectedDetail.id)

            if (selectedIndex <= 0 || selectedIndex > this.details.length) {
                // todo: add alert
                // 0 cannot swipe left
                return
            }

            this.selectedDetail = this.details[selectedIndex - 1]
            const content = this.$refs.content
            let scrollWidth = this.scrollWidth
            this.scrollTo(content, -scrollWidth, scrollWidth * 1.8)
        },
        swipeRight() {
            const selectedIndex = this.details.findIndex(x => x.id == this.selectedDetail.id)

            if (selectedIndex < 0 || selectedIndex >= this.details.length) {
                // todo: add alert
                // cannot swipe if selected index = length
                return
            }

            this.selectedDetail = this.details[selectedIndex + 1]
            const content = this.$refs.content
            let scrollWidth = this.scrollWidth

            this.scrollTo(content, scrollWidth, scrollWidth * 1.8)
        },
        onResize() {
            let el_productBox = this.$refs.content.querySelector('.test__width')

            if (el_productBox) {
                this.scrollWidth = el_productBox.clientWidth
            }
        }
    },
    mounted() {
        this.onResize()
    }
}
</script>

<style>
</style>
