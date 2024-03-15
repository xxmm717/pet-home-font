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
export const uploadApi = (formData,pictures) => {
    return http({
        method: 'POST',
        url: 'lost/pub',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            address: formData.address,
            datetime: formData.datetime,
            description: formData.description,
            pictures
        }
    })
}