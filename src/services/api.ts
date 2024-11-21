import axios from 'axios'

export const api = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_ENDPOINT,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})