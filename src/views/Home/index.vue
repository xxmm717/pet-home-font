<template>
  <div class="home-contianer">
    <div class="el-carousel-contianer">
      <!-- 轮播图 -->
      <el-carousel>
        <el-carousel-item v-for="item in pictures" :key="item" style="width: 100vh; height: 50vh;">
          <h3 class="small justify-center" text="2xl">
            <el-image style="width: 100vh; height: 50vh;" :src=item fit="cover" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="width: 100%;height: 60vh;background-color: white;"></div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const pictures = ref([
  'https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE1.jpg',
  'https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE2.jpg',
  'https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE3.jpg'
])

</script>


<style lang="scss" scoped>
.home-contianer {
  width: 100%;
  height: 100vh;
}

// 轮播图
.el-carousel-contianer {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.el-carousel {
  width: 100vh;
  height: 50vh;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>