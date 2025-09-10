import axios from 'axios'

export default () => {
    return axios.create({
        //baseURL: 'http://185.220.172.6:5000'
        //baseURL: import.meta.env.VITE_API_URL 
        baseURL: '/api'
    })
}