<template>
  <!-- 单个盒子 -->
  <div class="box" v-for="item in list" :key="item.announcementId">
    <!-- 图片 -->
    <div class="div_left">
      <el-image style="width: 100%; height: 100%;border-radius: 10px 0 0 10px;" :src=item.picture fit="cover" />
    </div>
    <!-- 文字描述 -->
    <div class="div_right">
      <h1>{{ item.title }}</h1>
      <br>
      <p><el-icon>
          <UserFilled />
        </el-icon>宠物之家互联网流浪动物救助平台 </p>
      <pre>  {{ dateChange(item.datetime) }}</pre>
      <br>
      <div class="div_span_left"><span class="span_left">{{ item.content }}</span></div>
      <div style="display: flex; justify-content: center;align-items: center;margin-top: 5vh;">
        <button
          style="background-color: skyblue;width: 5vh;height: 3vh;border: none;border-radius: 5px;margin-right: 2vh;"
          @click="toUpdate(item.announcementId)">修改</button>
        <button style="background-color: tomato;width: 5vh;height: 3vh;border: none;border-radius: 5px;"
          @click="toRemove(item.announcementId)">删除</button>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from "vue"
import { ARemoveApi } from "@/apis/adminApi";
import { UserFilled } from "@element-plus/icons-vue";
import { announceApi } from "@/apis/announceApi";
import { dateChange } from "@/utils/dateUtils";
import { useRouter } from 'vue-router';
const router = useRouter()
import { useActiveStore } from "@/stores/activeStore";
const activeStore = useActiveStore()
// 获取公告列表渲染
const list = ref()
const getList = async () => {
  const res = await announceApi()
  list.value = res.data.data.list
}

onMounted(() => getList())

const toUpdate = (id) => {
  // activeStore.id = id
  localStorage.setItem('announcementId', id)
  router.push({ path: '/amUpdate' })
}

const toRemove = async (id) => {
  localStorage.setItem('announcementId', id)
  await ARemoveApi(id)
  ElMessage({
    type: 'success',
    message: '删除成功'
  })
  getList()
}

</script>

<style lang="scss" scoped>
.box {
  width: 120vh;
  height: 30vh;
  background-color: white;
  margin-top: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: inline-block;
  }

  .div_left {
    width: 60%;
    height: 100%;
  }

  .div_right {
    width: 40%;
    height: 100%;
    padding: 20px;
    border-radius: 0 10px 10px 0;


    p {
      display: flex;
      align-items: center;
      color: gray;
    }

    pre {
      color: gray;
    }

    h3 {
      font-weight: 550;
    }

    .div_span_left {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%
    }

    .span_left {
      font-size: 18px;
      font-weight: 520;
      width: 200px;

    }
  }
}
</style>
