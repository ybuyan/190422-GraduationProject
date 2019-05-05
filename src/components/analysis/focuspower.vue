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
                <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
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
   
   },
   mounted(){
       this.drawLine();
   },
   methods:{
       drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '困难' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
       }
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
