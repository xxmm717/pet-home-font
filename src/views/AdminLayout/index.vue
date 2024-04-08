<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
      <el-header class="contianer_header">
        <!-- logo -->
        <div class="contianer_logo">
          <!-- 图片 -->
          <el-image style="width: 15vh; height: 15vh;" 
          src="https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/logo.jpg" fit="cover" />
          <!-- 文字 -->
          <div class="text">
            <div class="word">宠 物 之 家 互 联 网 流 浪 动 物 救 助 平 台</div>
            <div class="word">PetHome Stray animal rescue platform</div>
          </div>
        </div>
        <!-- 导航 -->
        <el-menu :default-active="activeIndex" class="el-menu-demo contianer_nav" mode="horizontal"
          background-color="#337ab7" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="1" class="nav_text" @click="pushEreview">志愿者审核</el-menu-item>
          <el-menu-item index="2" class="nav_text" @click="pushRreview">领养审核</el-menu-item>
          <el-menu-item index="3" class="nav_text" @click="pushpubA">发布公告</el-menu-item>
          <el-menu-item index="4" class="nav_text" @click="pushPubR">发布流浪动物救助信息</el-menu-item>
          <el-menu-item index="5" class="nav_text" @click="pushpubAM">公告管理</el-menu-item>
          <el-menu-item index="6" class="nav_text" @click="pushPubRM">流浪动物救助信息管理</el-menu-item>
          <el-menu-item index="7" class="nav_text" @click="exit">退出</el-menu-item>
        </el-menu>
      </el-header>

      <!-- 版心 -->
        <RouterView></RouterView>
        
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()

const activeIndex = ref()
activeIndex.value = localStorage.getItem('active2')

const pushEreview = () => {
  router.push({path: '/Ereview'})
  localStorage.setItem('active2','1')
}
const pushRreview = () => {
  router.push({path: '/Rreview'})
  localStorage.setItem('active2','2')
}
const pushpubA = () => {
  router.push({path: '/pubA'})
  localStorage.setItem('active2','3')
}
const pushPubR = () => {
  router.push({path: '/pubR'})
  localStorage.setItem('active2','4')
}
const pushpubAM = () => {
  router.push({path: '/am'})
  localStorage.setItem('active2','5')
}
const pushPubRM = () => {
  router.push({path: '/rm'})
  localStorage.setItem('active2','6')
}

const exit = () => {
  router.replace({path: '/adminLogin'})
}

</script>

<style lang="scss" scoped>
.contianer_header {
  width: 100%;
  height: 22vh;
  padding: 0;
}

.contianer_main {
  width: 100%;
  padding: 0;
  height: 1200px;
}

.contianer_nav {
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav_text {
    font-family: 微软雅黑;
    font-size: 18px;
  }
}

.contianer_logo {
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    margin-left: 10px;
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .word {
      font-size: 25px;
      color: #073763;
      font-weight: 800;
      font-family: 微软雅黑
    }
  }
}
</style>

