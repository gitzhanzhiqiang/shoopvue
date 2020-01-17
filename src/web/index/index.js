import Template from '@/template';
export default {
    path: '/',
    component: Template,
    meta: {
        title: '首页'
    },
    children: [
        {
            path: 'index',
            name: 'index',
            alias: '',
            component: resolve => require(['./index.vue'], resolve),
            meta: {
                title: '首页',
                content: '32453'
            }
        },
        {
            path: '/',
            redirect: '/index' //重定向为主页
        },
        {
            path: 'special',
            name: 'special',
            component: resolve => require(['./special.vue'], resolve),
            meta: {
                title: '专题',
            }
        },
        {
            path: 'newList',
            name: 'newList',
            component: resolve => require(['./newList.vue'], resolve),
            meta: {
                title: '资讯',
            }
        },
        {
            path: 'newDetail',
            name: 'newDetail',
            component: resolve => require(['./newDetail.vue'], resolve),
            meta: {
                title: '资讯详情',
            }
        },
        {
            path: 'viewpoint',
            name: 'viewpoint',
            component: resolve => require(['./viewpoint.vue'], resolve),
            meta: {
                title: '观点',
            }
        },
        {
            path: 'reportList',
            name: 'reportList',
            component: resolve => require(['./reportList.vue'], resolve),
            meta: {
                title: '报告',
            }
        },
        {
            path: 'foreignService',
            name: 'foreignService',
            component: resolve => require(['./foreignService.vue'], resolve),
            meta: {
                title: '海外服务',
            }
        },
        {
            path: 'activeList',
            name: 'activeList',
            component: resolve => require(['./activeList.vue'], resolve),
            meta: {
                title: '活动',
            }
        },
        {
            path: 'copyrightNotice',
            name: 'copyrightNotice',
            component: resolve => require(['./copyrightNotice.vue'], resolve),
            meta: {
                title: '版权声明',
            }
        },
        {
            path: 'aboutUs',
            name: 'aboutUs',
            component: resolve => require(['./aboutUs.vue'], resolve),
            meta: {
                title: '关于我们',
            }
        },
    ]

}