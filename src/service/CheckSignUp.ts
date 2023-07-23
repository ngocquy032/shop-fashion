import { ref } from "vue";


const name = ref('');
const password = ref('');
const repassword = ref('');

const CheckName = ()=>{
    if(name.value.trim() ===""){
        return false;
    }else{
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

const CheckRepass = ()=>{
    if(password.value === repassword.value){
        return true;
    }else{
        return false;
    }
}

export{
    name, password, repassword ,CheckName, CheckRepass, CheckPass
}