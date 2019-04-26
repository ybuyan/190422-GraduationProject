import Vue from 'vue'
import Router from 'vue-router'

import home from "../components/home.vue"
import mine from "../components/mine.vue"
import news from "../components/news.vue"
import publish from "../components/publist.vue"
import homepage from "../components/homepage.vue"
import content from "../components/content.vue"

/**mine */
import about from "../components/mine/about.vue"
import accountInfo from "../components/mine/accountInfo.vue"
import evaluatioAnalysis from "../components/mine/evaluatioAnalysis.vue"
import login from "../components/mine/login.vue"
import userInfo from "../components/mine/userInfo.vue"

/**游戏分类 */
import Calculation from "../components/game/Calculation"
import Focus from "../components/game/Focus"
import Logic from "../components/game/Logic"
import Memory from "../components/game/Memory"
import Reaction from "../components/game/Reaction"
/**记忆力游戏*/
import jiyifanpai from "../components/game/reaction/AReaction/jiyifanpai.vue"
/**反应力游戏*/
import baikuai from "../components/game/reaction/AReaction/baikuai.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/home/mine',
      name: 'mine',
      component: mine,
    },
    {
      path: '/home/news',
      name: 'news',
      component: news
    },
    {
      path: '/home/publish',
      name: 'publish',
      component: publish
    },
    {
      path: '/home/homepage',
      name: 'homepage',
      component: homepage
    },{
      path:"/home/content",
      name:"content",
      component:content
    },
 
   
    /**mine */
    {
      path:"/home/mine/userInfo",
      name:userInfo,
      component:userInfo
    },
    {
      path:"/home/mine/evaluatioAnalysis",
      name:evaluatioAnalysis,
      component:evaluatioAnalysis
    },
    {
      path:"/home/mine/accountInfo",
      name:accountInfo,
      component:accountInfo
    },
    {
      path:"/home/mine/about",
      name:about,
      component:about
    },
    {
      path:"/home/mine/login",
      name:login,
      component:login
    },
     /**记忆力游戏 */
     {
      path:"/jiyifanpai",
      name:"jiyifanpai",
      component:jiyifanpai
    },
    /**反应力游戏 */
    {
      path:"/baikuai",
      name:"baikuai",
      component:baikuai
    },
    /********游戏分类***********/
    {
      path:'/calculation',
      component:Calculation
    },
    {
      path:'/focus',
      component:Focus
    },
    {
      path:'/logic',
      component:Logic
    },
    {
      path:'/memory',
      component:Memory
    },
    {
      path:'/reaction',
      component:Reaction
    }
    /********游戏分类***********/
    
  ]
})
