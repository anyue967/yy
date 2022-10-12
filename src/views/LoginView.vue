<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avtar_box">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <!-- 表单 -->
      <el-form class="login_form"  label-width="80px">
        <el-form-item label="登录名">
          <el-input placeholder="请输入登录名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #3d8ea7;
    height: 100%;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute; // 相对于父绝对定位
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .avtar_box {
    height: 160px;
    width: 160px;
    padding: 5px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .avtar_box img {
    height: 160px;
    width: 160px;
    border-radius: 20%;
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>
