<template>
  <div class="common-layout box_contianer">

    <el-container class="contianer">
      <!-- 版心 -->
      <el-container class="main_contianer">
        <el-aside class="main_left">
          <!-- 轮播图 -->
          <div>
            <el-carousel style="width: 100%;height: 70vh;">
              <el-carousel-item v-for="item in rescue.picList"
                style="display: flex;justify-content: center;align-items: center;width: 100%;height: 70vh">
                <el-image style="width: 100%;height: 70vh"
                  :src="item"
                  fit="contain" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-aside>
        <!-- 详情 -->
        <el-main class="main_right scroll" style="margin: 2vh 0;">
          <!-- 标题和详情 -->
          <h3 style="margin: 2vh 0;color: gray;">名 &emsp; 字: &nbsp;&nbsp;<span style="color:black;font-weight: 550;">{{ rescue.name }}</span></h3>
          <h3 style="margin: 2vh 0;color: gray;">品 &emsp; 种：&nbsp;<span style="color:black;font-weight: 550;">{{ rescue.type }}</span></h3>
          <h3 style="margin: 2vh 0;color: gray;">年 &emsp; 龄：&nbsp;<span style="color:black;font-weight: 550;">{{ rescue.age }}</span></h3>
          <h3 style="margin: 2vh 0;color: gray;">性 &emsp; 别：&nbsp;<span style="color:black;font-weight: 550;">{{ rescue.gender }}</span></h3>
          <h3 style="margin: 2vh 0;color: gray;">健康状况：&nbsp;<span style="color:black;font-weight: 550;">{{ rescue.healthy }}</span></h3>
          <p style="font-size: 17px;margin: 2vh 0">详情</p>
          <hr>
          <p style="font-size: 17px;margin: 2vh 0;text-indent: 2em;line-height: 1.5;">{{ rescue.detail }}</p>
          <!-- 申请 -->
          <div style="display: flex;justify-content: flex-start;align-items: center;margin-top: 4vh;">
            <textarea v-model="reason" style="border: 1px solid black;width: 40vh;height: 4vh;margin-right: 2vh;
      font-size: 15px;" placeholder="请输入申请原因，申请成功将通过个人联系方式回访"></textarea>
            <button :class="buttonClass" @click="toApply" :disabled="isApplying">
              {{ buttonText }}
            </button>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { detailApi,applyApi } from '@/apis/rescueApi'
import { useRoute } from "vue-router";
const route = useRoute()
const rescueId = route.params.id

//申请 
const isApplying = ref(false);
const buttonText = ref('');
const buttonClass = ref('button');
const reason = ref('')

const apply = () => {
  if (buttonText.value == '申请领养' || buttonText.value == '未通过，重新申请') {
    isApplying.value = false
  } else {
    isApplying.value = true;
    buttonClass.value = 'button-disabled';
  }
};
const toApply = async () => {
  await applyApi(rescueId,reason.value)
  getDetail()
  reason.value = ''
}

// 渲染
const rescue = ref({})
const getDetail = async () => {
  const res = await detailApi(rescueId)
  rescue.value = res.data.data.rescue
  buttonText.value = rescue.value.state
  apply()
}
onMounted(() => {
  getDetail()
})

</script>

<style lang="scss" scoped>
.box_contianer {
  width: 130vh;
}

.contianer {
  width: 100%;
  background-color: #e1e7e9;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_contianer {
  width: 80%;
  height: 10vh;
  background-color: #f7f9fae7;
  border-radius: 20px;
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.main_contianer {
  width: 80%;
  background-color: #f7f9fae7;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main_left {
  height: 73vh;
  width: 45%;
  background-color: #f7f9fae7;
  padding: 10px;
}

.main_right {
  height: 73vh;
  width: 50%;
  background-color: #fafafa;
  padding: 5px;
}

// 轮播图
.el-carousel__item h3 {
  color: #fafafa;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fafafa;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fafafa;
}

// 商品详情
.title {
  width: 100%;
  height: 8vh;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
}

.detail {
  margin-top: 20px;
  width: 100%;
  height: 25vh;
  font-size: 18px;
  line-height: 1.5;
}

.text {
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
}


// 商品详情和评价
.tabs-container {
  display: flex;
  border-bottom: 2px solid #ccc;
}

.tab {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  position: relative;
}

.tab:hover {
  text-decoration: underline;
}

.tab.active {
  text-decoration: underline;
  font-size: 20px;
}

.tab-content {
  display: none;
  padding: 20px;
}

.tab-content.active {
  display: block;
}

// 评价详情
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
  padding-left: 10px;
}

// 隐藏滚动条
.scroll::-webkit-scrollbar {
  width: 0.1em;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: transparent;
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
