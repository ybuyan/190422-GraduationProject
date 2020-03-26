<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            反应力游戏
        </mu-appbar>
        
        <mu-list textline="three-line">
            <mu-list-item avatar button to="/sqs">
                <mu-list-item-action>
                    <mu-avatar>
                    <img src="../../assets/img/game/reaction/sqs.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">神枪手</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">你是神枪手吗？反正我不是~</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>

            <mu-list-item avatar button to="/symh">
                <mu-list-item-action>
                    <mu-avatar>
                    <img src="../../assets/img/game/reaction/symh.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">色域迷惑</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">我打赌你过不了10关！！！</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar button to="/xxoo">
                <mu-list-item-action>
                    <mu-avatar>
                    <img src="../../assets/img/game/reaction/xxoo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">圈圈叉叉</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">不是你想象的那样！！！</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item  avatar button @click="conPower(1)">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/img/game/reaction/qwchic.png">
                    </mu-avatar>
                </mu-list-item-action>
                <!-- <mu-list-item-title>青蛙吃小虫</mu-list-item-title> -->
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">青蛙吃小虫</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">小青蛙饿了...</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar button @click="conPower(5)" >
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/img/game/reaction/zqdzjs.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">足球大战僵尸</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">是足球足球足球大战僵尸！！！</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            
            <mu-divider></mu-divider>

            <mu-list-item avatar button @click="conPower(3)">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/img/game/reaction/bird.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">坠落的小鸟</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">没错！你一定玩过！</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>

            <mu-list-item avatar button @click="conPower(4)">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/img/game/reaction/baikuai.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">别踩白块儿</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">如果你觉得慢！我可以帮你加大难度！！！</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item avatar button @click="conPower(6)">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/img/game/reaction/zfj.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">纸飞机</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">童年的纸飞机...对不起~我哼起来了~~</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            
        </mu-list>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vipState:localStorage.getItem("vipState")
        }
    },
    mounted(){

    },
    methods:{
        //游戏使用权限
        conPower(index){
            console.log(index)
            
            console.log(this.vipState)
            if(this.vipState == "VIP"){
                if(index == 3){
                    this.$router.push("/palppybird")
                    return
                }
                else if(index == 4){
                    this.$router.push("/baikuai")
                    return
                }else if(index == 1){
                    this.$router.push("/qingwachichong")
                }else if(index == 2){
                    this.$router.push("#")
                }else if(index == 5){
                    this.$router.push("/zqdzjs")
                }else if(index == 6){ 
                    this.$router.push("/zfj")
                }
                
            }else{
                this.$Message.error("您还不是VIP用户，请开通VIP")
            }
        }
    }
}
</script>

<style scoped>

</style>
