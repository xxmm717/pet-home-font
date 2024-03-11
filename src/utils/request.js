import axios from "axios"

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
  });

// // 拦截器

// // axios请求拦截器
// http.interceptors.request.use(config => {
//   // 从本地获取token
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = token
//   }
//   return config
// }, e => Promise.reject(e))

// // axios响应式拦截器
// http.interceptors.response.use(res => res, e => {
//   // 统一错误提示
//   ElMessage({
//     type: 'warning',
//     message: e
//   })
//   return Promise.reject(e)
// })

  export default http