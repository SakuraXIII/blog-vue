<template>
<div class="login_container">
<div class="login_box">
  <!--头像区域-->
  <div class="avatar_box">
    <img src="../assets/img/logo.png" alt="">
  </div>
  <!--登陆表单区域-->
  <el-form ref="loginFormRef" :rules="loginFormRules" label-width="0px" :model="loginForm" class="login_form">
    <!--用户名-->
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
    </el-form-item>
    <!--密码-->
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
    </el-form-item>
    <el-form-item class="btns">
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="into" @click="resetLoginForm">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 4, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮,重置登陆表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () { // valid是验证的结果,形参,一个bool值
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return
        const {data: res} = await this.$axios.post('login', this.loginForm)
        console.log(res)
        if (res.code !== 200) {
          return this.$message({
            message: '登陆失败',
            type: 'error',
            duration: 1500,
            showClose: true,
            center: true,
            offset: 50
          })
        }
        this.$message({
          message: '登陆成功',
          type: 'success',
          duration: 1500,
          showClose: true,
          center: true,
          offset: 50
        })
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container{
  /*background: url("../assets/img/logo_wallpaper.jpg") no-repeat;*/
  /*height: 100%;*/
  background: linear-gradient(calc(162deg), rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%), linear-gradient(calc(633deg), rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%), linear-gradient(calc(216deg), rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%), linear-gradient(calc(591deg), rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%), linear-gradient(calc(294deg), rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%), linear-gradient(calc(410deg), rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.9%), linear-gradient(calc(608deg), rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.9%), linear-gradient(calc(300deg), rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%, rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%, rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%), linear-gradient(calc(377deg), rgb(183, 38, 227), rgb(11, 11, 239));
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  border-radius: 3px;
  background-color: #F0F8FF;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.btns{
  display: flex;
  justify-content: flex-end;
}
.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
