<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            反应力游戏
        </mu-appbar>
        
        <mu-list>
            <mu-sub-header>简单</mu-sub-header>
            <mu-list-item avatar button :ripple="false" to="/xinsuan">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>心算测试</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <mu-sub-header>一般</mu-sub-header>
            <mu-list-item avatar button :ripple="false"  to="/qingwachichong">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>青蛙吃小虫</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <mu-sub-header>困难</mu-sub-header>
            <mu-list-item avatar button :ripple="false" to="/palppybird">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>坠落的小鸟</mu-list-item-title>
            </mu-list-item>

            <mu-list-item avatar button :ripple="false" to="/baikuai">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>别踩白块儿</mu-list-item-title>
            </mu-list-item>
            <mu-list-item avatar button :ripple="false" to="/changecolor">
                <mu-list-item-action>
                    <mu-avatar>
                        <img src="../../assets/logo.png">
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-title>点击改变颜色</mu-list-item-title>
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
