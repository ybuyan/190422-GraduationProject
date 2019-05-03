<template>
 <section class="loginContainer">
     <mu-appbar class="title news" style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
        <mu-button icon slot="left" to="/home/mine">
            <mu-icon value="chevron_left" ></mu-icon>
        </mu-button>
    </mu-appbar>
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">用户登录</h2>
        <div class="login_header_title">
          <!-- <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a> -->
          <!-- <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a> -->
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机号码" v-model="phone">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
            </section>
          </div>
          <button class="login_submit" @click="login_submit">登录</button>
          <button class="login_submit" @click="registered_submit">注册</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            loginWay: false,
            computeTime: 0, // 计时的时间
            showPwd: false, // 是否显示密码
            phone: '', // 手机号
            code:'', // 短信验证码
            name: '', // 用户名
            pwd: '', // 密码
            captcha: '', // 图形验证码
            alertText: '', // 提示文本
            alertShow: false, // 是否显示警告框
        }
    },
    computed: {
      rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },

    methods: {
      //注册页面
      registered_submit() {
        this.$router.push('/registered');
      },
      //图片验证
      login_submit(){
        console.log(this.phone)
        // let id = this.$route.query.id
        let apiUrl = this.$store.state.apiUrl+"user/login";
        axios.post(apiUrl, {phoneNumber: this.phone, pw: this.pwd})
            .then(res => {
                console.log(res.data)
                //登录失败,先不讨论
                if (res.data == true) {
                  //设置Vuex登录标志为true，默认userLogin为false
                  this.$store.dispatch("setUser", true);
                  //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                  //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                  localStorage.setItem("Flag", "isLogin");
                  localStorage.setItem("phone",this.phone)
                  this.$router.push("/home");
                  //登录成功
                } else {
                  //iViewUi的友好提示
                  this.$Message.error("你的手机号码和密码填写错误，或者手机号尚未注册");
                }
            });
      },
      // 异步获取短信验证码
      async getCode () {
        // 如果当前没有计时
        if(!this.computeTime) {
          // 启动倒计时
          this.computeTime = 30
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0) {
              // 停止计时
              clearInterval(this.intervalId)
            }
          }, 1000)

          // 发送ajax请求(向指定手机号发送验证码短信)
          const result = await reqSendCode(this.phone)
          if(result.code===1) {
            // 显示提示
            this.showAlert(result.msg)
            // 停止计时
            if(this.computeTime) {
              this.computeTime = 0
              clearInterval(this.intervalId)
              this.intervalId = undefined
            }
          }
        }



      },

      showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      // 异步登陆
      async login () {
        let result
        // 前台表单验证
        if(this.loginWay) {  // 短信登陆
          const {rightPhone, phone, code} = this
          if(!this.rightPhone) {
            // 手机号不正确
            this.showAlert('手机号不正确')
            return
          } else if(!/^\d{6}$/.test(code)) {
            // 验证必须是6位数字
            this.showAlert('验证必须是6位数字')
            return
          }
          // 发送ajax请求短信登陆
          result = await reqSmsLogin(phone, code)

        } else {// 密码登陆
          const {name, pwd, captcha} = this
          if(!this.name) {
            // 用户名必须指定
            this.showAlert('用户名必须指定')
            return
          } else if(!this.pwd) {
            // 密码必须指定
            this.showAlert('密码必须指定')
            return
          } else if(!this.captcha) {
            // 验证码必须指定
            this.showAlert('验证码必须指定')
            return
          }
          // 发送ajax请求密码登陆
          result = await reqPwdLogin({name, pwd, captcha})
        }

        // 停止计时
        if(this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }

        // 根据结果数据处理
        if(result.code===0) {
          const user = result.data
          // 将user保存到vuex的state
          this.$store.dispatch('recordUser', user)
          // 去个人中心界面
          this.$router.replace('/profile')
        } else {
          // 显示新的图片验证码
          this.getCaptcha()
          // 显示警告提示
          const msg = result.msg
          this.showAlert(msg)
        }
      },
      // 关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      },
      // 获取一个新的图片验证码
      getCaptcha () {
        // 每次指定的src要不一样
        this.$refs.captcha.src = 'http://localhost:4000/captcha?time='+Date.now()
      }
    },
}
</script>

<style>
 .loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
 .loginContainer .loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
 .loginContainer .loginInner .login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
 .loginContainer .loginInner .login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
}
 .loginContainer .loginInner .login_header .login_header_title >a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}
 .loginContainer .loginInner .login_header .login_header_title >a:first-child {
  margin-right: 40px;
}
 .loginContainer .loginInner .login_header .login_header_title >a.on {
  color: #02a774;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
}
 .loginContainer .loginInner .login_content >form >div {
  display: none;
}
 .loginContainer .loginInner .login_content >form >div.on {
  display: block;
}
 .loginContainer .loginInner .login_content >form >div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
 .loginContainer .loginInner .login_content >form >div input:focus {
  border: 1px solid #02a774;
}
 .loginContainer .loginInner .login_content >form >div .login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
 .loginContainer .loginInner .login_content >form >div .login_message .get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
 .loginContainer .loginInner .login_content >form >div .login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
 .loginContainer .loginInner .login_content >form >div .login_verification .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
 .loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off {
  background: #fff;
}
 .loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off .switch_text {
  float: right;
  color: #ddd;
}
 .loginContainer .loginInner .login_content >form >div .login_verification .switch_button.on {
  background: #02a774;
}
 .loginContainer .loginInner .login_content >form >div .login_verification .switch_button >.switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
 .loginContainer .loginInner .login_content >form >div .login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
 .loginContainer .loginInner .login_content >form >div .login_hint >a {
  color: #02a774;
}
 .loginContainer .loginInner .login_content >form .login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
 .loginContainer .loginInner .login_content .about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
 .loginContainer .loginInner .go_back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}


/* .demo-text {
    padding: 16px;
    background: #fff;
}
.demo-text p {
    margin: 8px 0;
  }
.mu-demo-form {
    width: 100%;
    max-width: 460px;
}
.container{
    margin-top:4rem;
} */
</style>

