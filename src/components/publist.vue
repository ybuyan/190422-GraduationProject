<template>
    <div class="wrapper">
        <mu-appbar class="title" z-depth="0" title="发布中心" style="width: 100%;" color="#fafafa" text-color="rgba(0, 0, 0, .54)"></mu-appbar>
        
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import BottomNavigation from './commom/bottom.vue';
    import Vue from "vue";
    import silder  from './commom/slide.vue'// 引入slider组件
    import axios from 'axios'
    new Vue(silder)
    export default {
        components: {
            BottomNavigation,
            silder
        },
        data() {
            return {
                
            }
        },
         mounted () {
            console.log('挂载好了')
            
        }
    }
</script>
<style>
.slider{
    height: 40% !important;
}
 


</style>