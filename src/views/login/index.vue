<template>
  <div class="login-container">
    <!--表单，验证-->
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm" autoComplete="on" labelPosition="left">
      <h3 class="title">系统登陆</h3>

      <!--输入项-->
      <el-form-item prop="userName">
        <span class="svg-container">
          <icon-svg iconClass=""></icon-svg>
        </span>
        <el-input name="userName" type="text" v-model="loginForm.userName" autoComplete="on" placeholder="邮箱"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <icon-svg iconClass=""></icon-svg>
        </span>
        <el-input name="userName" type="password" v-model="loginForm.password" autoComplete="on" placeholder="密码"></el-input>
        <span class='show-pwd' @click='showPwd'><icon-svg iconClass="yanjing"></icon-svg></span>
      </el-form-item>

      <!--按钮-->
      <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>

      <el-button class="third-party-button" type="primary" @click="showDialog=true">第三方登陆</el-button>

      <!--对话框-->
      <el-dialog  title="第三方验证" :visible.sync="showDialog">

      </el-dialog>
    </el-form>
  </div>
</template>

<script>
  import { isValidUsername } from '@/utils/validate';

  export default {
    name: 'login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isValidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {          // 表单model
          userName: 'admin',
          password: '123456'
        },
        loginRules: {         // 表单验证规则
          userName: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false,
        showDialog: false
      };
    },
    methods: {
      showPwd() {

      },
      handleLogin(){
        this.$refs.loginForm.validate(valid => {
          if(valid) {
            this.loading = true;
          }
        });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/mixin.scss';

  $bg: #7a849c;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    @include relative;
    height: 100vh;
    background: $bg;
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
      -webkit-text-fill-color: #fff !important;
    }

    .login-form {
      position: absolute;
      width: 400px;
      left: 0;
      right: 0;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }

    .title {
      font-size: 26px;
      font-weight: bold;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
    }

    .el-form-item {
      border:1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
      margin: 15px auto;
    }

    .el-input {
      display: inline-block;
      height: 45px;
      width: 85%;
    }

    input {
      background: transparent;
      border: 0;
      -webkit-appearance: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 45px;
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }

    .third-party-button{
      position: absolute;
      right: 35px;
    }
  }
</style>
