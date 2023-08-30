
import axios from "axios";
import { ref } from "vue";
const apiUrl = 'https://fakestoreapi.com/products';

interface Product {
    title: string;
    price: number;
    image: any;
    category: string
}
const products = ref<Product[]>([]);

axios.get(apiUrl)
  
    .then(function (response) {

        products.value = response.data;
        products.value.splice(12, 2);
        products.value.splice(16, 2);

        console.log('dataAxios', products.value);

    })
    .catch(function (error) {
        console.log('loi', error);
    });

export { products };



