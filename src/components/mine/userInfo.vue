<template>
    <div class="userInfo">
        <mu-appbar class="title" style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            我的信息
            <mu-button flat slot="right" @click="changeInfo">信息修改</mu-button>
        </mu-appbar>
        <mu-container class="wrap_info">
            <mu-form  :model="form" ref="form" class="mu-demo-form form" label-position="top" label-width="100" >
                <mu-form-item prop="nickname" label="昵称" :rules="nickNameRules">
                    <mu-text-field :disabled="isDisabled" v-model="form.nickname" prop="nickname"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="status" label="状态" :rules="statusRules">
                    <mu-select v-model="form.status" :disabled="isDisabled">
                        <mu-option prop="status" 
                                   v-for="(option,index) in status_options" 
                                   :key="index" 
                                   :label="option" 
                                   :value="option"
                                   >
                                   </mu-option>
                    </mu-select>
                 </mu-form-item>
                 <mu-form-item prop="business" label="行业" :rules="businessRules">
                    <mu-text-field :disabled="isDisabled" v-model="form.business" prop="business"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="age" label="年龄"  :rules="ageRules">
                    <mu-text-field :disabled="isDisabled" v-model="form.age" prop="age"></mu-text-field>
                </mu-form-item>
                <mu-form-item prop="sex" label="性别" :rules="sexRules">
                    <mu-radio :disabled="isDisabled" v-model="form.sex" value="男" label="男" prop="sex"></mu-radio>
                    <mu-radio :disabled="isDisabled" v-model="form.sex" value="女" label="女" prop="sex"></mu-radio>
                </mu-form-item>  
                <mu-form-item>
                    <mu-button id="update_btn" style="margin:0 auto" color="primary" @click="updateUserInfo">保存</mu-button>
                    <mu-button id="signout" style="margin:0 auto" color="primary" @click="signout">登出</mu-button>
                </mu-form-item>  
            </mu-form>
        </mu-container>
    </div>
</template>

<script>

export default {
    name:"userInfo",
    data() {
        return {
            isDisabled:true,
            status_options:['学生','就业','待业'],
            form: {
                nickname: '',
                status:'',
                business:'',
                sex:"女",
                age:''
            },
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
    mounted() {
        $('#update_btn').hide();
        $('#signout').show();
        var phone = localStorage.getItem('phone'); 
        let apiUrl = this.$store.state.apiUrl+"user/findUserInfo";
        axios({
            method: "post",
            url: apiUrl,
            data: {
                phoneNumber:phone
            }
        }).then(res => {
            console.log(res.data);
            let Data = res.data[0]
            this.form.nickname = Data.nickName
            this.form.age = Data.age
            this.form.business = Data.business
            if(Data.sex == 0){
                this.form.sex = "男"
            }else {
                this.form.sex = "女"
            }
            this.form.status = Data.status

        });
    },
    methods:{
        signout() {
            localStorage.removeItem("Flag");
            this.$router.push("/home/mine/login")
            // localStorage.clear()
        },
        changeInfo() {
            this.isDisabled = false;
            $('#update_btn').show();
            $('#signout').hide();
        },
        updateUserInfo() {
            let apiUrl = this.$store.state.apiUrl+"user/update";
            let newSex;
            if(this.form.sex === '男') {
                newSex = '0'
            }else {
                newSex = '1'
            }
            axios({
                method: 'post',
                url: apiUrl,
                data:{
                    phoneNumber: localStorage.getItem('phone'),
                    nickName: this.form.nickname,
                    status: this.form.status,
                    business: this.form.business,
                    age: this.form.age,
                    sex: newSex
                }
            }).then(res => {
                if(res.data === true) {
                    this.$Message.info('修改成功');
                    this.isDisabled = true;
                    $('#update_btn').hide();
                    $('#signout').show();
                }
            })

        }
    },
    
}
</script>

<style scoped>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  background-color: #fafafa !important;
}
.demo-date-picker {
  margin: 0 auto;
}
.demo-picker-container{
  width: 256px;
}
.demo-snackbar-radio {
  margin: 8px 0;
}

.mu-item div{
    margin:0 auto;
}

.mu-demo-form {
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}
.wrap_info{
    width:80%;
    
}
</style>
