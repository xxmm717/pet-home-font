import http from '@/utils/request'
// 列表请求
export const listApi = (page,pageSize) => {
    return http({
        method: 'GET',
        url: 'rescue/list',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            page,
            pageSize,
        }
    })
}
// 详情请求
export const detailApi = (id) => {
    return http({
        method: 'GET',
        url: 'rescue/detail',
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
        url: 'rescue/apply',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id,
            reason
        }
    })
}