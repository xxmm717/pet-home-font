import http from '@/utils/request'
// 公告列表
export const announceApi = () => {
    return http({
        method: 'GET',
        url: 'announce/list',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
// 根据id获取公告详情
export const detailApi = ({id}) => {
    return http({
        method: 'GET',
        url: 'announce/detail',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id
        }
    })
}
// 公告点赞
export const likeApi = ({id}) => {
    return http({
        method: 'POST',
        url: 'announce/like',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id
        }
    })
}
// 获取公告留言
export const messageApi = ({id}) => {
    return http({
        method: 'GET',
        url: 'announce/message',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id
        }
    })
}
// 发表留言
export const sendApi = ({id,messageParam}) => {
    return http({
        method: 'POST',
        url: 'announce/leave',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id,
            message:messageParam
        }
    })
}