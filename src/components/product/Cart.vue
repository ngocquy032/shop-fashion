<template>
    <div id="card">
        <div class="size-img">
            <img :src="`${image}`" :alt="image" />
        </div>
        <div class="card-body">
            <p class="card-text">{{ title }}</p>
            <div class="star">
                <span class="fa fa-star checked"></span>
            </div>
            <div class="product-price"><bdi>{{ price }}&nbsp;<span class="woocommerce-Price-currencySymbol">₫</span></bdi>
            </div>
        </div>
    </div>
</template>
<script setup >
import { defineProps } from 'vue';
const { image, title, price } = defineProps([
    'image',
    'title',
    'price',
]);

</script>

<style >
.size-img img {
    height: 310px;
    object-fit: contain;
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



.card-body {
    padding-bottom: 10px;

}

#card:hover {
    border: 1px solid #ff720b;
    border-radius: 5px;
}

/* #card {
    color: black;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin-left: 80px;
    margin-right: 80px;
    padding-bottom: 20px;
} */

#card button {
    border: 1px solid wheat;
}

.card-text {
    font-size: 15px;
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
</style>