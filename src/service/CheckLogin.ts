import { RefSymbol } from "@vue/reactivity";
import { ref } from "vue";

const email = ref('');

const password = ref('');
const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        return false;
    } else if (!emailRegex.test(email.value)) {
        return false;
    } else {
       return true;

    }
}

const checkPass = () => {
    if ((password.value.trim() === '') || (password.value.length <= 7)) {
        return false;
    } else {
        return true;
    }
}

export {
    email, checkEmail, password, checkPass
}