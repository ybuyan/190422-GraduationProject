<template>
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
    <svg 
        :width='width' 
        :height='height' 
        preserveAspectRatio="xMinYMin meet" 
        viewBox="0 0 400 400"
        @mousemove='listener($event)'
        >
         <a @click="go($event)" v-for="tag in tags" :key="tag.x">
            <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
         </a>
    </svg> 
   
</template>
<script>

    // import axios from 'axios'
    // import timeago from 'timeago.js'
    export default {
        data() {
            return {
                // loading: false,
                // scroller: null,
                // activeTab: "reaction",
                // panel: ''
                width:document.body.clientWidth,//svg宽度
                height:document.body.clientHeight,//svg高度
                tagsNum:5,//标签数量
                RADIUS:110,//球的半径
                speedX:Math.PI/360,//球一帧绕x轴旋转的角度
                speedY:Math.PI/360,//球-帧绕y轴旋转的角度
                tags: [],
                newTag:[],  
            }
        },
        created() {
           // this.getData()
            let tags=['计算力','逻辑力','记忆力','反应力','专注力'];
            let newTag=[];
            for(let i = 0; i < this.tagsNum; i++){
                let tag = {};
                let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
                let a = Math.acos(k);
                let b = a * Math.sqrt(this.tagsNum * Math.PI)//计算标签相对于球心的角度
                tag.text = tags[i];
                tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);//根据标签角度求出标签的x,y,z坐标
                tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
                tag.z = this.RADIUS * Math.cos(a);
                //tag.href = this.$router.push('/calculation');//给标签添加链接
                newTag.push(tag)
                
            }
            this.tags = newTag;//让vue替我们完成视图更新
            this.newTag = newTag;
        },
        computed:{
            CX(){//球心x坐标
            return this.width/2;
            },
            CY(){//球心y坐标
                return this.height/2;
            }
        },
        mounted:function() {
            // this.scroller = this.$el
            setInterval(() => {
                    this.rotateX(this.speedX);
                    this.rotateY(this.speedY);
                }, 17)
        },
        filters: {
            // timeago(val) {
            //     let time = new Date(val)
            //     var thistime = timeago()
            //     return thistime.format(time, 'zh_CN') //将UTC时间转换格式---> 几天前,几小时前...
            // }
        },
        methods: {
        //     toggle (panel) {
        //         this.panel = panel === this.panel ? '' : panel;
        //     },
        //     loadMore() {
        //         if (!this.nomore) {
        //             this.loading = true
        //             this.page +=1
        //             let url = this.url + '&page=' + this.page
        //             let arr = []
        //             setTimeout(() => {
        //                 let that = this
        //                 axios.get(url).then(function(response) {
        //                     arr = response.data.data
        //                     if (arr.length === 0) {
        //                         that.loading = false
        //                         that.nomore = true
        //                         return
        //                     }
        //                     that.items = [...that.items, ...arr]
        //                     arr = []
        //                 })
        //                 this.loading = false
        //             }, 1000)
        //         }
        //     },
        //     handleTabChange(val){
        //         this.activeTab = val;
        //         // this.$router.push('/' + val)
        //     }       
        go($event){
            let text =$event.target.innerHTML;
            if(text === '记忆力') {
                console.log("i am memory")
                this.$router.push('/memory')
            }else if(text === '逻辑力') {
                console.log("i am logic")
                this.$router.push('/logic')
            }else if(text === '反应力') {
                console.log("i am reaction")
                this.$router.push('/reaction')
            }else if(text === '专注力') {
                console.log("i am focus")
                this.$router.push('/focus')
            }else if(text === '计算力'){
                console.log("i am calculation")
                this.$router.push('/calculation')
            }
            console.log(text)
            
            //this.$router.push(tag.R)
            },
            rotateX(angleX){
                var cos = Math.cos(angleX);
                var sin = Math.sin(angleX);
                for(let tag of this.newTag){
                    var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
                    var z1 = tag.z * cos + (tag.y- this.CY) * sin;
                    tag.y = y1;
                    tag.z = z1;
                } 
            },
            rotateY(angleY){
                var cos = Math.cos(angleY);
                var sin = Math.sin(angleY);
                for(let tag of this.newTag){
                    var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
                    var z1 = tag.z * cos + (tag.x-this.CX) * sin;
                    tag.x = x1;
                    tag.z = z1;
                } 
            },
            listener(event){//响应鼠标移动
                var x = event.clientX - this.CX;
                var y = event.clientY - this.CY;
                this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
                this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001); 
            }     
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

</style>
