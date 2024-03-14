import http from '@/utils/request'
// 丢失宠物列表请求
export const lostApi = () => {
    return http({
        method: 'GET',
        url: 'lost/list',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}