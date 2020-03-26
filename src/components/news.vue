<template>
    <div class="wrapper">
        <mu-appbar class="title news" z-depth="0" title="信息中心" style="width: 100%;" color="#fafafa" text-color="rgba(0, 0, 0, .54)"></mu-appbar>
        
        
        <div style="position:relative;top:56px;margin-bottom:56px">
          
            <mu-container >
                <mu-list>
                    <mu-sub-header>完成度平均占比</mu-sub-header>
                    <div class="chart-wrapper">
                        <canvas id="mountNode"></canvas>
                    </div>
                </mu-list>
            </mu-container> 
            
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header mui-card-media">
                    <img src="../assets/pubImg/sun.jpg" />
                    <div class="mui-media-body">
                        小G今日推荐
                        <p>{{today}}</p>
                    </div>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <img src="../assets/bg/gameTBG.png" />  
                    <mu-list>
                        <template v-for="item in num">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell mui-media">
                                    <a href="javascript:;">
                                        <div class="mui-media-body">
                                            {{item[0]}}
                                            <p class='mui-ellipsis'>{{item[1]}}</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </template>
                    </mu-list>
                </div>
                <div class="mui-card-footer" style="text-align:center"><p>赶紧去训练吧</p></div>
            </div>
            
        </div>
        
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import BottomNavigation from './commom/bottom.vue'
    import axios from 'axios'
    import { longStackSupport } from 'q';
    export default {
        components: {
            BottomNavigation
        },
        data() {
            return {
                num:[],
                today:'',
                phone: localStorage.getItem("phone"),
                userReactionAvg: JSON.parse(localStorage.getItem("userReactionAvg")),
                allUserReactionAvg: JSON.parse(localStorage.getItem("allUserReactionAvg")),
                userCalculationAvg: JSON.parse(localStorage.getItem("userCalculationAvg")),
                allUserCalculationAvg: JSON.parse(localStorage.getItem("allUserCalculationAvg")),
                userFocusAvg: JSON.parse(localStorage.getItem("userFocusAvg")),
                allUserFocusAvg: JSON.parse(localStorage.getItem("allUserFocusAvg")),
                userLogicAvg: JSON.parse(localStorage.getItem("userLogicAvg")),
                allUserLogicAvg: JSON.parse(localStorage.getItem("allUserLogicAvg")),
                userMemoryAvg: JSON.parse(localStorage.getItem("userMemoryAvg")),
                allUserMemoryAvg: JSON.parse(localStorage.getItem("allUserMemoryAvg")),
            }
        },
        created(){
            this.getUserScore();
            this.getAllUserScore();
        },
        mounted() {
            this.getToday();
            var v = this;
            this.$nextTick(()=>{
                v.drawReactionChart();
            });
            this.todayPlan();
        },
        methods:{
            todayPlan() {
                if(this.userReactionAvg < this.allUserReactionAvg){
                    var reaction = ["反应力", "oh！你的反应力弱爆了！！！"]
                    this.num.push(reaction);
                }
                if(this.userCalculationAvg < this.allUserCalculationAvg) {
                    var calculation = ["计算力", "3岁的小孩子，计算能力都比你厉害！！！"]
                    this.num.push(calculation)
                }
                if(this.userFocusAvg < this.allUserFocusAvg) {
                    var focus =["专注力", "你上学的时候没少挨老师批评吧！！！"]
                    this.num.push(focus)
                }
                if(this.userLogicAvg < this.allUserLogicAvg) {
                    var logic = ["逻辑力", "我望你印堂发黑，今天千万别玩狼人杀！！！"]
                    this.num.push(logic)
                }
                if(this.userMemoryAvg < this.allUserMemoryAvg) {
                    var memory = ["记忆力", "我的缇娜！你属金鱼的吗！！？"]
                    this.num.push(memory)
                }
            },
            getToday() {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var day = date.getDate();
                this.today = year + "-" + month + "-" + day;
            },
            getUserScore() {
                let apiUrl = this.$store.state.apiUrl;
                //个人反应力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/userReactionAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let userReactionAvg = JSON.stringify(res.data)
                    localStorage.setItem("userReactionAvg",userReactionAvg)
                
                });
                //个人计算力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/userCalculationAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let userCalculationAvg = JSON.stringify(res.data)
                    localStorage.setItem("userCalculationAvg",userCalculationAvg)
                    
                });
                //个人专注力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/userFocusAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let userFocusAvg = JSON.stringify(res.data)
                    localStorage.setItem("userFocusAvg",userFocusAvg)
                    
                });
                //个人逻辑力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/userLogicAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let userLogicAvg = JSON.stringify(res.data)
                    localStorage.setItem("userLogicAvg",userLogicAvg)
                    
                });
                //个人记忆力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/userMemoryAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let userMemoryAvg = JSON.stringify(res.data)
                    localStorage.setItem("userMemoryAvg",userMemoryAvg)
                    
                });
                
            },
            getAllUserScore(){
                let apiUrl = this.$store.state.apiUrl;
                //所用用户反应力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/allUserReactionAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let allUserReactionAvg = JSON.stringify(res.data)
                    localStorage.setItem("allUserReactionAvg",allUserReactionAvg)
                   
                });
                //所用用户计算力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/allUserCalculationAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let allUserCalculationAvg = JSON.stringify(res.data)
                    localStorage.setItem("allUserCalculationAvg",allUserCalculationAvg)
                   
                });
                //所用用户专注力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/allUserFocusAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let allUserFocusAvg = JSON.stringify(res.data)
                    localStorage.setItem("allUserFocusAvg",allUserFocusAvg)
                   
                });
                //所用用户逻辑力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/allUserLogicAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let allUserLogicAvg = JSON.stringify(res.data)
                    localStorage.setItem("allUserLogicAvg",allUserLogicAvg)
                   
                });
                //所用用户记忆力平均分
                axios({
                    method: "post",
                    url: apiUrl+"game/allUserMemoryAvg",
                    data:{
                        phoneNumber: this.phone,
                    }
                }).then(res => {

                    let allUserMemoryAvg = JSON.stringify(res.data)
                    localStorage.setItem("allUserMemoryAvg",allUserMemoryAvg)
                   
                });
            },
             drawReactionChart(){
                 console.log(this.userReactionAvg,":",this.allUserReactionAvg)
                 let data = [
                    {
                        name:"个人",
                        sort:"反应力",
                        score:this.userReactionAvg
                    },
                    {
                        name:"全部",
                        sort:"反应力",
                        score:this.allUserReactionAvg
                    },{
                        name:"个人",
                        sort:"计算力",
                        score: this.userCalculationAvg
                    },{
                        name:"全部",
                        sort:"计算力",
                        score:this.allUserReactionAvg
                    },{
                        name:"个人",
                        sort:"专注力",
                        score:this.userFocusAvg
                    },{
                        name:"全部",
                        sort:"专注力",
                        score:this.allUserFocusAvg
                    },{
                        name:"个人",
                        sort:"逻辑力",
                        score:this.userLogicAvg
                    },{
                        name:"全部",
                        sort:"逻辑力",
                        score:this.allUserLogicAvg
                    },{
                        name:"个人",
                        sort:"记忆力",
                        score:this.userMemoryAvg
                    },{
                        name:"全部",
                        sort:"记忆力",
                        score:this.allUserMemoryAvg
                    }
                 ];
                var Global = this.$F2.Global;
                // Step 1: 创建 Chart 对象
                const chart = new this.$F2.Chart({
                    id: 'mountNode',
                    pixelRatio: window.devicePixelRatio,
                    width: 375,
                    height: 260,
                    padding: [ 45, 'auto', 'auto' ]
                });

                // Step 2: 载入数据源
                console.log(data);
                chart.source(data);
                
                chart.coord({
                    transposed: true
                });
                
                chart.axis('sort', {
                    line: null,
                    grid: null
                });
                chart.axis('score', {
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
                chart.interval().position('sort*score').color('name').adjust({
                    type: 'dodge',
                    marginRatio: 0.05 // 设置分组间柱子的间距
                });
                // chart.changeData(this.data);
                // Step 4: 渲染图表
                chart.render();
            }
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
