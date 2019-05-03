<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            记忆力游戏
        </mu-appbar>
        
        <mu-list>
            <mu-sub-header>简单</mu-sub-header>
            <mu-list-item avatar button :ripple="false" to="/jiyifanpai">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>记忆翻牌</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <mu-sub-header>一般</mu-sub-header>
            <mu-list-item avatar button :ripple="false">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>记忆翻牌</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <mu-sub-header>困难</mu-sub-header>
            <mu-list-item avatar button :ripple="false">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>记忆翻牌</mu-list-item-title>
            </mu-list-item>
        </mu-list>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>
