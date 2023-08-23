<template>
  <Banner />

  <div class="item-product-vc">

    <div v-for="(brandProducts, type) in products" :key="type">
      <div style="display: block;" v-if="type === 0 || brandProducts.category !== products[type - 1].category">
        <div id="box_title">
          <label>{{ brandProducts.category }}</label>
        </div>

      </div>

      <div class="cart-item">
  
        <Cart :title="brandProducts.title" :price="brandProducts.price" :image="brandProducts.image" />
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';  
import Banner from "@/components/BannerComponent.vue";
import Cart from "@/components/product/Cart.vue";
import { products } from '../store/products/products';

const productsData = ref(products);

setTimeout(() => {
  Cart
  console.log("456", productsData.value);
}, 5000);

console.log("123", productsData.value);

</script>


<style >




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
</style>