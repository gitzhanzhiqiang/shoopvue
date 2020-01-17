import Template from '@/sellerTemplate';
export default {
    path: '/personCenter',
    component: Template,
    meta: {
        title: '用户中心'
    },
    children: [
        {
            path: 'accountInfo',
            name: 'accountInfo',
            component: resolve => require(['./accountInfo.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'addAccount',
            name: 'addAccount',
            component: resolve => require(['./addAccount.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'editContact',
            name: 'editContact',
            component: resolve => require(['./editContact.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'sellerInformation',
            name: 'sellerInformation',
            component: resolve => require(['./sellerInformation.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'SupplierInformation',
            name: 'SupplierInformation',
            component: resolve => require(['./SupplierInformation.vue'], resolve),
            meta: {
                title: '',
            }
        },
        
        
        
    ]

}
