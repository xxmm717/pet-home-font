<template>
  <div>
    <!-- 点赞 -->
    <div style="padding-right: 20px;display: flex;justify-content: center;align-items: center;">
      <i class="heart-icon" :class="{ 'heart-filled': isLiked }" @click="toggleLike"><el-icon>
          <el-icon>
            <Star />
          </el-icon>
        </el-icon></i>
      <span>{{ like }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue"
import { Star } from "@element-plus/icons-vue";
import { detailApi, likeApi,getLikeApi } from "@/apis/announceApi";

// 用户是否已点赞
const props = defineProps({
  announcementId: Number
})
const isLiked = ref(false)

//点赞

const like = ref()
const toggleLike = async () => {
  isLiked.value = !isLiked.value
  const id = localStorage.getItem('announcementId')
  if (isLiked.value == true) {
    like.value = like.value + 1
    await likeApi(props.announcementId,'add')
    ElMessage({
      type: 'success',
      message: '收藏成功'
    })
  } else {
    like.value = like.value - 1
    await likeApi(props.announcementId,'sub')
    ElMessage({
      type: 'error',
      message: '取消收藏'
    })
  }
}

//获取详情信息并渲染
const getDtail = async ({ id }) => {
  const res = await detailApi({ id })
  const detail = res.data.data
  like.value = detail.detail.liked
  const res2 = await getLikeApi(props.announcementId)
  const ifLike = res2.data.data.isLiked
  if (ifLike == 'true'){
    isLiked.value = !isLiked.value
  }
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
