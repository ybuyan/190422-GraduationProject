<template>
     <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine/evaluatioAnalysis">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            calculation power
        </mu-appbar>
        <mu-container>
            <mu-list>
                <mu-sub-header>简单</mu-sub-header>
                <mu-divider></mu-divider>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>心算</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>小鸟起飞</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>输个蓝记忆翻牌</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>心算</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
            </mu-list>
            <mu-divider></mu-divider>
            <mu-list>
                <mu-sub-header>一般</mu-sub-header>
                <mu-divider></mu-divider>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>心算</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
                
            </mu-list>
            <mu-divider></mu-divider>
            <mu-list>
                <mu-sub-header>困难</mu-sub-header>
                <mu-divider></mu-divider>
                <mu-flex class="demo-linear-progress">
                    <mu-list-item-title>心算</mu-list-item-title>
                    <mu-linear-progress mode="determinate" :value="90"  :size="15" color="green"></mu-linear-progress>
                </mu-flex>
            </mu-list>
        </mu-container>    
    </div>
</template>

<script>
export default {
   data() {
       return {

       }
   },
   components:{
   
   }
       
}
</script>

<style scoped>
.demo-linear-progress {
  margin: 16px 0;
}
.mu-item-title{
    width: 40%;
}
</style>
