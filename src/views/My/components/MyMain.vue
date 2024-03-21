<template>
      <div class="user-profile">
        <!-- 用户头像、昵称、性别、年龄等信息 -->
        <div class="profile-header">
          <img :src=user.avatar alt="User Avatar" class="avatar" />
          <h2>{{ user.username }}</h2>
          <pre>{{ user.gender }}  {{ user.age }}岁  {{ user.address }}</pre>
          <pre>联系方式：{{ user.phone }}</pre>
          <p> <span style="color: red;font-weight: 500;font-size: medium;">喜爱: </span><span> {{ user.love }}</span></p>
          <button @click="edit" class="edit">编辑资料</button>
          <button @click="exit" class="edit" style="background-color: tomato;">退出登录</button>
        </div>
  
        <!-- 标签切换 -->
        <div class="tabs ">
          <button @click="activeTab = 'favorites',getStar" :class="{ active: activeTab === 'favorites' }"
            class="tag_button" >收藏</button>
          <button @click="activeTab = 'reviews'" :class="{ active: activeTab === 'reviews' }"
            class="tag_button">留言</button>
        </div>
  
        <!-- 内容区域 -->
        <div class="content">
          <div v-if="activeTab === 'favorites'" style="display: flex; justify-content: center;align-items: center;">
  
            <!-- 收藏 -->
            <div class="star_contianer">
              <!-- 单个盒子 -->
              <div class="box" v-for="item in list" :key="item.announcementId">
                <!-- 图片 -->
                <div class="div_left">
                  <el-image style="width: 100%; height: 100%;border-radius: 10px 0 0 10px;"
                  :src=item.picture
                    fit="cover" />
                </div>
                <!-- 文字描述 -->
                <div class="div_right" @click="pushDetail()">
                  <h1>{{ item.title }}</h1>
                  <br>
                  <p><el-icon>
                      <UserFilled />
                    </el-icon>宠物之家互联网流浪动物救助平台 </p>
                  <pre>  {{ dateChange(item.datetime) }}</pre>
                  <br>
                  <div class="div_span_left"><span class="span_left">{{ item.content }}</span></div>
                </div>
              </div>
            </div>
          </div>
  
          <div v-else-if="activeTab === 'reviews',getMessage"style="display: flex; justify-content: center;align-items: center;flex-direction: column;">
            <!-- 查看留言 -->
            <!-- <div > -->
            <div style="width: 80%;background-color:white;border-radius: 10px;margin: 1vh 0;" v-for="i in messageList">
              <!-- 评论布局 -->
              <div style="padding-top: 10px;">
                <div>
                  <!-- 头像 -->
                  <div class="demo-type star_avatar">
                    <el-avatar :size="60">
                      <img :src="i.avatar" />
                    </el-avatar>
                    <div class="liuyan_content">
                      <span style="font-size: 16px;">{{ i.username }}</span>
                      <span style="font-size: 12px;">{{ dateChange(i.datetime) }}</span>
                    </div>
                  </div>
  
                </div>
                <!-- 评论 -->
                <div style="padding-top: 5px;font-size: 16px;padding: 2vh 0 1vh 3vh"> <span>{{ i.message }}</span><span style="color: blue;text-decoration: underline;"@click="toContent(i.announcementId)">  原文链接</span></div>
              </div>
            </div>
  
          </div>
        </div>
  
        <!-- 编辑资料的悬浮框 -->
        <div v-if="showEdit">
          <!-- 添加编辑资料的表单或模态框 -->
          <!-- 例如：头像、昵称、性别、年龄的输入框 -->
        </div>
      </div>
  
  </template>
  
  <script setup>
  import { UserFilled } from "@element-plus/icons-vue";
  import { ref, onMounted } from 'vue';
  import { starApi,getUserApi,getMessageApi } from "@/apis/myApi";
  import { dateChange } from "@/utils/dateUtils";
  import { useRouter } from "vue-router";
  const router = useRouter()
  import { useActiveStore } from "@/stores/activeStore";
  const activeStore = useActiveStore()
  
  const showEdit = ref(false);
  const activeTab = ref('favorites'); // 默认显示“收藏”
  
  const showEditModal = () => {
    showEdit.value = true;
  };
  //获取收藏列表
  const list = ref()
  const getStar = async () => {
    const res = await starApi()
    list.value = res.data.data.list
  }
  // 获取个人信息
  const user = ref({})
  const getUser = async () => {
    const res = await getUserApi()
    user.value = res.data.data.user
  }
  //获取个人留言
  const messageList = ref([])
  const getMessage = async () => {
    const res = await getMessageApi()
    messageList.value = res.data.data.messageList
  }
  // 跳转留言详情
  const toContent = (id) => {
    activeStore.id = id
    localStorage.setItem('announcementId',id)
    router.push({path: '/detail'})
  }
  //编辑资料
  const edit = () => {
    router.push({path: '/myEdit'})
  }
  
  //渲染
  onMounted(()=>{
    getStar()
    getUser()
    getMessage()
  })
  
  //退出登录
  const exit = () => {
    router.push({path:'/'})
  }
  
  </script>
  
  <style scoped>
  
  .star_contianer {
    width: 100%;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 15px;
  }
  
  .user-profile {
    width: 140vh;
    background-color: white;
    padding: 5vh;
  }
  
  .profile-header {
    /* 用户头像、昵称、性别、年龄的样式 */
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    width: 100%;
    height: 20vh;
  }
  
  .avatar {
    /* 头像图片的样式 */
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  h2 {
    font-size: 1.5rem;
    margin: 0;
  }
  
  p {
    font-size: 1rem;
    margin: 0;
    color: #666;
  }
  
  .edit {
    background-color: #66bfeb;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100px;
    border-radius: 10px;
  }
  
  .tag_button {
    background-color: #9d9fa0;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: 100px;
    border-radius: 10px;
  }
  
  .tabs {
    /* 标签按钮的样式 */
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  button.active {
    /* 激活状态的标签按钮样式 */
    background-color: #333;
    color: #fff;
  }
  
  .content {
    /* 内容区域的样式 */
    margin-top: 1.5vh;
    padding: 1rem;
    background-color: #eee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  
  .avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .enter-store-button {
    padding: 15px 30px;
    font-size: 15px;
    border: none;
    background-color: tomato;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
  }
  
  .enter-store-button:hover {
    background-color: orange;
  }
  
  /* 收藏 */
  .box {
    width: 120vh;
    height: 30vh;
    background-color: white;
    margin-top: 15px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    div {
      display: inline-block;
    }
  
    .div_left {
      width: 60%;
      height: 100%;
    }
  
    .div_right {
      width: 40%;
      height: 100%;
      padding: 20px;
      border-radius: 0 10px 10px 0;
  
  
      p {
        display: flex;
        align-items: center;
        color: gray;
      }
  
      pre {
        color: gray;
      }
  
      h3 {
        font-weight: 550;
      }
  
      .div_span_left {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%
      }
  
      .span_left {
        font-size: 18px;
        font-weight: 520;
        width: 200px;
  
      }
    }
  }
  /* 留言 */
  .star_avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 3vh;
  }
  
  .liuyan_content {
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
  