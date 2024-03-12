<template>
    <div class="main_contianer">
        <div class="common-layout">
            <el-container>
                <!-- 标题 -->
                <el-header class="Login_header_contianer">
                    <img src="https://tanhua-zxm.oss-cn-hangzhou.aliyuncs.com/pet-home/logo.jpg" alt="">
                </el-header>
                <!-- 版心 -->
                <el-main class="Login_main_contianer">
                    <div class="login-container">
                        <form>
                            用户名：<input v-model="inputUsername" type="text" placeholder="请输入用户名" required>
                            密码：&nbsp &nbsp <input v-model="inputPassword" type="password" placeholder="请输入密码" required>
                        </form>
                        <button @click="sendMsg" style="background-color: orange;">注册</button>
                        <br>
                        <p> <a href="/login" style="color: blue;">返回登录</a></p>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { registerApi } from '@/apis/userApi';
import { useRouter } from 'vue-router';
const router = useRouter()
// 登录
const inputUsername = ref()
const inputPassword = ref()

const sendMsg = async () => {
    const username = inputUsername.value
    const password = inputPassword.value
    const res = await registerApi({ username, password })
    const code = res.data.code
    if (code == '001') {
        ElMessage({
            type: 'success',
            message: '注册成功'
        })
    } else {
        ElMessage({
            type: 'error',
            message: res.data.msg
        })
    }
}

</script>

<style lang="scss" scoped>
.main_contianer {
    width: 30%;
    height: 65vh;
    border-radius: 20px;
    padding-top: 80px;
}

.Login_header_contianer {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

}

.Login_main_contianer {
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0%;
}

// 登录框
.login-container {
    width: 400px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.login-container input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-container button {
    width: 50%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-container button:hover {
    background-color: #45a049;
}
</style>