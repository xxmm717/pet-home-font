import http from '@/utils/request'
// 获取收藏列表
export const starApi = () => {
    return http({
        method: 'GET',
        url: 'my/star',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// 获取个人信息
export const getUserApi = () => {
    return http({
        method: 'GET',
        url: 'my/message',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// 获取个人留言
export const getMessageApi = () => {
    return http({
        method: 'GET',
        url: 'my/getMessage',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
//编辑
export const editApi = (formData,pictures) => {
    return http({
        method: 'PUT',
        url: 'my/edit',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: formData.username,
            gender: formData.gender,
            age: formData.age,
            address: formData.address,
            phone: formData.phone,
            love: formData.love,
            pictures
        }
    })
}