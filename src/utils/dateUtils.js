export const dateChange = (oldDateFormat) => {
    const date = new Date(oldDateFormat);
    // 格式化日期为 "2024/3/1 xx:xx:xx"
    const newDateFormat = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return newDateFormat
}