<template>
    <div class="contianer" v-for="item in list">
        <!-- 单个盒子 -->
        <div class="main">
            <div>申请人：</div>
            <!-- 头像 -->
            <div class="demo-type avatar">
                <el-avatar :size="60">
                    <img :src="item.avatar" />
                </el-avatar>
                <div class="content">
                    <span style="font-size: 16px;">{{ item.username }}</span>
                </div>
            </div>
            <div class="text_div">联系方式：{{ item.phone }}</div>
            <div class="text_div">性别: {{ item.gender }}</div>
            <div class="text_div">年龄: {{ item.age }}</div>
            <div class="text_div">地址：{{ item.address }}</div>
            <hr>
            <div class="text_div">救护站名称：{{ item.stationName }}</div>
            <div class="text_div">申请原因：{{ item.reason }}</div>
            <div style="display: flex;justify-content: center;justify-content: center;width: 100%;margin-top: 2vh;">
                <button class="agree" @click="send('agree',item.stationId,item.userId)">同意</button>
                <button class="reject" @click="send('reject',item.stationId,item.userId)">拒绝</button>
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { dateChange } from "@/utils/dateUtils";
import { EreviewApi,snedApi } from "@/apis/adminApi"

// 渲染
const list = ref()
const getList = async () => {
    const res = await EreviewApi()
    list.value = res.data.data.list
}

onMounted(() => getList())
//提交
const send = async (result,stationId,userId) => {
    await snedApi(result,stationId,userId)
    getList()
}

</script>

<style lang="scss" scoped>
.contianer {
    width: 100%;
    background-color: #eee;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.main {
    width: 80vh;
    background-color: white;
    border-radius: 20px;
    padding: 2vh;
    margin-bottom: 1vh;
}

// 用户详情
.avatar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1vh 0;
}

.content {
    width: 100%;
    display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3vh;
    padding-right: 5vh;
}

.pictures {
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
        width: 30vh;
    }
}

.agree {
    width: 8vh;
    height: 3vh;
    background-color: tomato;
    margin-right: 5vh;
    border: none;
    border-radius: 5px;
}

.agree:active {
    background-color: orange;
}

.reject {
    width: 8vh;
    height: 3vh;
    background-color: skyblue;
    margin-left: 5vh;
    border: none;
    border-radius: 5px;
}
.reject:active {
    background-color: orange;
}

.text_div {
    margin: 1vh 0;
}

</style>
