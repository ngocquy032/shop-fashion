import { ref } from "vue"; 

const products = ref([]);


const api = async () => {
    await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            products.value = json;
            products.value.splice(12, 2);
            products.value.splice(16, 2);
        })
};
api();


export { products };

