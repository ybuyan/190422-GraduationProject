<template>
    <div class="wrapper">
        <mu-appbar class="title news" z-depth="0" title="信息中心" style="width: 100%;" color="#fafafa" text-color="rgba(0, 0, 0, .54)"></mu-appbar>
        <div style="position:relative;top:56px">
            <mu-container>
            <mu-list>
                <mu-sub-header>完成度平均占比</mu-sub-header>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>计算力</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>反应力</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>专注力</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>逻辑力</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>记忆力</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
            </mu-list>
        </mu-container>  
        <div class="recommend">
            <label for="">你的{{game}}相对其他能力较弱，我们追求平衡发展，所以推荐你玩以下游戏:</label>
        </div>
        </div>
        
        <BottomNavigation></BottomNavigation>
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
                game:"记忆力"
            }
        },
        methods:{
             
        }
    }
</script>
<style>
    @import "../css/index.css";
    .map {
        width: 100%;
        height: 100%;
    }
    .news{
        position:fixed;
        top:0;
        left:0;
    }
   
</style>
<style scoped>
.recommend{
    margin:16px;
}
.demo-linear-progress {
    margin: 16px 0;
}
.mu-item-title{
    width: 24% !important;
}
</style>
