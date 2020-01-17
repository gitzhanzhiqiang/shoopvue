import Template from '@/template';
export default {
    path: '/generalize',
    component: Template,
    meta: {
        title: '订单'
    },
    children: [
        {
            path: 'beltandroad',
            name: 'beltandroad',
            component: resolve => require(['./beltandroad.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'counseling',
            name: 'counseling',
            component: resolve => require(['./counseling.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'foundingTraining',
            name: 'foundingTraining',
            component: resolve => require(['./foundingTraining.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'newsContent',
            name: 'newsContent',
            component: resolve => require(['./newsContent.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'newsInformation',
            name: 'newsInformation',
            component: resolve => require(['./newsInformation.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'newsList',
            name: 'newsList',
            component: resolve => require(['./newsList.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'ruralDoubleGen',
            name: 'ruralDoubleGen',
            component: resolve => require(['./ruralDoubleGen.vue'], resolve),
            meta: {
                title: '',
            }
        },
        {
            path: 'ruralSpecialty',
            name: 'ruralSpecialty',
            component: resolve => require(['./ruralSpecialty.vue'], resolve),
            meta: {
                title: '乡村特产',
            }
        },
        {
            path: 'ruralFood',
            name: 'ruralFood',
            component: resolve => require(['./ruralFood.vue'], resolve),
            meta: {
                title: '乡村美食',
            }
        },
        {
            path: 'ruralTourism',
            name: 'ruralTourism',
            component: resolve => require(['./ruralTourism.vue'], resolve),
            meta: {
                title: '乡村文旅',
            }
        },
        
        
        
    ]

}
