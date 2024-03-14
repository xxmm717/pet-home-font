<template>
    <div class="contianer" v-for="item in list">
        <!-- 单个盒子 -->
        <div class="main">
            <!-- 发表用户 -->
            <div>
                <!-- 头像 -->
                <div class="demo-type avatar">
                    <el-avatar :size="60">
                        <img :src=item.avatar />
                    </el-avatar>
                    <div class="content">
                        <span style="font-size: 16px;">{{ item.username }}</span>
                        <span>联系方式： {{ item.phone }}</span>
                    </div>
                </div>
            </div>
            <hr style="margin: 1vh 0;">
            <!-- 地址时间 -->
            <h1>{{ item.address }}</h1>
            <pre style="color: gray;margin: 1vh 0;font-size: 15px;font-weight: 600;">丢失时间： {{ dateChange(item.datetime) }}</pre>
            <!-- 描述 -->
            <div style="margin: 1vh 0;font-size: 18px;">{{ item.description }}</div>
            <!-- 图片 -->
            <div class="pictures">
                <span>
                    <el-image style="width: 30vh; height: 40vh;" :src=item.p1 fit="cover" />
                </span>
                <span>
                    <el-image style="width: 30vh; height: 40vh;" :src=item.p2 fit="cover" />
                </span>
                <span>
                    <el-image style="width: 30vh; height: 40vh;" :src=item.p3 fit="cover" />
                </span>
               
            </div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { lostApi } from "@/apis/lostApi";
import { dateChange } from "@/utils/dateUtils";

// 渲染
const list = ref()
const getList = async () => {
    const res = await lostApi()
    list.value = res.data.data.list
}

onMounted(() => getList())

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
    width: 100vh;
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
    padding-left: 3vh;
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
</style>
