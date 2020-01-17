import Vue from 'vue'
import Router from 'vue-router'
import APP from '../App';
import index from '@/web/index/index.js';
import agreement from '@/web/agreement';//协议文本相关
import buyerPersonCenter from '@/web/buyerPersonCenter';//卖家中心
import supplierCenter from '@/web/supplierCenter';//合作商户中心
import sellerCenter from '@/web/sellerCenter';//卖家中心
import purchase from '@/web/purchase';//购物
import generalize from '@/web/generalize';//购物
import personCenter from '@/web/personCenter';//账号中心
import administrative from '@/web/administrative';//账号中心
// import purchase from '@/web/purchase';//卖家中心
// import generalize from '@/web/generalize';//卖家中心
// import administrative from '@/web/administrative';//卖家中心

// 解决push同一路由报错的问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function(to) {
   	return VueRouterPush.call(this, to).catch(err => err)
}
Vue.use(Router)
const defaultRoute = {
    path: '/',
    component: APP,
    children: [
        index,
        agreement,
        buyerPersonCenter,
        supplierCenter,
        sellerCenter,
        purchase,
        generalize,
        personCenter,
        administrative,
    ]
};
export default new Router({ //路由懒加载
    mode: 'history', //去掉# //需后台配合 nginx
    routes: [
            {
               path: '/',
               redirect: '/index'
           },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['../login'], resolve),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/downLoadApp',
            name: 'downLoadApp',
            component: resolve => require(['../downLoadApp'], resolve),
            meta: {
                title: '下载APP'
            }
        },
        {
            path: '/PrivacyProtocol',
            name: 'PrivacyProtocol',
            component: resolve => require(['../PrivacyProtocol'], resolve),
            meta: {
                title: '隐私条款'
            }
        },
        {
            path: '/UserRegProtocol',
            name: 'UserRegProtocol',
            component: resolve => require(['../UserRegProtocol'], resolve),
            meta: {
                title: '用户协议'
            }
        },
        {
            path: '/chitchat',
            name: 'chitchat',
            component: resolve => require(['../chitchat'], resolve),
            meta: {
                title: '聊天'
            }
        },
        // {
        //   path: '/',
        //   redirect: '/login' //重定向
        // },
        // {
        //   path: '/404',
        //   name: 'notFound',
        //   component: resolve => require(['../notFound.vue'], resolve),
        //   meta: {
        //     title: '404'
        //   }
        // },
        defaultRoute,
        // {
        //   path: "*", // 此处需特别注意置于最底部
        //   redirect: "/404"
        // }
    ],
    scrollBehavior(to, from, savedPosition) { //第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
        if (savedPosition) { //前进后退按钮  保持原样
            return savedPosition;
        } else {
            return {
                x: 0,
                y: 0
            } //跳转   回顶部
        }
    }
})
