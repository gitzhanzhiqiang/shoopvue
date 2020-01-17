import Template from '@/template';
export default {
    path: '/agreement',
    component: Template,
    meta: {
        title: '流程'
    },
    children: [
        {
            path: 'shoppingProcess',
            name: 'shoppingProcess',
            component: resolve => require(['./shoppingProcess.vue'], resolve),
            meta: {
                title: '购物流程',
            }
        },
        {
            path: 'administrativeRules',
            name: 'administrativeRules',
            component: resolve => require(['./administrativeRules.vue'], resolve),
            meta: {
                title: '商家管理规则',
            }
        },
        {
            path: 'enter',
            name: 'enter',
            component: resolve => require(['./enter.vue'], resolve),
            meta: {
                title: '商家入驻流程',
            }
        },
        {
            path: 'faq',
            name: 'faq',
            component: resolve => require(['./faq.vue'], resolve),
            meta: {
                title: '常见问题',
            }
        },
        {
            path: 'helpIntroduce',
            name: 'helpIntroduce',
            component: resolve => require(['./helpIntroduce.vue'], resolve),
            meta: {
                title: '平台帮扶创新模式介绍',
            }
        },
        {
            path: 'liabilityExemption',
            name: 'liabilityExemption',
            component: resolve => require(['./liabilityExemption.vue'], resolve),
            meta: {
                title: '平台免责商品说明',
            }
        },
        {
            path: 'newBusinesses',
            name: 'newBusinesses',
            component: resolve => require(['./newBusinesses.vue'], resolve),
            meta: {
                title: '平台新商家须知',
            }
        },
        {
            path: 'patternPayment',
            name: 'patternPayment',
            component: resolve => require(['./patternPayment.vue'], resolve),
            meta: {
                title: '平台支付方式',
            }
        },
        {
            path: 'platformIntroduction',
            name: 'platformIntroduction',
            component: resolve => require(['./platformIntroduction.vue'], resolve),
            meta: {
                title: '平台基本介绍',
            }
        },
        {
            path: 'salesReturn',
            name: 'salesReturn',
            component: resolve => require(['./salesReturn.vue'], resolve),
            meta: {
                title: '平台退款退货流程',
            }
        },
        {
            path: 'Service',
            name: 'Service',
            component: resolve => require(['./Service.vue'], resolve),
            meta: {
                title: '平台售后服务政策',
            }
        },

        {
            path: 'supportProcess',
            name: 'supportProcess',
            component: resolve => require(['./supportProcess.vue'], resolve),
            meta: {
                title: '平台公益帮扶流程',
            }
        },
        
    ]

}