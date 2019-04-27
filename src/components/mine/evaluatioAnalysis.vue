<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            测评信息
        </mu-appbar>
        <div class="charts">
            <div id="main" style=" width:100%; height:350px;"></div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'; 
export default {
    data() {
        return {
            // 初始化空对象  
            chart: null,  
            // 初始化图表配置  
            opinion: ['计算力', '专注力', '反应力', '逻辑力', '记忆力'],  
            opinionData: [{  
                value: 26,  
                name: '计算力'  
            }, {  
                value: 31,  
                name: '专注力'  
            }, {  
                value: 18,  
                name: '反应力'  
            }, {  
                value: 28,  
                name: '逻辑力' 
            }, {  
                value: 21,  
                name: '记忆力'  
            }]  
        }
    },
    methods:{
        // 绘图  
        drawGraph(id) {  
            // 绘图方法  
            this.chart = echarts.init(document.getElementById(id))  
                // 皮肤添加同一般使用方式  
            this.chart.showLoading();  
                // 返回到data中  
            var that = this  
            // ajax 请求数据  
            // $.ajax({  
            //         // 方式  
            //         type: "GET",  
            //         // 是否异步  
            //         async: true,  
            //         // 路径||API  
            //         url: "xxx",  
            //         //返回数据形式为json  
            //         dataType: "json",  
            //         // 加载成功  
            //         success: function(result) {  
            //             // 更新初始数据  
            //             that.opinionData = result  
            //         },  
            //         // 加载错误  
            //         error: function(errorMsg) {  
            //             // alert("请求数据失败!");  
            //             console.log(errorMsg)  
            //         }  
            //     })  
            // set  
            this.chart.setOption({  
                title: {  
                    text: '我的测评信息',  
                    subtext: '',  
                    x: 'center'  
                },  
                tooltip: {  
                    trigger: 'item',  
                    formatter: "{a} <br/>{b} : {c} ({d}%)"  
                },  
                legend: {  
                    x: 'center',  
                    y: 'bottom',  
                    data: this.opinion // this  
                },  
                toolbox: {  
                    show: true,  
                    feature: {  
                        mark: {  
                            show: true  
                        },  
                        dataView: {  
                            show: true,  
                            readOnly: false  
                        },  
                        magicType: {  
                            show: true,  
                            type: ['pie']  
                        },  
                        restore: {  
                            show: true  
                        },  
                        saveAsImage: {  
                            show: true  
                        }  
                    }  
                },  
                calculable: true,  
                series: [{  
                    name: '种类',  
                    type: 'pie',  
                    // 内圆半径，外圆半径  
                    radius: [30, 100],  
                    // 位置，左右，上下  
                    center: ['50%', '50%'],  
                    roseType: 'area',  
                    data: this.opinionData, // this  
                }]  
            })  
            this.chart.hideLoading()  
        }  
    },
    mounted() {  
        this.$nextTick(function() {  
            this.drawGraph('main')  
        })  
    }  
}
</script>

<style scoped>

</style>
