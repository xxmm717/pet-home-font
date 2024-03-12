<template>
  <div class="home-contianer">
    <div class="el-carousel-contianer">
      <!-- 轮播图 -->
      <el-carousel>
        <el-carousel-item v-for="item in pictures" :key="item" style="width: 130vh; height: 60vh;">
          <h3 class="small justify-center" text="2xl">
            <el-image style="width: 130vh; height: 60vh;" :src=item fit="cover" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 关于 -->
    <div class="contianer_about">
      <div class="about">
        <div class="about-us">关 于 我 们 | ABOUT US</div>
        <!-- 内容 -->
        <div style="height: 60vh;display: flex;justify-content: center;align-items: center;">
          <!-- 图片 -->
          <div class="picture">
            <el-image style="width: 60vh; height: 60vh;"
              src="https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/about.png" fit="cover" />
          </div>
          <!-- 描述 -->
          <div class="content">
            <h1 class="text">平台简介</h1>
            <br>
            <p class="p1">宠物之家互联网流浪动物救助平台（ PetHome Internet stray animal rescue）
              是基于互联网打造的流浪动物救助平台，助力于保护致力于流浪动物保护事业。以珍爱生命、倡导精神文明和发扬人道主义为思想基础，以保护流浪动物、维护流浪动物的生存权利和不受虐待的权利、以及改善和提高小动物的生命条件、饲养水平为宗旨，坚决反对任何虐待、残害流浪动物的行为和思想，为全国流浪动物救助组织及救助人提供专业化救助服务及专项救助物资，为中国流浪动物救助事业打下坚实的基础。
            </p>
            <br>
            <h1 class="text">从未更改的信仰</h1>
            <br>
            <p class="p1">
              我们的理想是崇高而现实的，我们的任务是光荣而艰辛的，我们的道理是漫长而荆棘丛生的。但我们坚信：在以科学、文明、民主、自由为主旋律的二十一世纪的社会生活中，保护环境、人与自然、人与动物应和谐相处的思想，尊重生命、珍惜生命的思想，必将成为人们的共识，并成为推动中国的动物保护事业发展壮大的巨大力量。
            </p>
            <p class="p1">只要有你同行，我们的理想一定会实现!</p>
            <p class="p1">只要有你同行，我们的事业必定会胜利</p>
          </div>
        </div>
      </div>
    </div>
   <!-- 尾部 -->
    <div class="footer">
      <el-image style="width: 100%;" src="https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E9%A6%96%E9%A1%B5%E5%BA%95%E9%83%A8.png" fit="cover" />
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
// 轮播图
const pictures = ref([
  'https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE1.jpg',
  'https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE2.jpg',
  'https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/%E8%BD%AE%E6%92%AD%E5%9B%BE/%E8%BD%AE%E6%92%AD%E5%9B%BE3.jpg'
])

</script>


<style lang="scss" scoped>
.home-contianer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

// 轮播图
.el-carousel-contianer {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-carousel {
  width: 130vh;
  height: 60vh;
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

// 关于
.contianer_about {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-us {
  width: 100%;
  height: 7vh;
  color: #073763;
  font-size: 25px;
  font-weight: 800;
  font-family: '微软雅黑';
  line-height: 7vh;
}

.picture {
  width: 60vh;
  height: 60vh;
  display: inline-block;
  padding: 0;
  margin: 0;
}

.content {
  width: 70vh;
  height: 60vh;
  display: inline-block;
  padding: 0;
  margin: 0;
}

.text {
  color: #073763;
  font-family: '微软雅黑';
}

.p1 {
  text-indent: 2em;
  font-size: 18px;
  font-weight: 550;
}

// 尾部
.footer {
  width: 100%;
  // height: 50vh;
  background-color: skyblue;
}

</style>