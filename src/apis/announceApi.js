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
// 点赞
export const likeApi = (id,click) => {
    return http({
        method: 'POST',
        url: 'announce/like',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id,
            click
        }
    })
}
// 查看用户是否点过赞
export const getLikeApi = (id) => {
    return http({
        method: 'POST',
        url: 'announce/getLike',
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