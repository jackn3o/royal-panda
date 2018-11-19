<template>
    <v-toolbar class="elevation-1 pa-0 white"
               style="border-radius: 12px;"
               dense>
        <v-overflow-btn :items="empty"
                        label="品牌牌子"
                        color="accent"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="empty"
                        label="全部分类"
                        color="accent"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="dropdown_age"
                        label="宝贝年龄"
                        color="accent"
                        no-filter
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="empty"
                        label="产品材料"
                        color="accent"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="empty"
                        label="新品发布"
                        color="accent"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="empty"
                        label="热卖产品"
                        color="accent"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
        <v-divider vertical></v-divider>
        <v-overflow-btn :items="empty"
                        label="排序"
                        color="accent"
                        hide-details
                        class="pa-0"
                        overflow></v-overflow-btn>
    </v-toolbar>
</template>

<script>
export default {
    data() {
        return {
            empty: [],
            selectedAges: [],
            dropdown_age: [
                { text: '新生 - 6个月' },
                { text: '7个月 - 12个月' },
                { text: '1岁 - 2岁' },
                { text: '2岁 - 3岁' },
                { text: '3岁 - 6岁' }
            ]
        }
    }
}
</script>

<style>
</style>
