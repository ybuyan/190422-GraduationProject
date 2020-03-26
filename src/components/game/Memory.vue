<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            记忆力游戏
        </mu-appbar>
        
        <mu-list textline="three-line">
            <mu-list-item avatar button to="/xygsz">
                <mu-list-item-action>
                    <mu-avatar>
                    <img src="../../assets/img/game/memory/xygsz.jpg">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                    <mu-list-item-title style="color: black;font-weight:bold">下一个数字</mu-list-item-title>
                    <mu-list-item-sub-title>
                    <span style="color: rgba(0, 0, 0, .87)">反正我是过不了了~~~</span><br/>
                    <mu-icon color="yellow700" value="star"></mu-icon>
                    <!-- <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon>
                    <mu-icon  value="star_border"></mu-icon> -->
                    </mu-list-item-sub-title>
                </mu-list-item-content>
            </mu-list-item>
            <mu-divider></mu-divider>
        </mu-list>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        //游戏使用权限
        // conPower($event){
        //     console.log($event.target.innerHTML)
        //     let text = $event.target.innerHTML
        //     console.log(this.vipState)
        //     if(this.vipState == "VIP"){
        //         if(text == "坠落的小鸟"){
        //             this.$router.push("/")
        //             return
        //         }
                
                
        //     }else{
        //         this.$Message.error("您还不是VIP用户，请开通VIP")
        //     }
        // }
    }
}
</script>

<style scoped>

</style>
