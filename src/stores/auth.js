import { reactive } from 'vue'

export const authState = reactive({
    isLoggedIn: !!localStorage.getItem("token"),
    isAdmin: JSON.parse(localStorage.getItem("admin")) === true,
    // isLoggedIn: false,
    // isAdmin: false,
    loginName: '',
    loginPass:''
})