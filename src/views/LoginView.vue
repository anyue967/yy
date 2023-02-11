<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avtar_box">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <!-- 表单 start -->
      <el-form class="login_form" label-width="80px" v-bind:model="loginForm" :rules="loginRules" ref="loginFormRef">
        <!-- 登录框 -->
        <el-form-item label="登录名" prop="username">
          <el-input placeholder="请输入登录名" v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 登录框 -->
         <!-- 密码框 -->
        <el-form-item label="密码" prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="loginForm.password" @keyup.enter.native="login" show-password></el-input>
        </el-form-item>
        <!-- 密码框 -->
        <!-- 登录/取消 -->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" v-on:click="restForm">取消</el-button>
        </el-form-item>
        <!-- 登录/取消 -->
      </el-form>
      <!-- 表单 end -->
    </div>
  </div>
</template>

<script>
export default {
  // 所有的数据放在data中的对象里
  data() {
    return { // this.xxx
      loginForm: { username: '', password: '' },
      loginRules: {
        username: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { min: 2, max: 14, message: '长度在2到14个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在6到15个字符', trigger: 'blur' }
        ]
      }
    } // is here
  },
  //
  methods: {
    // this.restForm()
    // restForm
    restForm() {
      // 当前Vue组件本身
      // console.log(this)
      const name = 'loginFormRef'
      console.log(this.$children[0], this.$refs.loginFormRef, this.$refs[name])
      this.$refs[name].resetFields()
    },
    // login
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        console.log(valid)
        if (valid) {
        // 提交数据 nginx proxy WSGI Server
          console.log(this.loginForm)
          const { data: response } = await this.$http.post('login/', this.loginForm) // 127.0.0.1:8000/test/
          console.log(response, '@@@@@@@@@@@@@@@@@@')
          console.log(response.code)
          if (response.code) {
            // 失败了，弹出窗口
            return this.$message.error(response.message)
          }
          // 跳转
          console.log('成功登录了，即将跳转')
          this.$message('成功登录了，即将跳转')
          // token 持久化 localStorage
          window.localStorage.setItem('token', response.access)
          this.$router.push('/home')
          // router.push('')
          // console.log(this)
        }
      })
    }
  }
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
