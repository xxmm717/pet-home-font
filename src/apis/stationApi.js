import http from '@/utils/request'
// 列表请求
export const listApi = () => {
    return http({
        method: 'GET',
        url: 'station/list',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// 详情请求
export const detailApi = (id) => {
    return http({
        method: 'GET',
        url: 'station/detail',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id
        }
    })
}
// 志愿者请求
export const applyApi = (id,reason) => {
    return http({
        method: 'PUT',
        url: 'station/apply',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id,
            reason
        }
    })
}