<template>
  <v-app style="background-color: #FCF1EF;">
    <v-card :height="160"
            class="display-3 text-xs-center">
      Royal Panda
    </v-card>
    <v-container>
      <v-toolbar class="elevation-0 pa-0 outlined"
                 dense>
        <v-overflow-btn :items="dropdown_font"
                        label="Select font"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>

        <v-overflow-btn :items="dropdown_font"
                        label="Select size"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="dropdown_font"
                        label="Select size"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="dropdown_font"
                        label="Select size"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="dropdown_font"
                        label="Select size"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
      </v-toolbar>
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
                   grid-list-lg
                   fluid>
        <v-btn color="accent"
               fab
               small
               outline
               dark
               style="border-width: 3px; position: absolute; top: 12.2rem; left: -2rem; z-index:4;">
          <v-icon class="black--text"
                  large>navigate_before</v-icon>
        </v-btn>
        <v-btn color="accent"
               fab
               small
               outline
               dark
               style="border-width: 3px; position: absolute; top: 12.2rem; right: -2rem; z-index:4;">
          <v-icon class="black--text"
                  large>navigate_next</v-icon>
        </v-btn>
        <v-layout row style="overflow: hidden">
          <v-flex v-for="p in products"
                  :key="p.id"
                  style="flex-shrink: 0;"
                  xs6
                  md4
                  lg3
                  xl2
                  d-flex>
            <v-hover>
              <v-card :height="460"
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
                           height="260"
                           contain
                           aspect-ratio="16/9"
                           class="white">
                      <v-slide-y-transition mode="out-in">
                        <v-card-text v-if="hover"
                                     class="transition-slow-in-fast-out pa-0"
                                     style="height: 240px; display: flex; align-items: center;">
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
        <v-layout layout
                  align-center
                  justify-center
                  row class="mt-3">
          <v-btn color="accent"
                 fab
                 outline
                 dark
                 style="border-width: 2px; z-index:4;">
            <div class="black--text display-1">?</div>
          </v-btn>
        </v-layout>
      </v-container>
    </v-container>

    <v-footer :fixed="true"
              :height="48"
              class="pa-3"
              style="background-color: #F8F8F8;"
              app>
      <div class="d-flex">
        <v-icon>home</v-icon>
        <div class="ml-2">
          <div class="caption">Line1</div>
          <div class="caption">line2</div>
        </div>
      </div>
      <v-flex></v-flex>
      <div class="d-flex">
        <v-icon class="material">lock</v-icon>
        <div class="ml-2">
          <div class="caption">Line1</div>
          <div class="caption">line2</div>
        </div>
      </div>
      <div class="d-flex ml-2">
        <v-icon class="material">lock</v-icon>
        <div class="ml-2">
          <div class="caption">Line1</div>
          <div class="caption">line2</div>
        </div>
      </div>
      <div class="d-flex ml-2">
        <v-icon class="material">lock</v-icon>
        <div class="ml-2">
          <div class="caption">Line1</div>
          <div class="caption">line2</div>
        </div>
      </div>
      <div class="d-flex ml-2">
        <v-icon class="material">lock</v-icon>
        <div class="ml-2">
          <div class="caption">Line1</div>
          <div class="caption">line2</div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    data() {
        return {
            dropdown_font: [{ text: 'Arial' }, { text: 'Calibri' }, { text: 'Courier' }, { text: 'Verdana' }],
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
    name: 'App'
}
</script>
<style>
</style>
