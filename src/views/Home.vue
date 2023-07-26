<template>
  <!-- slide -->

  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img src="../../public/assets/banners-3.jpg" class="d-block w-100" alt="..." height="515px">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../../public/assets/banners-1.png" class="d-block w-100" alt="..." height="515px">
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../../public/assets/banners-2.jpg" class="d-block w-100" alt="..." height="515px">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <ShowProduct :products="filteredProducts" />
</template>

<script setup >
import { onMounted, ref, computed } from 'vue';
import ShowProduct from '@/components/product/ShowProduct.vue';
import { products } from '../store/products/products';

// Lọc sản phẩm theo từng category
const filteredProducts = computed(() => {
  const uniqueCategories = [...new Set(products.value.map(product => product.category))];
  return uniqueCategories.map(category => {
    return {
      category,
      products: products.value.filter(product => product.category === category)
    };
  });
});

setTimeout(() => {
  ShowProduct

  console.log("456", products.value);
}, 2000);
console.log("123", products.value);
</script>

<style scoped></style>