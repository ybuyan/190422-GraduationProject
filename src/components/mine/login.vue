<template>
<div>
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
</div>    
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            usernameRules: [
                { validate: (val) => !!val, message: '必须填写用户名'},
                { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
            ],
            passwordRules: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
            ],
            argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
            validateForm: {
                username: '',
                password: '',
                isAgree: false
            },
            //1111
            usernameRules1: [
                { validate: (val) => !!val, message: '必须填写用户名'},
                { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
            ],
            passwordRules1: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
            ],
            argeeRules1: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
            validateForm1: {
                username1: '',
                password1: '',
                isAgree1: false
            }
        }
    },
    methods:{
            submit () {
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                });
            },
            clear () {
                this.$refs.form.clear();
                this.validateForm = {
                    username: '',
                    password: '',
                    isAgree: false
                };
            },
            submit1 () {
                this.$refs.form.validate().then((result) => {
                    console.log('form valid: ', result)
                });
            },
            clear1 () {
                this.$refs.form.clear();
                this.validateForm1 = {
                    username1: '',
                    password1: '',
                    isAgree1: false
                };
            }
    }
}
</script>

<style scoped>
.demo-text {
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
}
</style>

