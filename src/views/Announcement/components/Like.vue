<template>
  <div>
    <!-- 点赞 -->
    <div style="padding-right: 20px;display: flex;justify-content: center;align-items: center;">
      <i class="heart-icon" :class="{ 'heart-filled': !isLiked }" @click="toggleLike"><el-icon>
          <svg t="1710357039468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2897" width="200" height="200">
            <path
              d="M698.4 212c46.2 0 89.8 18.2 122.5 51.2 68.1 68.6 68.1 180.2 0 248.7L531 804c-6.5 6.6-13.9 8-19 8s-12.4-1.4-19-8L203.1 511.9c-68.1-68.6-68.1-180.2 0-248.7 32.8-33 76.3-51.2 122.5-51.2s89.8 18.2 122.5 51.2l63.9 64.3 63.9-64.3c32.7-33 76.3-51.2 122.5-51.2m0-90c-67.5 0-134.9 25.9-186.4 77.8-51.5-51.9-118.9-77.8-186.4-77.8s-134.9 25.9-186.4 77.8c-102.9 103.7-102.9 271.8 0 375.6l289.9 292.1C452 890.5 482 902 512 902c30 0 60-11.5 82.8-34.6l289.9-292.1c102.9-103.7 102.9-271.8 0-375.6-51.4-51.8-118.8-77.7-186.3-77.7z"
              fill="" p-id="2898"></path>
          </svg>
        </el-icon></i>
      <span>{{ like }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { detailApi, likeApi } from "@/apis/announceApi";

//点赞
const isLiked = ref('false')
const like = ref()
const toggleLike = async () => {
  isLiked.value = !isLiked.value
  const id = localStorage.getItem('announcementId')
  if (isLiked.value == true) {
    like.value = like.value - 1
    ElMessage({
      type: 'error',
      message: '取消点赞'
    })
  } else {
    like.value = like.value + 1
    ElMessage({
      type: 'success',
      message: '点赞成功'
    })
  }
}

//获取详情信息并渲染
const getDtail = async ({ id }) => {
  const res = await detailApi({ id })
  const detail = res.data.data
  like.value = detail.detail.liked
}

onMounted(() => {
  const id = localStorage.getItem('announcementId')
  getDtail({ id })
})
</script>

<style lang="scss" scoped>
// 收藏
.heart-icon {
  font-size: 24px;
  /* 设置图标大小 */
  cursor: pointer;
  /* 鼠标悬停时显示手型光标 */
}

.heart-filled {
  color: red;
  /* 已点赞时的颜色 */
}
</style>
