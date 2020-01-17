import Template from '@/sellerTemplate';
export default {
    path: '/sellerCenter',
    component: Template,
    meta: {
        title: '流程'
    },
    children: [
        {
            path: 'sellercenter',
            name: 'sellerCenter_sellercenter',
            component: resolve => require(['./sellercenter.vue'], resolve),
            meta: {
                title: '村/户店商认证',
            }
        },
        {
            path: 'transactionManage',
            name: 'sellerCenter_transactionManage',
            component: resolve => require(['./transactionManage.vue'], resolve),
            meta: {
                title: '交易管理',
            }
        },
        {
            path: 'logisticsManage',
            name: 'sellerCenter_logisticsManage',
            component: resolve => require(['./logisticsManage.vue'], resolve),
            meta: {
                title: '物流管理',
            }
        },
        {
            path: 'templateOfFreight',
            name: 'sellerCenter_templateOfFreight',
            component: resolve => require(['./templateOfFreight.vue'], resolve),
            meta: {
                title: '运费模板',
            }
        },
        {
            path: 'freightCompile',
            name: 'sellerCenter_freightCompile',
            component: resolve => require(['./freightCompile.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'productsManage',
            name: 'sellerCenter_productsManage',
            component: resolve => require(['./productsManage.vue'], resolve),
            meta: {
                title: '商品管理',
            }
        },
        // 商品管理子路由
        {
            path: 'addProducts',
            name: 'sellerCenter_addProducts',
            component: resolve => require(['./addProducts.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'addSpecification',
            name: 'sellerCenter_addSpecification',
            component: resolve => require(['./addSpecification.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'customerService',
            name: 'sellerCenter_customerService',
            component: resolve => require(['./customerService.vue'], resolve),
            meta: {
                title: '客户服务',
            }
        },
        // {
        //     path: 'distributionManage',
        //     name: 'sellerCenter_distributionManage',
        //     component: resolve => require(['./distributionManage.vue'], resolve),
        //     meta: {
        //         title: '分销管理',
        //     }
        // },
        {
            path: 'eveManagement',
            name: 'sellerCenter_eveManagement',
            component: resolve => require(['./eveManagement.vue'], resolve),
            meta: {
                title: '评价管理',
            }
        },
        {
            path: 'dataStatistics',
            name: 'sellerCenter_dataStatistics',
            component: resolve => require(['./dataStatistics.vue'], resolve),
            meta: {
                title: '数据统计',
            }
        },
        {
            path: 'announCement',
            name: 'sellerCenter_announCement',
            component: resolve => require(['./announCement.vue'], resolve),
            meta: {
                title: '公告管理',
            }
        },
        {
            path: 'advertisementManage',
            name: 'sellerCenter_advertisementManage',
            component: resolve => require(['./advertisementManage.vue'], resolve),
            meta: {
                title: '广告图管理',
            }
        },
        {
            path: 'addNewEMS',
            name: 'sellerCenter_addNewEMS',
            component: resolve => require(['./addNewEMS.vue'], resolve),
            meta: {
                title: '客户号管理',
            }
        },
        
        
    ]

}
