import http from '@/utils/request'
// 登录请求
export const loginApi = ({ username,password }) => {
    return http({
        method: 'POST',
        url: 'user/login',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            username,
            password
        }
    })
}
// 注册请求
export const registerApi = ({ username,password }) => {
    return http({
        method: 'POST',
        url: 'user/register',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            username,
            password
        }
    })
}