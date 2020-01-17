import Template from '@/template';
export default {
    path: '/buyerPersonCenter',
    component: Template,
    meta: {
        title: '流程'
    },
    children: [
        {
            path: 'myshopping',
            name: 'myshopping',
            component: resolve => require(['./myshopping.vue'], resolve),
            meta: {
                title: '我的爱心购',
            }
        },
        {
            path: 'myOrder',
            name: 'myOrder',
            component: resolve => require(['./myOrder.vue'], resolve),
            meta: {
                title: '我的订单',
            }
        },
        {
            path: 'myCart',
            name: 'myCart',
            component: resolve => require(['./myCart.vue'], resolve),
            meta: {
                title: '我的购物车',
            }
        },
        {
            path: 'myCollecting',
            name: 'myCollecting',
            component: resolve => require(['./myCollecting.vue'], resolve),
            meta: {
                title: '我的收藏',
            }
        },
        {
            path: 'mylooked',
            name: 'mylooked',
            component: resolve => require(['./mylooked.vue'], resolve),
            meta: {
                title: '我的浏览',
            }
        },
        {
            path: 'myProfile',
            name: 'myProfile',
            component: resolve => require(['./myProfile.vue'], resolve),
            meta: {
                title: '我的资料',
            }
        },
        {
            path: 'myAccount',
            name: 'myAccount',
            component: resolve => require(['./myAccount.vue'], resolve),
            meta: {
                title: '我的账户',
            }
        },
        {
            path: 'myAddress',
            name: 'myAddress',
            component: resolve => require(['./myAddress.vue'], resolve),
            meta: {
                title: '我的地址',
            }
        },
        {
            path: 'myEvaluation',
            name: 'myEvaluation',
            component: resolve => require(['./myEvaluation.vue'], resolve),
            meta: {
                title: '我的评价',
            }
        },
        {
            path: 'myGrade',
            name: 'myGrade',
            component: resolve => require(['./myGrade.vue'], resolve),
            meta: {
                title: '我的积分',
            }
        },
        {
            path: 'myMessage',
            name: 'myMessage',
            component: resolve => require(['./myMessage.vue'], resolve),
            meta: {
                title: '我的消息',
            }
        },
        {
            path: 'securityCenter',
            name: 'securityCenter',
            component: resolve => require(['./securityCenter.vue'], resolve),
            meta: {
                title: '安全中心',
            }
        },
        {
            path: 'withdrawal',
            name: 'withdrawal',
            component: resolve => require(['./withdrawal.vue'], resolve),
            meta: {
                title: '提现',
            }
        },
        {
            path: 'messageDetails',
            name: 'messageDetails',
            component: resolve => require(['./messageDetails.vue'], resolve),
            meta: {
                title: '消息详情',
            }
        },
        
    ]

}
