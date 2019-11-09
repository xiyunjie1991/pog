<template>
  <div
    class="login"
    v-bind:style="{backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}"
  >
    <div class="header">
      <div class="passWordLogin">
        <p>密码登陆</p>
      </div>
    </div>
    <div
      class="logo"
      v-bind:style="{backgroundImage:'url(' + logo + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'
      }"
    ></div>
    <div class="form">
      <el-form :model="form" :rules="rules">
        <el-form-item prop="name">
          <el-input v-model="form.name" placeholder="请输入登录名" prefix-icon="el-icon-phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        baseUrl: ""
      },
      bg: require("@/assets/img/loginBackground.png"),
      logo: require("@/assets/img/logo.png"),
      rules: {}
    };
  },
  created() {
    this.baseUrl = process.env.VUE_APP_BASE_API;
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    onSubmit() {
      this.$store
        .dispatch("login", this.form)
        .then(v => {
          console.info("login", v);
          if (v.success) {
            console.info("v.success", this.$route.query.redirect);
            const path = this.$route.query.redirect || "/";
            this.$router.push(path);
          }
        })
        .catch(err => {
          this.$notify({
            title: "警告",
            message: "登陆失败",
            type: "warning"
          });
          console.error("login error", err);
        });
    }
  },
  components: {}
};
</script >

<style lang="stylus" scoped>
.login {
  height: 100%;
  width: 100%;
  padding: 31pt 20pt;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .header {
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    align-self: flex-end;

    .passWordLogin {
      color: #5B788C;
    }
  }

  .logo {
    width: 170px;
    height: 90px;
    margin-top: 34pt;
  }

  .form {
    margin-top: 100px;

    .el-form /deep/ .el-form-item--mini {
      .el-input__inner {
          border:1px #5B788C solid;
        background: transparent;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-radius :0;
      
      }
    }
  }
}
</style>
