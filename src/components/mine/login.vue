<template>
<!-- <div>
    <mu-appbar class="title news" style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
    </mu-appbar>
    <mu-container class="container">
        <mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
            <mu-tab>短信登陆</mu-tab>
            <mu-tab>密码登录</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active === 0">
            <mu-form ref="form" :model="validateForm1" class="mu-demo-form">
                <mu-form-item label="手机号" help-text="" prop="username" :rules="usernameRules1">
                    <mu-text-field v-model="validateForm1.username" prop="username"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="验证码" prop="password" :rules="passwordRules1">
                    <mu-text-field type="password" v-model="validateForm1.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="isAgree11" :rules="argeeRules1">
                    <section> 温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意</section>
                    <mu-checkbox label="同意用户协议" v-model="validateForm1.isAgree1"></mu-checkbox>
                </mu-form-item>
                <mu-form-item style="margin:0 auto">
                    <mu-button style="margin:0 auto" color="primary" @click="submit1">提交</mu-button>
                    <mu-button style="margin:0 auto" @click="clear1">重置</mu-button>
                </mu-form-item>
            </mu-form>
        </div>
        <div class="demo-text" v-if="active === 1">
            <mu-form ref="form" :model="validateForm" class="mu-demo-form">
                <mu-form-item label="用户名" help-text="" prop="username" :rules="usernameRules">
                    <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
                </mu-form-item>
                <mu-form-item label="密码" prop="password" :rules="passwordRules">
                    <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="isAgree" :rules="argeeRules">
                    <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
                </mu-form-item>
                <mu-form-item>
                    <mu-button style="margin:0 auto" color="primary" @click="submit">提交</mu-button>
                    <mu-button style="margin:0 auto" @click="clear">重置</mu-button>
                </mu-form-item>
            </mu-form>
        </div>
    </mu-container>
</div>     -->
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
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification"
                      :class="{right_phone: rightPhone}" @click.prevent="getCode">
                {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
                <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
                  @click="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
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
    // data() {
    //     return {
    //         active: 0,
    //         usernameRules: [
    //             { validate: (val) => !!val, message: '必须填写用户名'},
    //             { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
    //         ],
    //         passwordRules: [
    //             { validate: (val) => !!val, message: '必须填写密码'},
    //             { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
    //         ],
    //         argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
    //         validateForm: {
    //             username: '',
    //             password: '',
    //             isAgree: false
    //         },
    //         //1111
    //         usernameRules1: [
    //             { validate: (val) => !!val, message: '必须填写用户名'},
    //             { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
    //         ],
    //         passwordRules1: [
    //             { validate: (val) => !!val, message: '必须填写密码'},
    //             { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
    //         ],
    //         argeeRules1: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
    //         validateForm1: {
    //             username1: '',
    //             password1: '',
    //             isAgree1: false
    //         }
    //     }
    // },
    // methods:{
    //         submit () {
    //             this.$refs.form.validate().then((result) => {
    //                 console.log('form valid: ', result)
    //             });
    //         },
    //         clear () {
    //             this.$refs.form.clear();
    //             this.validateForm = {
    //                 username: '',
    //                 password: '',
    //                 isAgree: false
    //             };
    //         },
    //         submit1 () {
    //             this.$refs.form.validate().then((result) => {
    //                 console.log('form valid: ', result)
    //             });
    //         },
    //         clear1 () {
    //             this.$refs.form.clear();
    //             this.validateForm1 = {
    //                 username1: '',
    //                 password1: '',
    //                 isAgree1: false
    //             };
    //         }
    // }
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

