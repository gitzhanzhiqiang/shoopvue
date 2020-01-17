import Template from '@/template';
export default {
    path: '/purchase',
    component: Template,
    meta: {
        title: '订单'
    },
    children: [
        {
            path: 'commentCommodity',
            name: 'commentCommodity',
            component: resolve => require(['./commentCommodity.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'confirmOrder',
            name: 'confirmOrder',
            component: resolve => require(['./confirmOrder.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'helpCenter',
            name: 'helpCenter',
            component: resolve => require(['./helpCenter.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'helpDetails',
            name: 'helpDetails',
            component: resolve => require(['./helpDetails.vue'], resolve),
            meta: {
                title: '帮助详情',
            }
        },
        {
            path: 'logisticsInformation',
            name: 'logisticsInformation',
            component: resolve => require(['./logisticsInformation.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'orderDetails',
            name: 'orderDetails',
            component: resolve => require(['./orderDetails.vue'], resolve),
            meta: {
                title: '订单详情',
            }
        },
        {
            path: 'payment',
            name: 'payment',
            component: resolve => require(['./payment.vue'], resolve),
            meta: {
                title: '支付方式',
            }
        },
        {
            path: 'productDetails',
            name: 'productDetails',
            component: resolve => require(['./productDetails.vue'], resolve),
            meta: {
                title: '产品详情',
            }
        },
        {
            path: 'productList',
            name: 'productList',
            component: resolve => require(['./productList.vue'], resolve),
            meta: {
                title: '产品列表',
            }
        },
        {
            path: 'retreatOrder',
            name: 'retreatOrder',
            component: resolve => require(['./retreatOrder.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'shopList',
            name: 'shopList',
            component: resolve => require(['./shopList.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'shopreplacement',
            name: 'shopreplacement',
            component: resolve => require(['./shopreplacement.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'status',
            name: 'status',
            component: resolve => require(['./status.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'storeList',
            name: 'storeList',
            component: resolve => require(['./storeList.vue'], resolve),
            meta: {
                title: '店铺列表',
            }
        },
        
        
    ]

}
