<template>
   <!-- 单个盒子 -->
   <div class="box" v-for="item in list" :key="item.stationId">
      <!-- 图片 -->
      <div class="div_left">
        <el-image style="width: 100%; height: 100%;border-radius: 10px 0 0 10px;" :src="item.picture" fit="cover" />
      </div>
      <!-- 文字描述 -->
      <div class="div_right" @click="pushDetail(item.stationId)">
        <h1>{{ item.name }}</h1>
        <br>
        <pre>地址:{{ item.address }}</pre>
        <br>
        <div class="div_span_left"><span class="span_left">{{ item.introduce }}</span></div>
      </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue"
import { listApi } from "@/apis/stationApi";
import { useRouter } from 'vue-router';
const router = useRouter()

// 渲染
const list = ref([])
const getList = async () => {
  const res = await listApi()
  list.value = res.data.data.list
}

onMounted(()=>getList())

//跳转详情
const pushDetail = (id) => {
  router.push({name: 'rescueDetail',params: {'id':id}})
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
      font-size: 15px;
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
