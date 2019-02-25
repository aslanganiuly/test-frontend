<template>
    <div class="main">
        <div class="flex-container" v-for="(product, index) in items" :key="index">
            <div class="product">
                <img :src="product.image" alt="smartphone" class="img-product">
                <h3 v-html="product.name" style="margin-left:4%; font-family:Helvetica Neue;font-weight: normal;"></h3>
                <h2 style="margin-left:4%; color:#f79535;">{{ product.price.value }}</h2>
                <h4 style="margin-left:4%; text-decoration:line-through; color: #ccc;">{{product.price.formattedValue }}</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'product',
    props: {
        items: Array
    },
    data() {
        return {
        }
    },
    methods: {

    }
}
</script>
