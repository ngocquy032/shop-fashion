import { ref } from "vue";

const email = ref('');
const password = ref('');
const CheckEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((email.value.trim() === '') || (!emailRegex.test(email.value))) {
        return false;

    } else {
        return true;

    }
}

const CheckPass = () => {
    if ((password.value.trim() === '') || (password.value.length <= 7)) {
        return false;
    } else {
        return true;
    }
}

export {
    email, CheckEmail, password, CheckPass
}