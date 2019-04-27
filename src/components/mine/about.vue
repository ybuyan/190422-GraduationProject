<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            关于
        </mu-appbar>
        <div id="user-info">     
            <mu-container style="padding: 16px 0;">         
                <mu-row justify-content="center" buttoon to="/userInfo">
                    <mu-avatar size="100">
                        <img src="../../assets/img/bra.jpg">
                    </mu-avatar>
                </mu-row>  
                <mu-row justify-content="center">
                    <span class="edition">版本：{{edition}}</span>
                </mu-row>
            </mu-container>   
        </div>
        <mu-paper class="demo-list-wrap">
            <mu-list>
                <mu-divider></mu-divider>
                <mu-list-item button to="#">
                    <mu-list-item-title>版本更新</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item button to="#">
                    <mu-list-item-title>推荐给朋友</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item button to="#">
                    <mu-list-item-title>服务协议</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item button to="#">
                    <mu-list-item-title>隐私政策</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            edition:"1.1.0"
        }
    }
}
</script>

<style scoped>

</style>
