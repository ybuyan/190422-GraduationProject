<template>
    <div class="wrapper" id="about">
        <mu-appbar class="title news" z-depth="0" title="个人中心" style="width: 100%;" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left">
                <mu-icon></mu-icon>
            </mu-button>
            <mu-menu slot="right">
                <mu-button icon flat><mu-icon value="menu"></mu-icon></mu-button>
                    <mu-list slot="content">
                        <mu-list-item button @click="logOut">
                            <mu-list-item-content>
                            <mu-list-item-title>退出登录</mu-list-item-title>
                            </mu-list-item-content>
                        </mu-list-item>
                    </mu-list>
                 </mu-menu>
        </mu-appbar>
        <div id="user-info">     
            <mu-container style="padding: 16px 0;">         
                <mu-row justify-content="center" buttoon>
                   
                        <span class="img-hover" @click.stop="uploadHeadImg" @update-userinfo="updateUserinfo">
                            <img :src="userinfo.headUrl" v-autofix/>
                        </span>
                        <input type="file" accept="image/*"  @change="handleFile" class="hiddenInput" />
                    
                </mu-row>  
                <mu-row class="parent_userName" justify-content="center">
                    <router-link v-if="!username" class="login" to="/home/mine/login">未登录</router-link>
                    <span v-else >
                        <router-link class="username" to="/home/mine/userInfo">
                            {{username}}
                        </router-link>
                    </span>
                </mu-row>
                <mu-row class="parent_userName" justify-content="center">
                    <div>
                        <label for="" style="color:red">
                            {{vip_state}}
                        </label>    
                    </div>
                </mu-row>
                <mu-row class="parent_userName" justify-content="center">
                    <div>
                        <label style="font-size:10px">
                            <span v-show="endTime">到期时间:</span>{{endTime}}
                        </label>    
                    </div>
                </mu-row>
                <mu-row class="parent_userName" justify-content="center">
                    <div>
                        <router-link class="openVIP" to="/home/mine/openVIP">{{open_vip}}</router-link>
                    </div>
                </mu-row>
            </mu-container>   
        </div>
        <mu-paper class="demo-list-wrap">
            <mu-list>
                <mu-list-item button to="/home/mine/evaluatioAnalysis">
                    <mu-list-item-title>测评信息</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <!-- <mu-divider></mu-divider> -->
                <mu-list-item button to="/home/mine/accountInfo">
                    <mu-list-item-title>账户信息</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <!-- <mu-divider></mu-divider> -->
                <mu-list-item button to="/home/mine/about">
                    <mu-list-item-title>关于</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <!-- <mu-divider></mu-divider> -->
            </mu-list>
            <div id="copyright">
                <mu-badge class="demo-badge-content"  color="transparent">
                    <span>
                        Copyright <span style="font-size: 20px; color: red;" slot="content">&copy;</span> 2019 YW. All rights reserved
                    </span>
                </mu-badge>
            </div>
        </mu-paper>
        
        <BottomNavigation></BottomNavigation>
        <!-- <router-view></router-view> -->
    </div>
    
</template>
<script>
    import BottomNavigation from './commom/bottom.vue'
    import axios from 'axios'
    export default {
        components: {
            BottomNavigation
        },
        data() {
            return {
                endTime:"",
                vip_state:"",
                open_vip:"",
                appear: false,
                msg: '😄',
                colors: [{ }],
                username: "",
                // avatar: require("../assets/photo.jpg"),
                userinfo: {
                    headUrl: './static/img/head.jpg',  // 头像链接
                    color: ''
                },    
            }
        },
        mounted() {
            console.log(localStorage)
            if(localStorage.Flag){
                $(".login").attr("disabled",'true')
            }
            this.getUerName();
            this.getAllData();
            // axios({
            //     method: "post",
            //     url: this.$store.state.apiUrl + "user/insertGraph",
            //     data:{
            //         user_phoneNumber:"15108104353",
            //         graphic_data:this.userinfo.headUrl.replace(/.*;base64,/, '')
            //     },
            //     processData: false, //必不可少参数
            //     traditional: true, //比不可少参数
            //     contentType: false,//比不可少参数
                
            // }).then(res => {
            //     console.log(res)
            // })
            // axios({
            //     method: "post",
            //     url: this.$store.state.apiUrl + "user/getGraph",
            //     data:{
            //         user_phoneNumber:"15108104353",
                    
            //     },
            //     processData: false, //必不可少参数
            //     traditional: true, //比不可少参数
            //     contentType: false,//比不可少参数
                
            // }).then(res => {
            //     console.log(res)
            // })
        },
        methods:{
            getUerName() {
                let phone = localStorage.getItem("phone");
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
                    this.username = Data.nickName
                    this.vip_state = Data.identity
                    localStorage.setItem("vipState",Data.identity)
                    if(Data.identity == "VIP") {
                        this.open_vip = ""
                    }else {
                        this.open_vip = "开通VIP"
                    }
                    this.endTime = Data.endTime
                });
            },
            /**头像更换 */
            handleFile (e) {
                let $target = e.target || e.srcElement
                let file = $target.files[0]
                var reader = new FileReader()
                reader.onload = (data) => {
                    let res = data.target || data.srcElement
                    let img = new Image()
                    img.onload = () => {
                        // 回调更新父组件数据
                        this.saveImg(res.result).then(() => {
                            
                            setTimeout(() => {
                            
                            this.userinfo.headUrl = res.result
                            }, 1500)
                        })
                    }
                    img.src = res.result
                }
                reader.readAsDataURL(file)
                },
            // 打开图片上传
            uploadHeadImg () {
                this.$el.querySelector('.hiddenInput').click()
            },
            // 保存上传图片
            saveImg (dataUrl) {
            return axios.get('./static/api.json')
                .then((data) => {
                    localStorage.setItem('headImg', dataUrl)
                })
                .catch((data) => {
                    console.log(data)
                })
            },
            getAllData () {
                // 假装调用接口获取并设置个人数据 颜色 头像
                this.userinfo.headUrl = localStorage.getItem('headImg') || this.userinfo.headUrl
            },
            // 更新头像数据
            updateUserinfo (obj) {
                this.userinfo = Object.assign(this.userinfo, obj)
            },
            /**头像更换end */
            logOut() {
                localStorage.removeItem("Flag");
                this.$router.push("/home/mine/login")
                localStorage.clear()
            }
        }
    }
</script>
<style scoped>
#user-info {
  margin: 3.8rem 0;
  /* background-color: blueviolet */
}
.container{
    font-size: 1.3rem;
    font-family: sans-serif;
}
.login{
    color: black;
}
.demo-list-wrap{
    font-family: "Microsoft Yahei";
    margin: 0 1rem;
    background-color: #fafafa !important;
}
.username{
    color:grey;
    font-size: 16px;
}
.parent_userName{
    padding: 8px;
}
.hiddenInput {
    opacity: 0;
    position: absolute;
}
.img-hover {
    display: inline-block;
    width: 30%;
    height: 0;
    padding-bottom: 30%;
    border-radius: 50%;
    overflow: hidden;
}  
#about{
    height:100%;
    position: relative;
}
#copyright{
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    position: absolute;
    bottom: 56px;
    color: gray;
    font-size: 10px;
}
</style>