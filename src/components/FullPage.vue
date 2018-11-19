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
        <div class="curl"></div>
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
.curl {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        135deg,
        white,
        #f3f3f3 45%,
        #ddd 50%,
        #aaa 50%,
        #bbb 56%,
        #ccc 62%,
        #f3f3f3 80%,
        #fff 100%
    );
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
}

.curl:before,
.curl:after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 12.5%;
    top: 5.8%;
    width: 70%;
    max-width: 300px;
    max-height: 100%;
    height: 55%;
    box-shadow: 0 12px 15px rgba(0, 0, 0, 0.3);
    transform: skew(-10deg) rotate(-6deg);
}

.curl:after {
    right: auto;
    left: 5.8%;
    bottom: auto;
    bottom: 14.16%;
    transform: skew(-15deg) rotate(-84deg);
}

.curl:hover {
    width: 8rem;
    height: 8rem;
}

.curl:hover:before,
.curl:hover:after {
    box-shadow: 0 24px 30px rgba(0, 0, 0, 0.3);
}
</style>
