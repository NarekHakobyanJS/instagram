import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
})

export const socialAPI = {
    getUsers(page = 1){
        return instance.get(`/users?count=100&page=${page}`)
    },
    getUser(userId){
        return instance.get(`/profile/${userId}`)
    }
}

