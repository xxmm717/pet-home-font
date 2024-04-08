<template>
  <div class="contianer">
    <!-- 版心 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import {} from "vue"
</script>

<style lang="scss" scoped>
.contianer {
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>
