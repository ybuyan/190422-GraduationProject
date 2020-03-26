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
import registered from "../components/mine/registered.vue"
import openVIP from "../components/mine/openVIP.vue"

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

/**账户 */
import recharge from "../components/account/recharge.vue"

/**专注力游戏*/
import zuiqiangyanli from "../components/game/focus/zuiqiangyanli.vue"
import wazhongzhaomei from "../components/game/focus/wazhongmei.vue"

/**记忆力游戏*/
import xygsz from "../components/game/memory/xygsz.vue"

/**反应力游戏*/
import sqs from "../components/game/reaction/AReaction/sqs.vue"
import qingwachichong from "../components/game/reaction/BReaction/qingwachichong.vue"
import palppybird from "../components/game/reaction/CReaction/palppybird.vue"
import baikuai from "../components/game/reaction/CReaction/baikuai.vue"
import zqdzjs from "../components/game/reaction/BReaction/zqdzjs.vue"
import zfj from "../components/game/reaction/BReaction/zfj.vue"
import xxoo from "../components/game/reaction/AReaction/xxoo.vue"
import symh from "../components/game/reaction/CReaction/symh.vue"

/**计算力游戏 */
import xinsuan from "../components/game/reaction/AReaction/xinsuan.vue"
 
/**逻辑力游戏 */
import qingwa from "../components/game/logic/ALogic/qingwa.vue"
import szcg from "../components/game/logic/ALogic/szcg.vue"
import qqppp from "../components/game/logic/ALogic/qqppp.vue"

Vue.use(Router)

export default new Router({
//mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/home/publish'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        isLogin: true
      },
    },
    {
      path: '/home/mine',
      name: 'mine',
      component: mine,
    },
    {
      path: '/home/news',
      name: 'news',
      component: news,
      meta: {
        isLogin: true
      },
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
      component:userInfo,
      meta: {
        isLogin: true
      }
    },
    {
      path:"/home/mine/evaluatioAnalysis",
      name:evaluatioAnalysis,
      component:evaluatioAnalysis,
      meta: {
        isLogin: true
      }
    },
    {
      path:"/home/mine/accountInfo",
      name:accountInfo,
      component:accountInfo,
      meta: {
        isLogin: true
      }
    },
    {
      path:"/home/mine/about",
      name:about,
      component:about
    },
    {
      path:"/home/mine/login",
      name:login,
      component:login,
      meta: {
        isLogin: false
      }
    },
    {
      path:"/registered",
      component: registered,
      
    },
    {
      path:"/home/mine/openVIP",
      component:openVIP,
      meta: {
        isLogin: true
      },
    },
    /********账户***************/
    {
      path:"/recharge",
      component:recharge
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
    /**专注力游戏 */
    {
      path:"/zuiqiangyanli",
      component:zuiqiangyanli
    },
    {
      path:"/wazhongzhaomei",
      component:wazhongzhaomei
    },
     /**记忆力游戏 */
    {
      path:"/xygsz",
      component:xygsz
    },
    /**反应力游戏 */
    {
      path:"/sqs",
      component:sqs
    },
    {
      path:"/palppybird",
      name:"palppybird",
      component:palppybird
    },
    
    {
      path: "/baikuai",
      component: baikuai
    },
    {
      path:"/qingwachichong",
      component:qingwachichong
    },
    {
      path:"/zqdzjs",
      component:zqdzjs
    },
    {
      path:"/zfj",
      component:zfj
    },
    {
      path:"/xxoo",
      component:xxoo
    },
    {
      path:"/symh",
      component:symh
    },
    /**逻辑力游戏 */
    {
      path:"/qingwa",
      component: qingwa
    },
    {
      path:"/szcg",
      component: szcg
    },
    {
      path:"/qqppp",
      component: qqppp
    },
    /**计算力游戏 */
    {
      path:"/xinsuan",
      name:"xinsuan",
      component:xinsuan
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
