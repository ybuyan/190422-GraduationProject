<template>
    <div style="height:100%">
        <mu-appbar style="width: 100%;" 
                   z-depth="0" 
                   color="#fafafa" 
                   text-color="rgba(0, 0, 0, .54)">
                    开通会员
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
        </mu-appbar>
        <mu-paper class="demo-paper"
                  style="position:relative;width:80%;height:30%;margin:15px auto 0;"
                  :z-depth="3">
            <mu-form :model="form" class="mu-demo-form" label-width="100">
                <mu-form-item prop="radio" label="请选择类型" class="">
                    <mu-radio v-model="form.radio" value="198" label="至尊年卡198" checked></mu-radio>
                    <mu-radio v-model="form.radio" value="49" label="尊贵季卡49"></mu-radio>
                </mu-form-item>
            </mu-form>
             <mu-button id="signout" style="width:100%;margin-bottom:0;position:absolute;bottom:0" color="primary" @click="thisOpen">立即开通</mu-button>
        </mu-paper>
        <mu-dialog title="确定开通吗？" width="360" :open.sync="openSimple">
            <mu-button slot="actions" flat color="primary" @click="notSure">取消</mu-button>
            <mu-button slot="actions" flat color="primary" @click="sure">确定</mu-button>
        </mu-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openSimple: false,
            form:{
                radio:''
            }
        }
    },
    methods:{
        thisOpen(){
            if(this.form.radio){
                this.openSimple = true;
            }else {
                this.$Message.error("请选择类型")
            }
            
        },
        notSure(){
            this.openSimple = false;
        },
        sure() {
            this.openSimple = false;
            console.log(this.form.radio)
            var balance = this.form.radio;
            var apiUrl = this.$store.state.apiUrl+"user/buyVip";
            var phone = localStorage.getItem("phone");
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            var startTime = year + "-" + month + "-" + day;
            var endTime;
            if(balance == 198) {
                let endYear = year + 1;
                endTime = endYear + "-" + month + "-" + day;
            }else {
                let endMonth = month + 3;
                if(endMonth > 12){
                    endMonth = endMonth - 12;
                    let endYear = year + 1;
                    endTime = endYear + "-" + endMonth + "-" + day;
                }else{
                    endTime = year + "-" + endMonth + "-" + day;
                }
            }
            console.log(startTime)
            console.log(endTime)
            axios({
                method: "post",
                url: apiUrl,
                data:{
                    phoneNumber: phone,
                    startTime,
                    endTime,
                    balance,
                }
            }).then(res => {
                console.log(res.data)
                if(res.dada == true){
                    this.$Message.info("开通成功")
                    this.$router.push("home/mine")
                }else {
                    this.$Message.error("开通失败，请确认余额")
                }
            })
        }

    }
}
</script>

<style scoped>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
  
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
