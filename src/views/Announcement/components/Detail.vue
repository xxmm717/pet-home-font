<template>
  <div class="contianer_detail" v-for="item in detail">
    <!-- 标题 -->
    <div class="detail_title">{{ item.title }}</div>
    <pre><el-icon>
        <UserFilled />
      </el-icon>宠物之家互联网流浪动物救助平台 {{ dateChange(item.datetime) }}</pre>
    <div class="detail_content">{{ item.content }}
    </div>
    <!-- 图片 -->
    <div class="detail_picture">
      <el-image style="width: 100%; height: 100%;" :src=item.picture fit="cover" />
    </div>
    <div>
      <!-- 点赞留言 -->
      <div class="div_star_comment">
        <!-- 点赞 -->
        <like></like>
        <!-- 留言 -->
        <div>
          <input type="text" placeholder="发布你的留言" v-model="message">
          <button @click="sendMsg">留言</button>
        </div>
      </div>
      <br>
      <hr>
      <br>
      <!-- 查看留言 -->
      <!-- <div > -->
        <div style="width: 100%;background-color:#eee;border-radius: 10px;margin: 1vh 0;" v-for="i in messageList">
          <!-- 评论布局 -->
          <div style="padding-top: 10px;">
            <div>
              <!-- 头像 -->
              <div class="demo-type avatar">
                <el-avatar :size="60">
                  <img :src=i.avatar />
                </el-avatar>
                <div class="content">
                  <span style="font-size: 16px;">{{ i.username }}</span>
                  <span style="font-size: 12px;">{{ dateChange(i.datetime) }}</span>
                </div>
              </div>

            </div>
            <!-- 评论 -->
            <div style="padding-top: 5px;font-size: 16px;padding: 2vh 0 1vh 3vh">{{ i.message }}</div>
          </div>
        </div>
      <!-- </div> -->


  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { UserFilled } from "@element-plus/icons-vue";
import { Star } from "@element-plus/icons-vue";
import { detailApi, likeApi,messageApi,sendApi  } from "@/apis/announceApi";
import { dateChange } from "@/utils/dateUtils";
import router from "@/router";
import like from '@/views/Announcement/components/Like.vue'

//获取详情信息并渲染
const detail = ref()
const getDtail = async ({ id }) => {
  const res = await detailApi({ id })
  detail.value = res.data.data
}
const messageList = ref()
const getMessage = async ({id}) => {
  const res = await messageApi({id})
  messageList.value = res.data.data.messageList
}

onMounted(() => {
  const id = localStorage.getItem('announcementId')
  getDtail({ id })
  getMessage({ id })
})

//留言
const message = ref('')
const sendMsg = async () => {
  const id = localStorage.getItem('announcementId')
  const messageParam = message.value
  await sendApi({id,messageParam})
  message.value = ''
  ElMessage({
      type: 'success',
      message: '发表成功'
    })
  getMessage({ id })
}

</script>

<style lang="scss" scoped>
.contianer_detail {
  width: 120vh;
  background-color: white;
  margin: 20px;
  padding: 5vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .detail_title {
    font-size: 40px;
    font-weight: 1000;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  .detail_content {
    margin-top: 3vh;
    width: 80vh;
    font-size: 18px;
    text-indent: 2em;
    /* 段落首行缩进，text-indent的值为font-size的2倍，相当于缩进2个汉字 */
    line-height: 1.5em;
    /* line-height的值为font-size的1.5倍，即1.5倍行距，使用line-height: 1.5效果相同 */
    text-align: justify;
    /* 左右对齐 */
  }

  .detail_picture {
    margin: 3vh 0;
    width: 80vh;
    height: 30vh;
    background-color: skyblue;
  }

  p {
    display: flex;
    align-items: center;
    color: gray;
  }

  pre {
    color: gray;
  }
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
// 评价详情
.avatar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 3vh;
}

.content {
  width: 100%;
  height: 5vh;
  display: inline-block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3vh;
  padding-right: 5vh;
}
</style>
