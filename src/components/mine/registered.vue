<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine/login">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            账户注册
        </mu-appbar>
        <mu-container>
            <mu-form :model="form" ref="form" class="mu-demo-form" label-position="top" label-width="100">
                <mu-form-item prop="nickname" label="昵称" :rules="nickNameRules">
                    <mu-text-field v-model="form.nickname" prop="nickname"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="status" label="状态" :rules="statusRules">
                    <mu-select v-model="form.status">
                        <mu-option prop="status" 
                                   v-for="option,index in status_options" 
                                   :key="option" 
                                   :label="option" 
                                   :value="option">
                                   </mu-option>
                    </mu-select>
                 </mu-form-item>
                 <mu-form-item prop="business" label="行业" :rules="businessRules">
                    <mu-text-field v-model="form.business" prop="business"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="age" label="年龄"  :rules="ageRules">
                    <mu-text-field v-model="form.age" prop="age"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="sex" label="性别" :rules="sexRules">
                    <mu-radio v-model="form.sex" value="0" label="男" prop="sex"></mu-radio>
                    <mu-radio v-model="form.sex" value="1" label="女" prop="sex"></mu-radio>
                </mu-form-item>
                <mu-form-item prop="phone"  label="电话号码" :rules="phoneRules">
                    <mu-text-field v-model="form.phone" prop="phone"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="password" label="密码" :rules="passwordRules">
                    <mu-text-field type="password" v-model="form.password" prop="password"></mu-text-field>
                </mu-form-item>
                <mu-form-item>
                    <mu-button style="margin:0 auto" color="primary" @click="register">注册</mu-button>
                    <mu-button style="margin:0 auto" @click="clear">重置</mu-button>
                </mu-form-item>
            </mu-form>
        </mu-container>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            status_options:['学生','就业','待业'],
            form: {
                nickname: '',
                status:'',
                business:'',
                phone:'',
                password:'',
                sex:''
            },
            passwordRules: [
                { validate: (val) => !!val, message: '必须填写密码'},
                { validate: (val) => val.length >= 3 && val.length <= 16, message: '密码长度大于3小于10'}
            ],
            phoneRules: [
                { validate: (val) => !!val, message: '必须填写电话号码'},
                { validate: (val) => val.length <= 11, message: '电话号码长度小于等于11'}
            ],
            nickNameRules:[
                { validate: (val) => !!val, message: '必须填写昵称'},
                { validate: (val) => val.length <= 11, message: '昵称长度小于等于11'}
            ],
            statusRules:[
                { validate: (val) => !!val, message: '必须填写状态'},
            ],
            businessRules:[
                { validate: (val) => !!val, message: '必须填写行业，没有请填写其他'},
            ],
            sexRules:[
                { validate: (val) => !!val, message: '必须填写性别'},
            ],
            ageRules: [
                { validate: (val) => !!val, message: '必须填写年龄'},
                { validate: (val) => val.length <= 2, message: '年龄小于等于99'}
            ],
        }
    },
    methods:{
        register() {
            this.$refs.form.validate().then((result) => {
                console.log('form valid: ', result)
                if(result === true) {
                    let data = {
                        "nickName": this.form.nickname,
                        "status": this.form.status,
                        "business": this.form.business,
                        "phoneNumber": this.form.phone,
                        "pw": this.form.password,
                        "age": this.form.age,
                        "sex": this.form.sex
                    };
                    let apiUrl = this.$store.state.apiUrl+"user/register";
                    axios.post(apiUrl, data)
                        .then(res => {
                            console.log(res.data)
                            if (res.data == true) {
                                this.$Message.info('注册成功，请进行登陆')
                                this.$router.push("/home/mine/login")
                            }
                    });
                }
            });
            
        },
        clear () {
            this.$refs.form.clear();
            this.form = {
                nickname: '',
                status:'',
                business:'',
                phone:'',
                password:'',
                sex:''
            };
        }
    }
}
</script>

<style scoped>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
}
</style>
