<template>
    <div class="wrapper">
        <!-- <isheader class="header"></isheader> -->
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa"  class="title" title="我的游戏" text-color="rgba(0, 0, 0, .54)">      
        </mu-appbar>
        <tabs class="tab"></tabs>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    // import isheader from './commom/header.vue'
    import BottomNavigation from './commom/bottom.vue'
    import tabs from './commom/tabs.vue'
    import axios from 'axios'
    export default {
        components: {
            tabs,
            BottomNavigation
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>
<style>
    .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .tab {
        flex: 1;
        position: absolute;
    }
    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
</style>