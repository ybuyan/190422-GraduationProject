<template>
    <div class="main">
        <!-- tabs -->
        <mu-tabs :value.sync="activeTab" color="primary" indicator-color="yellow" full-width @change="handleTabChange">
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
                    <mu-list-item avatar button :ripple="false" to="/feiji">
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
        <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore" />
    </div>
</template>
<script>
    import axios from 'axios'
    import timeago from 'timeago.js'
    export default {
        data() {
            return {
                loading: false,
                scroller: null,
                activeTab: "reaction",
                panel: ''
            }
        },
        created() {
           // this.getData()
        },
        mounted() {
            this.scroller = this.$el
        },
        filters: {
            timeago(val) {
                let time = new Date(val)
                var thistime = timeago()
                return thistime.format(time, 'zh_CN') //将UTC时间转换格式---> 几天前,几小时前...
            }
        },
        methods: {
            toggle (panel) {
                this.panel = panel === this.panel ? '' : panel;
            },
            loadMore() {
                if (!this.nomore) {
                    this.loading = true
                    this.page +=1
                    let url = this.url + '&page=' + this.page
                    let arr = []
                    setTimeout(() => {
                        let that = this
                        axios.get(url).then(function(response) {
                            arr = response.data.data
                            if (arr.length === 0) {
                                that.loading = false
                                that.nomore = true
                                return
                            }
                            that.items = [...that.items, ...arr]
                            arr = []
                        })
                        this.loading = false
                    }, 1000)
                }
            },
            handleTabChange(val){
                this.activeTab = val;
                // this.$router.push('/' + val)
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
