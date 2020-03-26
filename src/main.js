// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import { Swipe, SwipeItem } from 'vue-swipe';
import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-teal.css'
import scroll from 'vue-infinite-scroll';
// import BaiduMap from 'vue-baidu-map';


import VueEmoji from "vue-emoji";
import echarts from "echarts";

import axios from 'axios';
import Vuex from 'vuex'
import store from './vuex/store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Mui from "vue-awesome-mui";
import 'vue-awesome-mui/mui/dist/css/mui.css'
import directives from '@/directives'//头像
import F2 from '@antv/f2/lib/index'

Vue.prototype.$F2= F2;
directives(Vue)
Vue.use(Mui)
Vue.use(router)
Vue.use(Vuex)
window.axios = require('axios');
Vue.prototype.$echarts = echarts;
Vue.use(VueEmoji)

import VueDND from 'awe-dnd';
Vue.use(VueDND);
Vue.use(MuseUI);
Vue.use(scroll);

Vue.config.productionTip = false

Vue.use(iView);


/**登陆状态验证 */
router.beforeEach((to, from, next) => {

  //获取用户登录成功后储存的登录标志
  let getFlag = localStorage.getItem("Flag");

  //如果登录标志存在且为isLogin，即用户已登录
  if(getFlag === "isLogin"){

    //设置vuex登录状态为已登录
    store.state.isLogin = true
    next()

    //如果已登录，还想想进入登录注册界面，则定向回首页
    // if (!to.meta.isLogin) {
    //    //iViewUi友好提示
    //   iView.Message.error('请先退出登录')
    //   next({
    //     path: '/home'
    //   })
    // }
  
  //如果登录标志不存在，即未登录
  }else{

    //用户想进入需要登录的页面，则定向回登录界面
    if(to.meta.isLogin){
      next({
        path: '/home/mine/login',
      })
      iView.Message.info('请先登录')
    //用户进入无需登录的界面，则跳转继续
    }else{
      next()
    }

  }

});

router.afterEach(route => {
  window.scroll(0, 0);
});

//监听手机后退键
mui.init({
    swipeBack: false, //关闭右滑关闭功能（默认就是false）
    keyEventBind: {
      backbutton: true //开启back按键监听（默认就是true）
    }
  });
  var quitTime = null;
  mui.plusReady(function(){
    mui.back = function(){
      //首次按键，提示‘再按一次退出应用’
      if (!quitTime) {
        //记录第一次按下回退键的时间
        quitTime = new Date().getTime();
        //回退到上一页面
        window.history.go(-1);
        setTimeout(function() {
          //1s中后清除
          quitTime = null;
        }, 500);
      }else{
        if((new Date().getTime() - quitTime) < 2000){
          quitTime = null;
          plus.runtime.quit();
        }
      }
    };
  });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
//5419