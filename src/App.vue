<template>
    <v-app style="background-color: #FCF1EF; ">
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
                <!-- d-flex justify-center -->
                <v-flex xs12
                        style="display: flex; justify-content: center;">
                    <div class="site_logo">
                        <v-img height="80"
                               style="z-index:5;"
                               :class="`${$route.name =='FullPage'? 'blur':''}`"
                               src="../static/img/layout/royal-panda.png"
                               aspect-ratio="4/3"
                               contain></v-img>
                    </div>
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
        <router-view></router-view>
        <p-footer v-if="$route.name !='FullPage'"></p-footer>
    </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
export default {
    components: {
        TabMenu: Menu,
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
    }
}
</script>
<style>
</style>
