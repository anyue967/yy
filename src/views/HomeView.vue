<template>
  <el-container>
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
        <div class="title">Mageedu猛犸运维系统平台</div>
      </div>
      <div class="userinfo">
        <el-button type="primary" @click="logout">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <!-- 用户管理 start -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="5">
              <i class="el-icon-document"></i>
              <span slot="title">用户列表</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
              <span slot="title">权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 用户管理 end -->
          <el-submenu index="100">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="105">
              <i class="el-icon-document"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-menu-item index="104">
              <i class="el-icon-document"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      window.localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  img {
    height: 40px;
  }
  .logo {
    display: flex;
    .title {
      font-size: 30px;
      margin-left: 5px;
    }
  }
}
.el-aside {
  background-color: #123;
}
.el-main {
  background-color: #f0f2f4;
}
</style>
