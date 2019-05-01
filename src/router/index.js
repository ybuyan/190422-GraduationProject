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

/**About */
import privacypolicy from "../components/About/privacypolicy.vue"
import serviceagreement from "../components/About/serviceagreement.vue"

/**个人能力测评 */
import calculationpower from "../components/analysis/calculationpower.vue"
import focuspower from "../components/analysis/focuspower.vue"
import logicpower from "../components/analysis/logicpower.vue"
import memorypower from "../components/analysis/memorypower.vue"
import reactionpower from "../components/analysis/reactionpower.vue"

/**游戏分类 */
import Calculation from "../components/game/Calculation"
import Focus from "../components/game/Focus"
import Logic from "../components/game/Logic"
import Memory from "../components/game/Memory"
import Reaction from "../components/game/Reaction"

/**记忆力游戏*/
import jiyifanpai from "../components/game/reaction/AReaction/jiyifanpai.vue"
/**反应力游戏*/
import xinsuan from "../components/game/reaction/AReaction/xinsuan.vue"

import qingwachichong from "../components/game/reaction/BReaction/qingwachichong.vue"

import palppybird from "../components/game/reaction/CReaction/palppybird.vue"
import baikuai from "../components/game/reaction/CReaction/baikuai.vue"
import changecolor from "../components/game/reaction/CReaction/changecolor.vue"
 
/**逻辑力游戏 */
import qingwa from "../components/game/logic/ALogic/qingwa.vue"

Vue.use(Router)

export default new Router({
//mode: 'history',
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
    },
    /********游戏分类end***********/
     /**记忆力游戏 */
     {
      path:"/jiyifanpai",
      name:"jiyifanpai",
      component:jiyifanpai
    },
    /**反应力游戏 */
    {
      path:"/palppybird",
      name:"palppybird",
      component:palppybird
    },
    {
      path:"/xinsuan",
      name:"xinsuan",
      component:xinsuan
    },
    {
      path: "/baikuai",
      component: baikuai
    },
    {
      path:"/changecolor",
      component:changecolor
    },
    {
      path:"/qingwachichong",
      component:qingwachichong
    },
    /**逻辑力游戏 */
    {
      path:"/qingwa",
      component: qingwa
    },
    /**个人能力测试 */
    {
      path:"/calculationpower",
      component:calculationpower
    },
    {
      path:"/focuspower",
      component:focuspower
    },
    {
      path:"/logicpower",
      component:logicpower
    },
    {
      path:"/memorypower",
      component:memorypower
    },
    {
      path:"/reactionpower",
      component:reactionpower
    },
    /**个人能力测试end */
    /**About */
    {
      path:'/privacypolicy',
      component:privacypolicy
    },
    {
      path:'/serviceagreement',
      component:serviceagreement
    }
  ]
})
