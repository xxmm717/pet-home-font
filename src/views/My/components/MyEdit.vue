<template>
  <div class="pub_contianer">
    <div class="detail">

      <el-form v-model="form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" type="text"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group v-model="form.gender">
            <el-radio value="男">男</el-radio>
            <el-radio value="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age" :rules="[
        { type: 'number', message: '必须为数字' },
      ]">
          <el-input v-model.number="form.age" type="number" autocomplete="off" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" type="text"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.phone" type="text"></el-input>
        </el-form-item>
        <el-form-item label="喜好">
          <el-input v-model="form.love" type="text"></el-input>
        </el-form-item>

        <!-- 上传图片 -->
        <el-form-item label="选择头像">
          <el-upload list-type="picture-card" action="http://localhost:8000/lost/upload" :http-request="uploadImage"
            limit="1" :on-preview="handlePreview" :on-remove="handleRemove" :before-upload="beforeUpload">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="图片描述" />
          </el-dialog>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">立即发布</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { editApi } from "@/apis/myApi";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter()

const form = ref({
  username: '',
  gender: '',
  age: '',
  address: '',
  phone: '',
  love: ''
});
const pictures = ref([])

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
// 发布
const submitForm = async () => {
  const formData = form.value

  await editApi(formData, pictures.value)
  ElMessage({
    type: 'success',
    message: '修改成功'
  })
  form.value = '';
  pictures.value = '';
  setTimeout(() => {
    router.push({ path: '/myMain' })
  }, 1000)
};

const resetForm = (formName) => {
  this.$refs[formName].resetFields();
};
//上传图片
const handleRemove = (file, fileList) => {
  console.log(file, fileList);
};

const handlePreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};

const beforeUpload = (file) => {
  const isJPGorPNG = file.type === 'image/jpeg' || file.type === 'image/png';
  const isLt4M = file.size / 1024 / 1024 < 4;

  if (!isJPGorPNG) {
    this.$message.error('上传图片只能是 JPG 或 PNG 格式!');
  }
  if (!isLt4M) {
    this.$message.error('上传图片大小不能超过 4MB!');
  }
  return isJPGorPNG && isLt4M;
};

// 上传图片
const uploadImage = async (uploadFile) => {
  const formData = new FormData()
  formData.append('file', uploadFile.file)

  const response = await axios.post(uploadFile.action, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  const p = response.data.data.url
  pictures.value.push(p)
  // 这里是后端的响应数据
  console.log(p)
}

</script>

<style lang="scss" scoped>
.pub_contianer {
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  .detail {
    width: 100vh;
    height: 78vh;
    background-color: white;
    padding: 3vh;
  }
}
</style>
