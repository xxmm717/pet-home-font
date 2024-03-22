<template>
  <div class="pub_contianer">
    <div class="detail">

      <el-form v-model="form" label-width="120px">
        <el-form-item label="标题">
          <el-input v-model="form.title" type="text"></el-input>
        </el-form-item>
        <el-form-item label="详情">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <!-- 上传图片 -->
        <el-form-item label="选择图片">
          <el-upload  list-type="picture-card" action="http://localhost:8000/lost/upload" :http-request="uploadImage" 
            :on-preview="handlePreview" :on-remove="handleRemove" :before-upload="beforeUpload">
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
import { pubApi } from "@/apis/platformApi";
import axios from "axios";

const form = ref({
  title: '',
  content: '',
});
const pictures = ref([])

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
// 发布
const submitForm = async () => {
  const formData = form.value
  // console.log(formData);
  await pubApi(formData,pictures.value)
  ElMessage({
      type: 'success',
      message: '发布成功'
    })
  form.value = '';
  pictures.value = '';
  setTimeout(() => {
    window.location.reload()
  },1000)
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
  const isLt4M = file.size / 1024 / 1024 < 20;

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
