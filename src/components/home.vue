<template>
    <div class="wrapper">
        <isheader class="header"></isheader>
        <tabs class="tab"></tabs>
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import isheader from './commom/header.vue'
    import BottomNavigation from './commom/bottom.vue'
    import tabs from './commom/tabs.vue'
    import axios from 'axios'
    export default {
        components: {
            isheader,
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
        height: 100vh;
    }
    .tab {
        flex: 1;
        margin: 3.8rem 0;
    }
    .header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
</style>