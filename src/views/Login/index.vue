<template>
  <div class="contianer">
    <RouterView/>
  </div>
</template>

<script setup>
import { ref } from "vue"
import LoginMain from '@/views/Login/components/LoginMain.vue'

</script>

<style lang="scss" scoped>
.contianer {
  width: 100%;
  height: 100vh;
  background-size:100% 100%;
  background-image: url('https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E9%A6%96%E9%A1%B5%E8%83%8C%E6%99%AF2.png');
  display: flex;
  justify-content: center;
}
</style>
