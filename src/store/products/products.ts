import { ref } from "vue";

const products = ref([]);

const api = async () => {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            products.value = json;
        })
};
api();
export { products };
