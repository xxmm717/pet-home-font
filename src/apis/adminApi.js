import http from '@/utils/request'
// 志愿者审核列表请求
export const EreviewApi = () => {
    return http({
        method: 'GET',
        url: 'admin/Ereview',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// 处理志愿者审核
export const snedApi = (result,stationId,userId) => {
    return http({
        method: 'PUT',
        url: 'admin/dealEreview',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            result,
            stationId,
            userId
        }
    })
}
// 申请领养审核列表请求
export const RreviewApi = () => {
    return http({
        method: 'GET',
        url: 'admin/Rreview',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// 领养审核
export const sendApi = (result,rescueId,userId) => {
    return http({
        method: 'PUT',
        url: 'admin/dealRreview',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            result,
            rescueId,
            userId
        }
    })
}