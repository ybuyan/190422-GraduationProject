<template>
    <div class="wrapper">
        <mu-appbar class="title news" z-depth="0" title="个人中心" style="width: 100%;" color="#fafafa" text-color="rgba(0, 0, 0, .54)"></mu-appbar>
        <div id="user-info">     
            <mu-container style="padding: 16px 0;">         
                <mu-row justify-content="center" buttoon to="/userInfo">
                    <mu-avatar size="100">
                        <img :src="avatar" @click="toUserInfo()">
                    </mu-avatar>
                </mu-row>  
                <mu-row justify-content="center">
                    <router-link v-if="!username" class="login" to="/home/mine/login">未登录</router-link>
                    <span v-else class="username">{{username}}</span>
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
                <mu-divider></mu-divider>
                <mu-list-item button to="/home/mine/accountInfo">
                    <mu-list-item-title>账户信息</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item button to="/home/mine/about">
                    <mu-list-item-title>关于</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
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
                msg: '😄',
                colors: [{ }],
                username: "",
                avatar: require("../assets/photo.jpg"),    
            }
        },
        mounted() {
            console.log(localStorage)
            if(localStorage.Flag){
                $(".login").attr("disabled",'true')
            }
        },
        methods:{
            toUserInfo(){
                this.$router.push("/home/mine/userInfo");
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
</style>