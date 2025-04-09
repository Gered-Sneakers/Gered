import api from '@/http-common'

export default {
    addUser  (credentials) {
        return api().post('addUser',credentials)
    },
    login(credentials){
        return api().post('login', credentials)
    }
}
