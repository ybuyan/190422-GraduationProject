import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    apiUrl: "http://yqwyh.free.idcfengye.com/" ,//http://yqwyh.free.idcfengye.com/
    isLogin: false,
};
// 获取属性的状态
const getters = {
    //获取登录状态
    isLogin: state => state.isLogin,
};

  // 设置属性状态
const mutations = {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
};

  // 应用mutations
const actions = {
    //获取登录状态
    setUser({commit}, flag) {
      commit("userStatus", flag)
    }
};
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});