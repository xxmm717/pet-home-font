<template>
    <a href="/merchantLogin" style="font-size: 15px;color: blue;">管理员？</a>
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
                            <!-- 图形验证码 -->
                            <div style="display: flex;justify-content: center;align-items: center;">
                                <div style="width: 120px;height: 50px;border: 1px solid black;overflow: hidden;margin-right: 22px;background-color:aqua;">
                                    <canvas ref="canvas" @click="draw"></canvas>
                                </div>
                                <input type="text" v-model="inputValue" placeholder="请输入验证码" style="width: 200px;height: 40px;">
                            </div>
                        </form>
                        <br>
                        <button @click="check">登录</button>
                        <br>
                        <p>没有账号？ <a href="/register" style="color: blue;">点击注册 </a></p>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { loginApi } from '@/apis/userApi';
import { useRouter } from 'vue-router';
const router = useRouter()
// 登录
const inputUsername = ref()
const inputPassword = ref()

// 图形验证码
const canvas = ref(null);
let code = '';
const inputValue = ref('');

const draw = () => {
    const ctx = canvas.value.getContext('2d');
    ctx.font = '50px SimHei';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0,0,canvas.value.width/2, canvas.value.height/2);
    code = '';
    const randomStr = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    for (let i = 0; i < 4; i++) {
        const txt = randomStr[Math.random() * randomStr.length | 0];
        code += txt;
        ctx.fillStyle = `rgb(${Math.random() * 255 | 0},${Math.random() * 255 | 0},${Math.random() * 255 | 0})`;
        ctx.font = '40px SimHei';
        const x = 10 + i * 25;
        const y = 20 + Math.random() * 10;
        ctx.fillText(txt, x, y);
    }
};
// 登录请求
const check = async () => {
    if (inputValue.value.toLowerCase() === code.toLowerCase()) {
        const username = inputUsername.value
        const password = inputPassword.value
        const res = await loginApi({username,password})
        const userData = res.data
        if (userData.code === '001') {
            ElMessage({
                type: 'success',
                message: userData.msg
            })
            // 将用户信息本地存储
            localStorage.setItem('username', userData.data.user_data['user']['username'])
            localStorage.setItem('token', userData.data.user_data['token'])
            localStorage.setItem('userId', userData.data.user_data['user']['userId'])
            router.push({ path: '/home' })
        } else {
            ElMessage({
                type: 'error',
                message: userData.msg
            })
        }
        
    } else {
        ElMessage({
                type: 'warning',
                message: '验证码错误'
            })
        draw();
    }
};

onMounted(() => {
    draw();
});

</script>

<style lang="scss" scoped>
.main_contianer {
    width: 30%;
    height: 65vh;
    border-radius: 20px;
}

.Login_header_contianer {
    margin-top: 50px;
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
    height: 50vh;
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