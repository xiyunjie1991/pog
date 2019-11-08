<template>
  <div>
    注册

    <div style="width:300px; ">

      <el-form
        ref="form"
        :model='form'
        :rules="rules"
        size="mini"
        label-width="80px"
      >
        <el-form-item
          label='用户名'
          prop='username'
        >
          <el-input v-model="form.username">

          </el-input>
        </el-form-item>
        <el-form-item
          label='手机号'
          prop='phone'
        >
          <el-input
            v-model="form.phone"
            type="number"
          ></el-input>
        </el-form-item>
        <el-form-item
          label='验证码'
          prop='code'
        >
          <el-input
            v-model="form.code"
            placeholder="输入验证码"
            type="number"
          >
            <el-button
              slot="append"
              icon="el-icon-message"
              @click="sendMessage"
            ></el-button>
          </el-input>

        </el-form-item>
        <el-form-item
          label='密码'
          prop='password'
        >
          <el-input
            v-model="form.password"
            type="password"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submit"
          >提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        phone: null,
        code: null
      },
      rules: {
        phone: [
          {
            validator: (rule, value, callback) => {
              if (!value) {
                callback(new Error("请输手机号"));
              } else if (/^[1][0-9]{10}$/.test(value)) {
                callback();
              } else {
                callback(new Error("请输入正确的手机号"));
              }
            }
          },
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],

        code: [
          {
            min: 4,
            max: 4,
            message: "请输入正确的验证码",
            trigger: "blur"
          },
          { required: true, message: "请输入验证码", trigger: "blur" }
        ],

        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    sendMessage() {
      axios.post("/api/code", this.form).then(({ data }) => {
        console.info("api/code", data);
        this.form.code = data.phoneCode;
      });
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: "注册成功",
            type: "success"
          });
          this.$router.push({ path: "/" });
          // setTimeout(function(){

          // },2000)
        } else {
          this.$message({
            message: "请填写正确的信息",
            type: "warning"
          });
          return false;
        }
      });
    }
  },
  components: {}
};
</script >

<style scoped>
</style>
