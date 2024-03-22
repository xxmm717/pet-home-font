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