import http from '@/utils/request'
// 列表请求
export const listApi = (page,pageSize) => {
    return http({
        method: 'GET',
        url: 'platform/list',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            page,
            pageSize
        }
    })
}