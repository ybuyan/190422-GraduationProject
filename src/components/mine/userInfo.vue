<template>
    <div class="userInfo">
        <mu-appbar class="title news" style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
            <mu-button icon slot="left" to="/home/mine">
                <mu-icon value="chevron_left" ></mu-icon>
            </mu-button>
            我的账号
            <mu-button flat slot="right">账号管理</mu-button>
        </mu-appbar>
        <mu-paper :z-depth="1" class="demo-list-wrap">
            <mu-list>
                <mu-list-item avatar button>
                    <mu-list-item-title>{{username}}</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-avatar>
                            <img :src="avatar">
                        </mu-avatar>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>
            <mu-list>
                <mu-list-item avatar button @click="openSex" >
                    <mu-list-item-title>性别</mu-list-item-title>
                    <mu-list-item-action>
                        {{sex}}
                    </mu-list-item-action>
                </mu-list-item>
                <mu-bottom-sheet :open.sync="isSex">
                    <mu-list>
                        <mu-sub-header>请选择性别</mu-sub-header>
                        <mu-list-item>
                            <mu-flex align-items="center" justify-content="center" :key="'radio ' + i" v-for="i in 2">
                                <mu-list-item-title>{{i==1?"男":"女"}}</mu-list-item-title>
                                <mu-list-item-action>
                                    <mu-radio :value="i" v-model="changeSex.radio"></mu-radio>
                                </mu-list-item-action>
                            </mu-flex> 
                        </mu-list-item>                  
                        <mu-flex justify-content="center" align-items="center">
                            <mu-button flat  @click="closeSex">取消</mu-button>
                            <mu-button flat  @click="submit_sex">确定</mu-button>
                        </mu-flex>   
                    </mu-list>
                </mu-bottom-sheet>
            </mu-list>
            <mu-divider></mu-divider>

            <mu-list>
                <mu-list-item avatar button @click="openAge" >
                    <mu-list-item-title>年龄</mu-list-item-title>
                    <mu-list-item-action>
                        {{age}}
                    </mu-list-item-action>
                </mu-list-item>
                <mu-bottom-sheet :open.sync="isAge">
                    <mu-list @item-click="closeAge">
                        <mu-sub-header>请选择出身年月</mu-sub-header>
                        <mu-flex justify-content="between" align-items="end" wrap="wrap">
                            <mu-paper :z-depth="1" class="demo-date-picker">
                                <mu-date-picker type="date" :date.sync="date"></mu-date-picker>
                            </mu-paper>
                        </mu-flex>
                        <mu-flex justify-content="center" align-items="center">
                            <mu-button flat>取消</mu-button>
                            <mu-button flat @click="age_submit(date)">确定</mu-button>
                        </mu-flex>    
                    </mu-list>
                </mu-bottom-sheet>
            </mu-list>
            <mu-divider></mu-divider>
             <mu-list>
                <mu-list-item avatar button @click="openStatus" >
                    <mu-list-item-title>状态</mu-list-item-title>
                    <mu-list-item-action>
                        {{status}}
                    </mu-list-item-action>
                </mu-list-item>
                <mu-bottom-sheet :open.sync="isStatus">
                    <mu-list @item-click="closeStatus">
                        <mu-sub-header>请选择当前状态</mu-sub-header>
                        <mu-slide-picker :slots="stateSlots" 
                                         :visible-item-count="3" 
                                         @change="stateChange" 
                                         :values="state">
                                         </mu-slide-picker>
                        <mu-flex justify-content="center" align-items="center">
                            <mu-button flat @click="status_submit">确定</mu-button>
                        </mu-flex>    
                    </mu-list>
                </mu-bottom-sheet>
            </mu-list>
            <mu-divider></mu-divider>

            <mu-list>
                <mu-list-item avatar button @click="openIndustry" >
                    <mu-list-item-title>行业</mu-list-item-title>
                    <mu-list-item-action>
                        {{indus}}
                    </mu-list-item-action>
                </mu-list-item>
                <mu-bottom-sheet :open.sync="isIndustry">
                    <mu-list @item-click="closeIndustry">
                        <mu-sub-header>行业</mu-sub-header>
                        <mu-slide-picker :slots="industrySlots" 
                                         :visible-item-count="3" 
                                         @change="industryChange" 
                                         :values="industry">
                                         </mu-slide-picker>
                        <mu-flex justify-content="center" align-items="center">
                            <mu-button flat @click="closeIndustry">确定</mu-button>
                        </mu-flex>    
                    </mu-list>
                </mu-bottom-sheet>
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
const state = {'学生':'学生','工作':'工作','待业':'待业'}
const industry = {'计算机':'计算机','工作':'工作','待业':'待业'}
export default {
    name:"userInfo",
    data() {
        return {
            changeSex: {
                radio: 1, 
            },
            username:"yuan",
            avatar:require("../../assets/photo.jpg"),
            sex:"请选择",
            age:"请选择",
            date:undefined,
            isIndustry: false,
            isSex: false,
            isAge: false,
            isStatus:false,
            industrySlots: [
                {
                width: '100%',
                textAlign: 'center',
                values: Object.keys(industry)
                }
            ],
            industry:'计算机',
            indus:"请选择",
            stateSlots: [
                {
                width: '100%',
                textAlign: 'center',
                values: Object.keys(state)
                }
            ],
            state: '学生',
            status:"请选择",
        }
    },
    methods:{
        //选择性别
        submit_sex() {
            console.log(this.changeSex.radio)
            let newCR = this.changeSex.radio
            if(newCR === 1){
                this.sex = "男"
            }else {
                this.sex = "女"
            }
            this.closeSex();
        },
        //end
        /**状态选择 */
        status_submit() {
            this.closeStatus()
        },
        /**end */
        //计算年龄
        age_submit(date){
            var newdate = date;
            this.comAge(newdate);
            this.closeAge();
        },
        comAge(date) { 
            var year = date.getFullYear(); 
            var month = date.getMonth() + 1; 

            var d = new Date();
            var nowyear = d.getFullYear();
            var nowmonth = d.getMonth()+1;

            var newyear = nowyear - year;
            var newmonth = nowmonth - month;
    
            if(newmonth < 0)
                newyear++
            this.age = newyear;
            return this.age;
        },
        //年龄计算结束
        //状态选择
        stateChange (value, index) {
            switch (index) {
                case 0:
                this.status = value
                const arr = state[value]
                this.stateSlots[1].values = arr
                this.status = arr[0]
            }
            this.state = [this.status]
        },
        //结束
        //行业选择
        industryChange(value, index) {
            switch (index) {
                case 0:
                this.indus = value
                const arr = industry[value]
                this.industrySlots[1].values = arr
                this.indus = arr[0]
            }
            this.industry = [this.indus]
        },
        //结束
        closeSex () {
            this.isSex = false;
            
        },
        openSex () {
            this.isSex = true;
            
        },
        openAge (){
            this.isAge = true;
        },
        closeAge() {
            this.isAge = false;
        },
        openStatus() {
            this.isStatus = true;
        },
        closeStatus() {
            this.isStatus = false;
        },
        openIndustry() {
            this.isIndustry = true;
        },
        closeIndustry() {
            this.isIndustry = false;
        }

    }
}
</script>

<style scoped>
.demo-list-wrap {
  width: 100%;
  max-width: 360px;
  margin: 3.8rem 0;
  background-color: #fafafa !important;
}
.demo-date-picker {
  margin: 0 auto;
}
.demo-picker-container{
  width: 256px;
}
.demo-snackbar-radio {
  margin: 8px 0;
}

.mu-item div{
    margin:0 auto;
}
</style>
