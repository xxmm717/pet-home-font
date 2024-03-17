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
        <el-menu :default-active="activeIndex2" class="el-menu-demo contianer_nav" mode="horizontal"
          background-color="#337ab7" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
          <el-menu-item index="1" class="nav_text" @click="pushHome">首页</el-menu-item>
          <el-menu-item index="2" class="nav_text" @click="pushAnnounce">知识公告</el-menu-item>
          <el-menu-item index="3" class="nav_text" @click="pushLost">丢失宠物</el-menu-item>
          <el-menu-item index="4" class="nav_text" @click="pushPlatform">动物论坛</el-menu-item>
          <el-menu-item index="6" class="nav_text" @click="pushStation">救助站</el-menu-item>
          <el-menu-item index="7" class="nav_text" @click="pushRescue">流浪动物救助</el-menu-item>
          <el-menu-item index="8" class="nav_text" @click="pushMy">我的</el-menu-item>
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

const activeIndex2 = ref()
activeIndex2.value = localStorage.getItem('active')

const pushHome = () => {
  router.push({path: '/home'})
  localStorage.setItem('active','1')
}
const pushAnnounce = () => {
  router.push({path: '/announcement'})
  localStorage.setItem('active','2')
}
const pushLost = () => {
  router.push({path: '/lost'})
  localStorage.setItem('active','3')
}
const pushPlatform = () => {
  router.push({path: '/platform'})
  localStorage.setItem('active','4')
}
const pushVolunteer = () => {
  router.push({path: '/volunteer'})
  localStorage.setItem('active','5')
}
const pushStation = () => {
  router.push({path: '/station'})
  localStorage.setItem('active','6')
}
const pushRescue = () => {
  router.push({path: '/rescue'})
  localStorage.setItem('active','7')
}
const pushMy = () => {
  router.push({path: '/my'})
  localStorage.setItem('active','8')
}


const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
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
