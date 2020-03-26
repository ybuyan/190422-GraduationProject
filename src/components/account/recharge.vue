<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine/accountInfo">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            充值中心
        </mu-appbar>
        <mu-paper class="demo-paper" :z-depth="1">
             <mu-form id="text_indent" :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
                <mu-form-item style="position:relative" label="充值金额" prop="recharge" :rules="rechargeRules">
                    <i class="input_icon"><img src="../../assets/img/recharge.png"></i>
                    <mu-text-field id="text-indent" v-model="form.recharge" prop="recharge"></mu-text-field>
                </mu-form-item>
                <mu-form-item>
                    <mu-button class="sub_btn" color="primary" @click="next()">下一步</mu-button>
                </mu-form-item>
             </mu-form>
        </mu-paper>
        <mu-dialog title="请输入支付密码" width="360" :open.sync="openSimple">
            <div style="text-align:center">
                <label>零钱</label>
            </div>
            <div style="text-align:center">
                ￥{{form.recharge}}
            </div>
             <div id="payPwd">
                <input ref="pwd" 
                       type="password" 
                       maxlength="6" 
                       v-model="msg"  
                       style="position: absolute;z-index: -1;left:-100%;opacity: 0"/>
                <ul class="pwd-wrap" @click="focus">
                    <li><i v-if="msgLength > 0"></i></li>
                    <li><i v-if="msgLength > 1"></i></li>
                    <li><i v-if="msgLength > 2"></i></li>
                    <li><i v-if="msgLength > 3"></i></li>
                    <li><i v-if="msgLength > 4"></i></li>
                    <li><i v-if="msgLength > 5"></i></li>
                </ul>
            </div>
            <mu-button slot="actions" flat color="primary" @click="sure">确定</mu-button>
        </mu-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg:"",
            msgLength:0,
            openSimple: false,
            labelPosition: 'top',
            form: {
                recharge: '',
            },
            rechargeRules: [
                { validate: (val) => !!val, message: '必须填写金额'},
                { validate: (val) => val.length >= 2, message: '充值金额大于等于10'}
            ],
        }
    },
    watch:{
      msg(curVal){
        if(/[^\d]/g.test(curVal)){
          this.msg = this.msg.replace(/[^\d]/g,'');
        }else{
            this.msgLength = curVal.length;
        }
      },
    },
    methods:{
        focus(){
          this.$refs.pwd.focus();
        },
        next(){
            if(this.form.recharge >= 10){
                this.openSimple = true;
            }else{
                this.$Message.info("请输入金额！金额大于等于10")
            }
            
        },
        sure(){
            console.log(this.msg);
            let phone = localStorage.getItem("phone");
            let apiUrl = this.$store.state.apiUrl+"user/rechange";
            axios({
                method: "post",
                url: apiUrl,
                data:{
                    phoneNumber: phone,
                    pw: this.msg,
                    balance: this.form.recharge
                }
            }).then(res => {
                //console.log(res.data)
                if(res.data == true) {
                    this.$Message.info("充值成功，去挥霍吧！")
                    this.openSimple = false;
                    this.$router.push("/home/mine/accountInfo")
                }else{
                    this.$Message.error("充值失败，请确认密码！")
                }
            })
        }
    }
}
</script>

<style scoped>
.demo-paper{
    margin:20px;
    padding: 10px;
}
.sub_btn{
    margin: 0 auto !important;
}
.input_icon{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 30px;
    right: 0;
}
#payPwd .pwd-wrap{
    width: 90%;
    height: 44px;
    padding-bottom: 1px;
    margin: 0 auto;
    background: #fff;
    border:1px solid #ddd;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    cursor: pointer;
  }
  .pwd-wrap li{
    list-style-type:none;
    text-align: center;
    line-height: 44px;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-flex: 1;
    border-right:1px solid #ddd ;
  }
  .pwd-wrap li:last-child{
    border-right: 0;
  }
  .pwd-wrap li i{
    height: 10px;
    width: 10px;
    border-radius:50% ;
    background: #000;
    display: inline-block;
  }

</style>

