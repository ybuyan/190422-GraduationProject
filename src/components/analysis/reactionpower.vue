<template>
     <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine/evaluatioAnalysis">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            reaction power
        </mu-appbar>
        <mu-container>
            <mu-list>
                <mu-sub-header>reaction</mu-sub-header>
                <div class="chart-wrapper">
                    <canvas id="mountNode"></canvas>
                </div>
            </mu-list>
        </mu-container> 
    </div>
</template>

<script>
// const F2 = require('@antv/f2/lib/index');
export default {
   data() {
       return {
           phone: localStorage.getItem("phone"),
           data:JSON.parse(localStorage.getItem("reactionData"))
        //    data:[
        //        {
        //            gamename:'',
        //            highscore:0
        //        }
        //    ]
       }
   },
   mounted(){

        this.getScore();
        var v = this;
        this.$nextTick(()=>{
            v.drawReactionChart();
        },1000);
   },
   methods: {
        getScore() {
           let apiUrl = this.$store.state.apiUrl+"game/findReactionResult";
           axios({
               method: "post",
               url: apiUrl,
               data:{
                   phoneNumber: this.phone,
               }
           }).then(res => {
               console.log(res.data)
               let reactionData = JSON.stringify(res.data)
               localStorage.setItem("reactionData",reactionData)
            //    let reactionData = res.data
            //    var data = [];
            //    for(var i=0; i<reactionData.length; i++) {
            //        var obj = {};
            //        obj.gamename = reactionData[i].gamename;
            //        obj.highscore = reactionData[i].highscore;
            //        data[i] = obj;
            //    }
            //    this.data = data
               console.log(this.data)
           })
       },
        drawReactionChart(){
            var Global = this.$F2.Global;
            // Step 1: 创建 Chart 对象
            const chart = new this.$F2.Chart({
                id: 'mountNode',
                pixelRatio: window.devicePixelRatio,
                width: 370,
                height: 500,
                // padding: [ 70, 'auto', 'auto' ]
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
                    textCfg.textAlign = 'center';
                } else if (index === total - 1) {
                    textCfg.textAlign = 'center';
                }
                return textCfg;
                }
            });
            // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
            chart.interval().position('gamename*highscore').color('gamename')

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

/* img {
    vertical-align: middle;
    border-style: none;
}
.tip {
    font-size: 12px;
    color: #808080;
    text-align: center;
}
.header {
    padding: 4.26666667vw;
    font-size: 4.26666667vw;
    line-height: 6vw;
}
.icon {
    display: inline-block;
    width: 4.26666667vw;
    height: 4.26666667vw;
    background-image: url(https://gw.alipayobjects.com/zos/rmsportal/oLOjjJWHatTpgfygoLbE.png);
    background-size: cover;
    vertical-align: -1px;
    margin-right: 6.66666667vw;
    position: relative;
}
.icon:after {
    content: '';
    position: absolute;
    top: 1px;
    right: -12px;
    width: 1px;
    height: 4.26666667vw;
    background-color: #979797;
}
.chart-wrapper {
    background-color: #fff;
}
canvas {
    display: block;
    width: 100vw;
    height: 69.33333333vw;
}
@media all and (orientation: landscape) {
    canvas {
        display: block;
        width: 100vw;
        height: 48.12593703vw;
    }
    .header {
        padding: 2.3988006vw;
        font-size: 2.3988006vw;
        line-height: 3.37331334vw;
    }
    .icon {
        display: inline-block;
        width: 2.3988006vw;
        height: 2.3988006vw;
        background-image: url(https://gw.alipayobjects.com/zos/rmsportal/oLOjjJWHatTpgfygoLbE.png);
        background-size: cover;
        vertical-align: -1px;
        margin-right: 3.74812594vw;
        position: relative;
    }
    .icon:after {
        content: '';
        position: absolute;
        top: 1px;
        right: -12px;
        width: 1px;
        height: 2.3988006vw;
        background-color: #979797;
    }
} */

</style>
