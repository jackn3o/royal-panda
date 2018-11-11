<template>
    <v-layout layout
              align-center
              justify-center
              row
              class="mb-2">
        <v-slide-x-transition>
            <v-btn @click="showHelp=!showHelp"
                   v-if="!showHelp"
                   color="accent"
                   fab
                   outline
                   dark
                   small
                   style="border-width: 2px; z-index:3;">
                <div class="black--text headline">?</div>
            </v-btn>
            <div v-else>
                <template v-for="(h,index) in helps">
                    <v-btn :key="index"
                           outline
                           large
                           style="flex: 0 !important; border-radius: 12px;"
                           class="accent mr-5">
                        {{h.text}}
                    </v-btn>
                </template>
            </div>
        </v-slide-x-transition>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            showHelp: false,
            helps: [
                { text: '第一责任制', append: '' },
                { text: '7天无理退货', append: '' },
                { text: '贴心的送货安装', append: '' },
                { text: '尊贵超值积分', append: '' },
                { text: '线下专属会员店', append: '' }
            ]
        }
    }
}
</script>

<style>
</style>
