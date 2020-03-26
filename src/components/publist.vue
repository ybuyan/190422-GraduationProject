<template>
    <div class="wrapper">
        <mu-appbar class="title" z-depth="0" title="发布中心" style="width: 100%;" color="#fafafa" text-color="rgba(0, 0, 0, .54)"></mu-appbar>
        
        <mu-paper :z-depth="0" class="demo-loadmore-wrap">    
            <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" 
                              :refreshing="refreshing" 
                              :loading="loading" 
                              :loaded-all="loadedAll"
                              @load="load"
                              loading-text="小G玩命加载中...">
                    <mu-list>
                        <template v-for="(item,index) in publist">
                            <ul class="mui-table-view" :key="index">
                                <li class="mui-table-view-cell mui-media">
                                    <a :href="item.src">
                                        <div class="mui-card">
                                            <!--页眉，放置标题-->
                                            <div class="mui-card-header mui-card-media">
                                                <img :src="item.smallpic" />
                                                <div class="mui-media-body">
                                                    {{item.tittle}}
                                                    <p>{{item.heading}}</p>
                                                </div>
                                            </div>
                                            <!--内容区-->
                                            <div class="mui-card-content">
                                                <img :src="item.pic" />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>    
                        </template>
                    </mu-list>
                </mu-load-more>
            </mu-container>
        </mu-paper>    
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
    import BottomNavigation from './commom/bottom.vue';
    import Vue from "vue";
    import axios from 'axios'

    

    export default {
        components: {
            BottomNavigation,
        },
        data() {
            return {
                num: 5,
                loadedAll:false,
                refreshing: false,
                loading: false,
                text: 'List',
                img:"",
                smallImg:"",
                publist:JSON.parse(localStorage.getItem("publist"))
            }
        },
         created () {
            this.getPubulistInfo();
            
        },
        methods:{
            //获取发布信息
            getPubulistInfo(){
                let apiUrl = this.$store.state.apiUrl+"publish/publishInfo";
                axios({
                    method:"post",
                    url:apiUrl,
                    data:{
                        id:"1"
                    }
                }).then(res => {
                    this.num = res.data.length
                    console.log(res.data)
                    var publist = JSON.stringify(res.data)
                    localStorage.setItem("publist",publist)
                    console.log(this.publist)
                })
            },
            refresh () {
                this.refreshing = true;
                this.$refs.container.scrollTop = 0;
                setTimeout(() => {
                    this.refreshing = false;
                    this.text = this.text === 'List' ? 'Menu' : 'List';
                    this.num = 5;
                }, 2000)
                },
            load () {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.num += 5;
                }, 2000)
            }
        }
    }
</script>
<style>
.slider{
    height: 40% !important;
}

.demo-loadmore-wrap {
  width: 100%;
  display: flex;
  margin-top: 10px;
  height: 80%;
  flex-direction: column;
}
.demo-loadmore-wrap  .mu-appbar {
  width: 100%;
}
.demo-loadmore-content {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}


</style>