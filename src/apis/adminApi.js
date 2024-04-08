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
export const snedApi = (result, stationId, userId) => {
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
export const sendApi = (result, rescueId, userId) => {
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
//发布公告
export const uploadApi = (formData, pictures) => {
    return http({
        method: 'POST',
        url: 'admin/pubA',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            title: formData.title,
            content: formData.content,
            pictures
        }
    })
}
//发布流浪动物救助信息
export const uploadRApi = (formData, pictures) => {
    return http({
        method: 'POST',
        url: 'admin/pubR',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            name: formData.name,
            gender: formData.gender,
            age: formData.age,
            type: formData.type,
            healthy: formData.healthy,
            detail: formData.detail,
            pictures
        }
    })
}
//修改公告信息
export const AUpdatedApi = (formData, pictures) => {
    return http({
        method: 'PUT',
        url: 'admin/AUpdate',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            id: formData.id,
            title: formData.title,
            content: formData.content,
            pictures
        }
    })
}
//删除公告信息
export const ARemoveApi = (id) => {
    return http({
        method: 'PUT',
        url: 'admin/ARemove',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id
        }
    })
}