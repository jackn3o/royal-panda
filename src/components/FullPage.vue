<template>
    <div style="position:absolute; top:0; left:0; height:100vh; width:100vw;">
        <v-img :src="`./static/img/full-page/${$route.params.id}.png`"
               style="height:100%;"
               cover></v-img>

        <v-bottom-sheet :value="true"
                        inset
                        persistent
                        hide-overlay>
            <div class="blurbox px-5 py-3"
                 style="display: flex; justify-content: space-between; align-items:center;">
                <div class="title font-weight-light">{{ this.selectedDetail.name }}</div>
                <div class="display-2 font-weight-medium">{{ this.selectedDetail.description }}</div>
                <div class="title font-weight-light">{{ this.selectedDetail.price }} 元</div>
            </div>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedDetail: {
                id: 1,
                name: 'Abott',
                description: '新生儿配方液态奶',
                src: '../static/img/product-detail/hegen-main.png',
                price: 238
            }
        }
    }
}
</script>

<style>
</style>
