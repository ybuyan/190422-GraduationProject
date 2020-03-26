<template>
     <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine/evaluatioAnalysis">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            memory power
        </mu-appbar>
        <mu-container>
            <mu-list>
                <mu-sub-header>memory</mu-sub-header>
                <div class="chart-wrapper">
                    <canvas id="mountNode"></canvas>
                </div>
            </mu-list>
        </mu-container> 
    </div>
</template>

<script>

export default {
   data() {
       return {
           phone: localStorage.getItem("phone"),
           data:JSON.parse(localStorage.getItem("memoryData"))
       }
   },
   mounted(){
        this.getScore();
        var v = this;
        this.$nextTick(()=>{
            v.drawMemoryChart();
        });
        
   },
   methods: {
        getScore() {
           let apiUrl = this.$store.state.apiUrl+"game/findMemoryResult";
           axios({
               method: "post",
               url: apiUrl,
               data:{
                   phoneNumber: this.phone,
               }
           }).then(res => {

               let memoryData = JSON.stringify(res.data)
               localStorage.setItem("memoryData",memoryData)
               console.log(this.data)
           })
       },
        drawMemoryChart(){
            var Global = this.$F2.Global;
            // Step 1: 创建 Chart 对象
            const chart = new this.$F2.Chart({
                id: 'mountNode',
                pixelRatio: window.devicePixelRatio,
                width: 375,
                height: 500,
                // padding: [ 45, 'auto', 'auto' ]
            });

            // Step 2: 载入数据源
            console.log(this.data);
            chart.source(this.data);
            chart.coord({
                transposed: true
            });
            chart.axis('gamename', {
                line: null,
                grid: null
            });
            chart.axis('highscore', {
                line: null,
                grid: null,
                label: function label(text, index, total) {
                var textCfg = {};
                if (index === 0) {
                    textCfg.textAlign = 'left';
                } else if (index === total - 1) {
                    textCfg.textAlign = 'right';
                }
                return textCfg;
                }
            });
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart.interval().position('gamename*highscore').color('gamename');;

            // Step 4: 渲染图表
            chart.render();
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
