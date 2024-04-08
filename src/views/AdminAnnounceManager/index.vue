<template>
  <div class="contianer">
    <!-- 版心 -->
    <RouterView/>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

</script>

<style lang="scss" scoped>
.contianer {
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15px;
}


</style>

