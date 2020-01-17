import Template from '@/sellerTemplate';
export default {
    path: '/administrative',
    component: Template,
    meta: {
        title: '订单'
    },
    children: [
        {
            path: 'administrativeagencies',
            name: 'administrativeagencies',
            component: resolve => require(['./administrativeagencies.vue'], resolve),
            meta: {
                title: '村/户店商认证',
            }
        },
        {
            path: 'villagedata',
            name: 'villagedata',
            component: resolve => require(['./villagedata.vue'], resolve),
            meta: {
                title: '村/户店商认证',
            }
        },
        
        
        
    ]

}
