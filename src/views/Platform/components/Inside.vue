<template>
  <div class="common-layout box_contianer">

    <el-container class="contianer">
      <!-- 版心 -->
      <el-container class="main_contianer">
        <el-aside class="main_left">
          <!-- 轮播图 -->
          <div>
            <el-carousel style="width: 100%;height: 70vh;">
              <el-carousel-item v-for="item in detail.picList"
                style="display: flex;justify-content: center;align-items: center;width: 100%;height: 70vh">
                <el-image style="width: 100%;height: 70vh"
                  :src="item" fit="cover" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-aside>
        <!-- 详情 -->
        <el-main class="main_right scroll" style="margin: 2vh 0;">
          <!-- 用户头像 -->
          <div class="demo-type avatar">
            <el-avatar :size="60">
              <img
                :src="detail.avatar" />
            </el-avatar>
            <div class="content">
              <span style="font-size: 18px;margin-left: 1vh;">{{ detail.username }}</span>
            </div>
          </div>
          <!-- 标题和详情 -->
          <h2 style="margin: 2vh 0;">{{ detail.title }}</h2>
          <p style="font-size: 18px;margin: 2vh 0">{{ detail.content }}</p>
          <p style="color: gray;margin: 2vh 0">{{ dateChange(detail.datetime) }}</p>
          <!-- 点赞留言 -->
          <div class="div_star_comment">
            <!-- 点赞 -->
            <like></like>
            <!-- 留言 -->
            <div>
              <input type="text" placeholder="发布你的留言" style="width: 30vh;" v-model="comment">
              <button @click="sendMsg" style="width: 10vh;">评论</button>
            </div>
          </div>

          <!-- 评价 -->
          <div style="margin: 2vh 0;">
            <div class="tabs-container">
              <p style="font-size: 20px;"></p>
            </div>

            <!-- <div id="details" class="tab-content active">
              <p style="font-size: 18px;">dd</p>
            </div> -->
            <div>
              <div v-for="item in detail.commentVoList">
                <!-- 评论布局 -->
                <div style="padding-top: 10px;">
                  <div>
                    <!-- 头像 -->
                    <div class="demo-type avatar">
                      <el-avatar :size="60">
                        <img :src="item.avatar" />
                      </el-avatar>
                      <div class="content">
                        <span style="font-size: 16px;">{{ item.username }}</span>
                        <span style="font-size: 12px;">{{ dateChange(item.datetime) }}</span>
                      </div>
                    </div>

                  </div>
                  <!-- 评论 -->
                  <div style="padding-top: 5px;font-size: 16px;">{{ item.comment }}</div>
                </div>
              </div>
            </div>

          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import like from '@/views/Announcement/components/Like.vue'
import { detailPlatApi,commentApi } from "@/apis/platformApi";
import { dateChange } from "@/utils/dateUtils";
import { useRoute } from "vue-router";
const route = useRoute()
const id = route.params.id

const comment = ref('')

// 渲染
const detail = ref({})
const getPlatDetail = async ({id}) => {
  const res = await detailPlatApi({id})
  detail.value = res.data.data.detail
}
onMounted(() => {
  // const id = localStorage.getItem('id')
  getPlatDetail({id})
})

// 评论
const sendMsg = async () => {
    await commentApi(id,comment.value)
    comment.value=''
    ElMessage({
      type: 'success',
      message: '评论成功'
    })
    getPlatDetail({id})
}

</script>

<style lang="scss" scoped>
.box_contianer {
  width: 140vh;
}

.contianer {
  width: 100%;
  background-color: #e1e7e9;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_contianer {
  width: 80%;
  height: 10vh;
  background-color: #f7f9fae7;
  border-radius: 20px;
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.main_contianer {
  width: 80%;
  background-color: #f7f9fae7;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_left {
  height: 73vh;
  width: 50%;
  background-color: #f7f9fae7;
  padding: 10px;
}

.main_right {
  height: 73vh;
  width: 50%;
  background-color: #fafafa;
  padding: 5px;
}

// 轮播图
.el-carousel__item h3 {
  color: #fafafa;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fafafa;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fafafa;
}

// 商品详情
.title {
  width: 100%;
  height: 8vh;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
}

.detail {
  margin-top: 20px;
  width: 100%;
  height: 25vh;
  font-size: 18px;
  line-height: 1.5;
}

.text {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}


// 商品详情和评价
.tabs-container {
  display: flex;
  border-bottom: 2px solid #ccc;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  position: relative;
}

.tab:hover {
  text-decoration: underline;
}

.tab.active {
  text-decoration: underline;
  font-size: 20px;
}

.tab-content {
  display: none;
  padding: 20px;
}

.tab-content.active {
  display: block;
}

// 评价详情
.avatar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.content {
  width: 100%;
  height: 5vh;
  display: inline-block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}

// 隐藏滚动条
.scroll::-webkit-scrollbar {
  width: 0.1em;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: transparent;
}

//点赞留言
.div_star_comment {
  width: 80vh;
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;

  div {
    display: inline-block;
  }

  button {
    width: 8vh;
    height: 4vh;
    background-color: orange;
    border: none;
    border-radius: 10px;
  }

  button:active {
    background-color: red;
  }

  input {
    width: 60vh;
    height: 3vh;
    border: 1px solid gray;
    margin-right: 5px;
  }
}
</style>
