import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '122cf95a-447b-4042-aa96-d5f9e2156d36',
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
}
export const profileAPI ={
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': "multipart/form-data",
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, {
            ...profile,
        });
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {
            status: status
        });
    },

}
export const authAPI = {
    me (){
        return instance.get(`auth/me/`)
            .then(response => {return response.data})
    },
    login (email, password, rememberMe = false, captcha=null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout (){
        return instance.delete(`auth/login`)
    },
}
export const securityAPI = {
    getCaptcha(){
        return instance.get(`security/get-captcha-url`);
    }
}