<template>
  <div class="contianer_detail">
    <!-- 标题 -->
    <div class="detail_title">{{ station.name }}</div>
    <div class="detail_content">{{ station.introduce }}</div>
    <div class="detail_content" style="text-indent: 0;">地址：{{ station.address }}</div>
    <div class="detail_content" style="text-indent: 0;">联系方式：<span style="color: blue;">{{ station.contact }}</span>
    </div>
    <!-- 图片 -->
    <div class="detail_picture">
      <el-image style="width: 100%; height: 100%;" :src="station.picture" fit="cover" />
    </div>
    <!-- 申请 -->
    <div style="display: flex;justify-content: flex-start;align-items: center;"> 
      <textarea v-model="reason" style="border: 1px solid black;width: 40vh;height: 4vh;margin-right: 2vh;font-size: 15px;" placeholder="请输入申请原因"></textarea>
      <button :class="buttonClass" @click="toApply" :disabled="isApplying">
        {{ buttonText }}
      </button>
    </div>

  </div>

</template>

<script setup>
import { ref, onMounted } from "vue"
import { detailApi, applyApi } from '@/apis/stationApi'
import { useRoute } from "vue-router";
const route = useRoute();
const stationId = route.params.id

//申请 
const isApplying = ref(false);
const buttonText = ref('');
const buttonClass = ref('button');
const reason = ref('')

const apply = () => {
  if (buttonText.value == '志愿者申请' || buttonText.value == '已拒绝，重新申请') {
    isApplying.value = false
  } else {
    isApplying.value = true;
    buttonClass.value = 'button-disabled';
  }
};
const toApply = async () => {
  await applyApi(stationId,reason.value)
  getDetail()
  reason.value = ''
}

// 渲染

const station = ref({})
const getDetail = async () => {
  const res = await detailApi(stationId)
  station.value = res.data.data.station
  buttonText.value = station.value.state
  apply()
}

onMounted(() => getDetail())
</script>

<style lang="scss" scoped>
.contianer_detail {
  width: 120vh;
  background-color: white;
  margin: 20px;
  padding: 5vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .detail_title {
    font-size: 40px;
    font-weight: 1000;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  .detail_content {
    margin-top: 3vh;
    width: 80vh;
    font-size: 18px;
    text-indent: 2em;
    /* 段落首行缩进，text-indent的值为font-size的2倍，相当于缩进2个汉字 */
    line-height: 1.5em;
    /* line-height的值为font-size的1.5倍，即1.5倍行距，使用line-height: 1.5效果相同 */
    text-align: justify;
    /* 左右对齐 */
  }

  .detail_picture {
    margin: 3vh 0;
    width: 80vh;
    height: 30vh;
    background-color: skyblue;
  }

  p {
    display: flex;
    align-items: center;
    color: gray;
  }

  pre {
    color: gray;
  }
}

//申请
.button {
  background-color: tomato;
  border-radius: 10px;
  width: 15vh;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.button-disabled {
  background-color: grey;
  border-radius: 10px;
  width: 15vh;
  color: white;
  padding: 10px;
  border: none;
  cursor: not-allowed;
}
</style>
