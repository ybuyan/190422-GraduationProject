<template>
    <div>
        <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            测评信息
        </mu-appbar>
        <mu-container>
            <mu-list class="badge-list-wrap">
                <mu-list-item  button to="/calculationpower">
                    <mu-list-item-content>
                        <mu-list-item-title>计算能力</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>

                <mu-list-item  button to="/focuspower">
                    <mu-list-item-content>
                        <mu-list-item-title>专注能力</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>

                <mu-list-item  button to="/logicpower">
                    <mu-list-item-content>
                        <mu-list-item-title>逻辑能力</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>

                <mu-list-item  button to="/memorypower">
                    <mu-list-item-content>
                        <mu-list-item-title>记忆能力</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>

                <mu-list-item  button to="/reactionpower">
                    <mu-list-item-content>
                        <mu-list-item-title>反应能力</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-icon value="chevron_right"></mu-icon>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list>
        </mu-container>
    </div>
</template>

<script>
import echarts from 'echarts'; 
export default {
    data() {
        return {
           
        }
    },
    methods:{
     
    },
    mounted() {  
 
    }  
}
</script>

<style scoped>
.badge-list-wrap {
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  margin: 0 auto;
}
</style>
