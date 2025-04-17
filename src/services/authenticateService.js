import api from '@/services/api'

export default {
    addUser  (credentials) {
        return api().post('addUser',credentials)
    },
    login(credentials){
        return api().post('login', credentials)
    }
}
