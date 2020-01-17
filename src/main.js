import 'babel-polyfill'; //开发环境显示  360和ie
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex';
import router from './router';
import store from './store';
// import SockJS from  'sockjs-client';
// import  Stomp from 'stompjs';
import * as filters from './filters/index.js';
//自定义指令方法
import './directives/index.js';


import '@/assets/scss/reset.scss'; //重置样式
import ElementUI from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll'
import 'element-ui/lib/theme-chalk/index.css';
import { validate } from "@/assets/js/validation";



import Cookies from 'js-cookie';
import Swiper from 'swiper';
// 赋值到Vue的原型上面，在页面就可以使用this.$ + name获取到了
Vue.prototype.$Swiper = Swiper;
Vue.prototype.$Cookies = Cookies;
Vue.prototype.$message = ElementUI.Message;
Vue.prototype.$store = store;
//全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(infiniteScroll)
/* eslint-disable no-new */
Vue.prototype.$validate = validate;

//全局钩子作用于所有路由，里面的参数to表示即将要进入的路由对象，from表示即将要离开的路由对象 路由进入之前
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面meta */ //搜索关键字什么的可以使用
    // store.dispatch('SETISCOLLAPSE', { isCollapse: true });
    // if (to.meta.content) {
    //     let head = document.getElementsByTagName('head');
    //     let meta = document.createElement('meta');
    //     meta.content = to.meta.content;
    //     head[0].appendChild(meta)
    // }
    next();




});
// //路由进入之后
router.afterEach((to, from) => {
   
})

new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
