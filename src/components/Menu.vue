<template>
    <div class="d-flex justify-center">
        <template v-for="(m,index) in menus">
            <v-btn :key="index"
                   depressed
                   large
                   style="width:84px; flex: 0 !important;"
                   class="transparent mr-5"
                   exact-active-class="accent"
                   :to="m.append">
                {{m.text}}
            </v-btn>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                { text: '出行工具', append: 'a' },
                { text: '奶粉辅食', append: 'b' },
                { text: '喂养餐具', append: 'c' },
                { text: '尿布服饰', append: 'd' },
                { text: '家居用品', append: 'e' },
                { text: '玩具学习', append: 'f' },
                { text: '洗护保洁', append: 'g' }
            ]
        }
    }
}
</script>

<style>
</style>
