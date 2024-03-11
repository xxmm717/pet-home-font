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
          <el-menu-item index="1" class="nav_text">首页</el-menu-item>
          <el-menu-item index="2" class="nav_text">知识公告</el-menu-item>
          <el-menu-item index="3" class="nav_text">丢失宠物</el-menu-item>
          <el-menu-item index="4" class="nav_text">动物论坛</el-menu-item>
          <el-menu-item index="5" class="nav_text">志愿者</el-menu-item>
          <el-menu-item index="6" class="nav_text">救助站</el-menu-item>
          <el-menu-item index="7" class="nav_text">流浪动物救助</el-menu-item>
          <el-menu-item index="8" class="nav_text">我的</el-menu-item>
        </el-menu>
      </el-header>
      <!-- 版心 -->
      <el-main class="contianer_main">
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex2 = ref('1')
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
