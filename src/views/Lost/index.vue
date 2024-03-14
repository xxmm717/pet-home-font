<template>
  <el-affix :offset="120" style="padding-left: 33vh;background-color: #eee;">
    <el-button type="primary" style="background-color: tomato;width: 10vh;" @click="pub">发布</el-button>
  </el-affix>
  <RouterView></RouterView>

</template>

<script setup>
import { } from "vue"
import Main from '@/views/Lost/components/Main.vue'
import { useRouter } from "vue-router";
const router = useRouter()
const pub = () => {
  router.push({path: '/lostPub'})
}

</script>

<style lang="scss" scoped>

//头部
.affix-container {
  text-align: center;
  height: 40px;
  border-radius: 4px;
  position: relative;
}
</style>
