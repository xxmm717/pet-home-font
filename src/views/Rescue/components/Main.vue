<template>
  <div class="main">
    <!-- 头部 -->
    <!-- 版心 -->
    <div class="wrap">
      <div class="box_container" v-for="row in 3">
        <!-- 单个盒子 -->
        <!-- 图片 -->
        <div class="box" v-for="item in list.slice((row - 1) * 5, (row) * 5)" :key="item.rescueId">
          <el-image style="width: 100%; height: 35vh;border-radius: 20px;" :src=item.cover fit="cover"
            @click="inside(item.rescueId)" />
          <!-- 标题 -->
          <h4 @click="inside(item.rescueId)" style=" overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
            {{ item.name }}&emsp;{{ item.gender }}&emsp;{{ item.type }}
          </h4>
          <h4 @click="inside(item.rescueId)" style=" overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
            年龄：{{ item.age }}
          </h4>
          
        </div>

      </div>
      <!-- 分页 -->
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="total" :pageSize="pageSize"
          v-model:current-page="page" @click="getList" />
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { listApi } from "@/apis/rescueApi";
import { useRouter } from "vue-router";
const router = useRouter()

const page = ref(1)
const pageSize = ref(10)
const total = ref(0)
const list = ref([])
const search = ref('')

// 进入详情
const inside = (id) => {
  // localStorage.setItem('id',id)
  router.push({ name: 'helpInside',params: {'id':id} })
}
//渲染
const getList = async () => {
  const res = await listApi(page.value, pageSize.value)
  total.value = res.data.data.list.total
  list.value = res.data.data.list.records
}

onMounted(() => getList())


</script>

<style lang="scss" scoped>
.main {
  width: 150vh;
  background-color: white;
  padding: 1vh;
}

.wrap {
  width: 100%;
}


// 搜索框
.search-container {
  margin: 1vh 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
}

.search-wrapper {
  display: flex;
  width: 60vh;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  outline: none;
}

button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0 20px 20px 0;
  background-color: red;
  /* Green background color for the button */
  color: white;
  /* White text color for the button */
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: palevioletred;
}

// 版心盒子
.box_container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  /* 你可以根据需要调整间距大小 */
  width: 100%;
  padding-bottom: 10px;
}

.box {
  flex: 0 1 calc(20% - 3.5vh);
  width: 20vh;
  /*
flex-grow: 控制项目的放大比例。在这里，1 表示项目可以根据剩余空间等比例分配，并填满整个父容器的宽度。如果设置为0，项目不会放大。
flex-shrink: 控制项目的缩小比例。在这里，0 表示项目不会缩小，即不允许项目缩小。如果设置为1，项目将按比例缩小。
flex-basis: 定义了在分配多余空间之前，项目占据的主轴空间。在这里，calc(25% - 10px) 设置了项目在主轴上占据的初始空间。
这个部分是通过一个计算表达式来确定的，表示每个项目的基础宽度为25%减去10像素。
*/
}

// 分页
.page {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
}

// 小盒子图片区域布局
.box_picture {
  width: 180px;
  height: 180px;
  background-color: #fafafa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;

  }
}

// 小盒子文字区域布局
.box_text {
  padding: 0px;
  width: 100%;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  .title {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
  }

  .title_span {
    height: 100%;
    width: 100%;
    line-height: 100%;
    text-align: left;
    font-size: 18px;
    line-height: 1.5em;
    /* 使用em作为单位 */
  }

  .price {
    width: 100%;
    height: 70px;
    text-align: left;
    padding-left: 10px;
    font-size: large;
    color: #ff5000;
    font-weight: 500;
  }
}

// 标题详情
.avatar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.content {
  width: 100%;
  height: 5vh;
  display: inline-block;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1vh;
  padding-right: 1vh;
}
</style>
