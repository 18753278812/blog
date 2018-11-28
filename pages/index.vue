<template>
  <section class="container">
    <div class="top">
      <div class="login-box">
        <el-input
          v-model="username"
          class="inp"
          placeholder="用户名"
          size="mini"
        ></el-input>
        <el-input
          v-model="password"
          class="inp"
          placeholder="密码"
          size="mini"
          @keyup.enter.native="login"
        ></el-input>
      </div>
    </div>
    你好，{{userinfo}}
    <el-button @click="user">获取用户信息</el-button>
    <el-button @click="logout">登出</el-button>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { login, user, logout } from '~/api/user'
export default {
  components: {
    Logo
  },
  data() {
    return {
      username: '',
      password: '',
      userinfo: ''
    }
  },
  beforeMount() {

  },
  methods: {
    login() {
      login({
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data) {
          this.$cookie.set('user', JSON.stringify(res.data))
        }
      })
    },
    logout() {
      logout()
    },
    user() {
      user().then(res => {
        this.userinfo = res.data
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.container {
  .top {
    height: 90px;
    .login-box {
      width: 160px;
      float: right;
      .inp {
        margin-top: 12px;
      }
    }
  }
}
</style>
