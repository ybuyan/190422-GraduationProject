<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            账户
        </mu-appbar>
        <mu-paper class="demo-paper" :z-depth="0">
             <mu-list>
                <mu-sub-header>余额账户(元)</mu-sub-header>
                <mu-list-item-action>
                    <span style="font-size:30px;padding:20px">{{balance}}</span>
                </mu-list-item-action>
            </mu-list>
            <mu-list>
                <mu-list-item avatar button to="# ">
                    <mu-list-item-action>
                        <mu-avatar color="#fafafa">
                            <img src="../../assets/img/yue.png">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>充值</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
                <mu-divider></mu-divider>
                <mu-list-item avatar button to="#">
                    <mu-list-item-action>
                        <mu-avatar color="#fafafa">
                            <img src="../../assets/img/tixian.png">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>提现</mu-list-item-title>
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
            balance:"22.22"
        }
    }
}
</script>

<style scoped>

</style>
