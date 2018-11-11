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
          <!-- <div v-if="showMenu"
               class="d-flex justify-center">

          </div> -->
        </v-flex>
      </v-layout>
    </v-card>
    <v-container>
      <p-filter></p-filter>
      <v-card flat
              class="transparent">
        <v-card-title>
          <v-breadcrumbs :items="breadcrumbs"
                         class="pa-0">
            <template slot="item"
                      slot-scope="props">
              <a :href="props.item.href"
                 :class="props.item.disabled? 'accent--text':'grey--text text--darken-1'">{{ props.item.text.toUpperCase() }}</a>
            </template>
          </v-breadcrumbs>
          <v-flex></v-flex>
          <div class="grey--text text--darken-1">共 <strong>{{ products.length || 0 }}</strong> 产品显示</div>
        </v-card-title>
      </v-card>
      <v-divider></v-divider>
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
        <v-layout row
                  class="mb-3 pa-3"
                  style="overflow: hidden"
                  ref="content">
          <v-flex v-for="p in products"
                  :key="p.id"
                  style="flex-shrink: 0;"
                  xs6
                  md4
                  lg3
                  xl2
                  d-flex>
            <v-hover>
              <v-card :height="420"
                      slot-scope="{ hover }"
                      class="transparent"
                      style="border-radius:12px;"
                      flat>
                <v-scale-transition mode="out-in">
                  <div v-show="hover"
                       class="transition-slow-in-fast-out white v-card--reveal elevation-12"
                       style="height: 100%; position:relative; top:0; z-index:0; border-radius:12px;">
                  </div>
                </v-scale-transition>
                <v-card-text style="position:absolute; top:0; left:0;">
                  <v-card class="d-flex pa-3 transition-slow-in-slow-out"
                          :class="`${hover? 'elevation-0': 'outlined'}`"
                          style="justify-content: center; align-items:center;">
                    <v-img :src="p.src"
                           height="240"
                           contain
                           aspect-ratio="16/9"
                           class="white">
                      <v-slide-y-transition mode="out-in">
                        <v-card-text v-if="hover"
                                     class="transition-slow-in-fast-out pa-0"
                                     style="height: 220px; display: flex; align-items: center;">
                          <div style="flex :1;">
                            <v-btn depressed
                                   block
                                   light
                                   class="grey--text text--darken-1"
                                   color="accent lighten-1">加入购物车</v-btn>
                            <v-btn outline
                                   block
                                   light
                                   class="mt-3"
                                   style="background-color: #fff !important;"
                                   color="accent lighten-1">
                              <label class="grey--text text--darken-1">立刻购买</label>
                            </v-btn>
                          </div>
                        </v-card-text>
                      </v-slide-y-transition>
                    </v-img>
                  </v-card>
                  <v-card class="transparent px-0"
                          flat>
                    <v-card-text class="px-0">
                      <div style="height:22px;">
                        <v-slide-x-transition mode="out-in">
                          <v-rating v-show="hover"
                                    v-model="p.rating"
                                    background-color="grey"
                                    color="accent"
                                    dense
                                    size="14"></v-rating>
                        </v-slide-x-transition>
                      </div>
                      <div class="title">{{ p.name }}</div>
                      <div class="subheading">{{ p.description }}</div>
                      <div class="accent--text">{{ p.price }}</div>
                    </v-card-text>
                  </v-card>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-flex>
        </v-layout>
        <help></help>
      </v-container>
    </v-container>
    <p-footer></p-footer>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Filter from './components/Filter.vue'
import Help from './components/Help.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        TabMenu: Menu,
        PFilter: Filter,
        Help,
        PFooter: Footer
    },
    data() {
        return {
            showMenu: false,
            products: [
                {
                    id: 1,
                    name: 'Abott',
                    description: '新生儿配方液态奶',
                    src: '../static/img/product/abott.png',
                    price: '170元',
                    rating: 4
                },
                {
                    id: 2,
                    name: 'Hegen',
                    description: '婴孩多功能奶瓶',
                    src: '../static/img/product/hegen.png',
                    price: '170元',
                    rating: 4
                },
                {
                    id: 3,
                    name: 'HiPP',
                    description: '免敏抗敏婴孩奶粉',
                    src: '../static/img/product/hipp.png',
                    price: '170元',
                    rating: 4
                },
                {
                    id: 4,
                    name: 'Marcus',
                    description: '辅食挤压硅胶勺',
                    src: '../static/img/product/marcus.png',
                    price: '170元',
                    rating: 4
                },
                {
                    id: 5,
                    name: 'Stokke',
                    description: '迷你实木婴孩床',
                    src: '../static/img/product/stokke.png',
                    price: '170元',
                    rating: 4
                },
                {
                    id: 6,
                    name: 'Betta',
                    description: '玻璃标准口径奶瓶',
                    src: '../static/img/product/betta.png',
                    price: '170元',
                    rating: 4
                }
            ],
            breadcrumbs: [
                {
                    text: '首页',
                    disabled: false,
                    href: 'breadcrumbs_dashboard'
                },
                {
                    text: '产品',
                    disabled: true,
                    href: 'breadcrumbs_link_1'
                }
            ]
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
