import http from '@/utils/request'
// 列表请求
export const listApi = (page,pageSize,search) => {
    return http({
        method: 'GET',
        url: 'platform/list',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            page,
            pageSize,
            search
        }
    })
}
// 详情请求
export const detailPlatApi = ({id}) => {
    return http({
        method: 'GET',
        url: 'platform/detail',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id
        }
    })
}
// 评论请求
export const commentApi = (id,comment) => {
    return http({
        method: 'POST',
        url: 'platform/comment',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id,
            comment
        }
    })
}
// 发布请求
export const pubApi = (formData,pictures) => {
    return http({
        method: 'POST',
        url: 'platform/pub',
        headers: {
            'Content-Type': 'application/json',
        },
        data:{
            title: formData.title,
            content: formData.content,
            pictures
        }
    })
}

