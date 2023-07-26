<template>
    <div id="card">
        <div class="card_style_1" style="width: 24%;" v-for="product in products " :key="product.id">
            <div class="size-img">
                <img :src="`${product.image}`" class="card-img-top" :alt="product.image"  />

            </div>
            <div class="card-body">
                <p class="card-text">{{ product.title }}</p>
                <div class="star">
                    <span class="fa fa-star checked">{{ product.rating.rate }}</span>
                   
                </div>
                <div class="product-price"><bdi>{{ product.price }}&nbsp;<span
                            class="woocommerce-Price-currencySymbol">₫</span></bdi>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
import { defineProps } from 'vue';
const props = defineProps(['products']);
</script>

<style scoped>

.size-img img{
    height: 250px;
    width: 300px;
}
.no-underline {
    text-decoration: none;
}

.btn button {
    border: 0px;
    background-color: #ff720b;
}

.btn i {
    color: white;
}

.checked {
    color: orange;
}

.btn:hover {
    background-color: #F29727;
}

.btn button:hover {
    background-color: #F29727;
}

.mg-5 a {

    margin: 0px 5px;
}



.mg-5 img {
    height: 20px;
}

.w-50 {
    width: 50%;
}

.text-banner {
    color: #616161;
    text-align: center;
    justify-content: center;
    flex-flow: column;
    display: flex;
    height: 513px;
    background-color: #ece2d8;
}

#box_title {
    margin-right: 6%;
    margin-left: 6%;
    line-height: 30px;
    margin-top: 20px;
    border-bottom: 3px solid #ff720b;
    margin-bottom: 20px;
}

#box_title label {
    text-align: left;
    font-size: 16px;
    color: #FFF !important;
    height: 32px;
    line-height: 34px;
    text-transform: uppercase;
    padding-left: 15px;
    padding-right: 15px;
    background: #ff720b;
    white-space: nowrap;
}

.card-body {
    padding-bottom: 10px;
    text-align: center;
}

#card>:hover {
    border: 1px solid #ff720b;
}

#card {
    color: black;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 20px;
}

#card button {
    border: 1px solid wheat;
}

.card-text {
    font-size: 16px;
    padding-top: 10px;
}

.btn {
    --bs-btn-color: #fff;
    --bs-btn-bg: #ff720b;
    --bs-btn-border-color: #ff720b;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #ff720b;
    --bs-btn-hover-border-color: #ff720b;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #ff720b;
    --bs-btn-active-border-color: #ff720b;
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #ff720b;
    --bs-btn-disabled-border-color: #ff720b;
}

.product-price {
    padding-bottom: 10px;
}

.d-flex {
    margin-left: 10%;
    margin-right: 10%;
}
</style>