<template>
   <!--菜单方式，浮动球 -->
    <!-- <div class="main"> -->
        <!-- tabs -->
        <!-- <mu-tabs
            class="mu-tabs"
            :value.sync="activeTab" 
            inverse 
            color="secondary" 
            text-color="rgba(0, 0, 0, .54)" 
            full-width 
            @change="handleTabChange">
            <mu-tab value="reaction">反应</mu-tab>
            <mu-tab value="calculation">计算</mu-tab>
            <mu-tab value="memory">记忆</mu-tab>
            <mu-tab value="logic">逻辑</mu-tab>
            <mu-tab value="focus">专注</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="activeTab === 'reaction'">
            <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
                <div slot="header">A</div>
                <mu-list>
                    <mu-list-item avatar button :ripple="false" to="/jiyifanpai">
                    <mu-list-item-action>
                        <mu-avatar>
                        <img src="../../assets/logo.png">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-title>飞机游戏</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
                <mu-divider></mu-divider>   
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
                <div slot="header">B</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
                <div slot="header">C</div>
               
            </mu-expansion-panel>         
        </div>
        <div class="demo-text" v-if="activeTab === 'calculation'">
            <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
                <div slot="header">A</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
                <div slot="header">B</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
                <div slot="header">C</div>
                
            </mu-expansion-panel>
        </div>
        <div class="demo-text" v-if="activeTab === 'memory'">
            <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
                <div slot="header">A</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
                <div slot="header">B</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
                <div slot="header">C</div>
                
            </mu-expansion-panel>
        </div>
        <div class="demo-text" v-if="activeTab === 'logic'">
            <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
                <div slot="header">A</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
                <div slot="header">B</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
                <div slot="header">C</div>
                
            </mu-expansion-panel>
        </div>
        <div class="demo-text" v-if="activeTab === 'focus'">
            <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
                <div slot="header">A</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
                <div slot="header">B</div>
               
            </mu-expansion-panel>
            <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
                <div slot="header">C</div>
                
            </mu-expansion-panel>
        </div>
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" /> -->
    <!-- <svg 
        :width='width' 
        :height='height' 
        preserveAspectRatio="xMinYMin meet" 
        viewBox="0 0 400 400"
        @mousemove='listener($event)'
        >
         <a class="alink" @click="go($event)" v-for="tag in tags" :key="tag.x">
            <text :x='tag.x' :y='tag.y' :font-size='30 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
         </a>
    </svg>  -->
    <div class="tab_class">
        <mu-carousel transition="fade" class="slider">
            <mu-carousel-item>
                <img :src="carouselImg1">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg2">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg3">
            </mu-carousel-item>
            <mu-carousel-item>
                <img :src="carouselImg4">
            </mu-carousel-item>
        </mu-carousel>
        <div class="train_main">
            <div class="train">训练项</div>

            <mu-container>
                <mu-flex justify-content="center">
                    <mu-paper :z-depth="1">
                    <mu-grid-list class="gridlist-demo" >
                        <mu-grid-tile v-for="(tile,index) in list1" 
                                      :key="index"
                                      button
                                      @click="go(index)">
                            
                            <img :src="tile.image" />
                            <span slot="title">{{tile.title}}</span>
                            
                        </mu-grid-tile>
                        <mu-grid-tile>
                            <img src="../../assets/img/gameClass/slh.jpg" />
                            <span slot="title">待开发</span>
                        </mu-grid-tile>
                    </mu-grid-list>
                    
                    </mu-paper>
                </mu-flex>
                </mu-container>
        </div>
    </div>
        

</template>
<script>

    export default {
        data() {
            return {
                carouselImg1: require("../../assets/img/slider/slider_1.jpeg"),
                carouselImg2: require("../../assets/img/slider/slider_2.jpeg"),
                carouselImg3: require("../../assets/img/slider/slider_3.jpeg"),
                carouselImg4: require("../../assets/img/slider/slider_4.jpeg"),
                list1: [{
                    image: require("../../assets/img/gameClass/reaction.jpg"),
                    title: '反应力',
             
                }, {
                    image: require("../../assets/img/gameClass/focus.jpg"),
                    title: '专注力',
               
                }, {
                    image: require("../../assets/img/gameClass/logic.jpg"),
                    title: '逻辑力',
                
                }, {
                    image: require("../../assets/img/gameClass/caclutation.jpg"),
                    title: '计算力',
            
                }, {
                    image: require("../../assets/img/gameClass/memory.jpg"),
                    title: '记忆力',
                   
                }]
               
            }
        },
        methods: {
       
            go(index){
                if(index === 4) {
                    console.log("i am memory")
                    this.$router.push('/memory')
                }else if(index === 2) {
                    console.log("i am logic")
                    this.$router.push('/logic')
                }else if(index === 0) {
                    console.log("i am reaction")
                    this.$router.push('/reaction')
                }else if(index === 1) {
                    console.log("i am focus")
                    this.$router.push('/focus')
                }else if(index === 3){
                    console.log("i am calculation")
                    this.$router.push('/calculation')
                }
            },
        }
    }
</script>
<style scoped>
.main {
    overflow: auto;
    /*overflow-scrolling: touch;*/
    border: 1px solid #d9d9d9;
}

.demo-text {
  background: #fff;
}
.demo-text p {
    margin: 8px 0;
}

.alink{
    text-decoration: none !important;
}
.slider{
    height: 40% !important;
}
.train{
    height: 30px;
    line-height: 30px;
    color: gray;
    text-align: center;
    font-style: oblique;
}
.train_main{
    margin-top: 15px;
    margin-bottom: 5.5rem; 
}
.tab_class{
    height: 100% !important;
}
</style>
