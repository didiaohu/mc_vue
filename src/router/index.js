import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/demo1',
        name: 'demo1',
        component: require("@/pages/demo1")
    },
    {
        path: '/demo2',
        name: 'demo2',
        component: require("@/pages/demo2")
    },
    {
        path: '/demo3',
        name: 'demo3',
        component: require("@/pages/demo3")
    },
    {
        path: '/demo4',
        name: 'demo4',
        component: require("@/pages/demo4")
    },
    {
        path: '/demo5',
        name: 'demo5',
        component: require("@/pages/demo5")
    },
    {
        path: '/demo6',
        name: 'demo6',
        component: require("@/pages/demo6")
    },
    {
        path: '/demo7',
        name: 'demo7',
        component: require("@/pages/demo7")
    },
    {
        path: '/demo8',
        name: 'demo8',
        component: require("@/pages/demo8")
    },
    {
        path: '/demo9/:userId',
        name: 'demo9',
        component: require("@/pages/demo9")
    },
    {
        path: '/demo10',
        name: 'demo10',
        component: require("@/pages/demo10")
    },
    {
        path: '/demo11',
        name: 'demo11',
        component: require("@/pages/demo11")
    },
    {
        path: '/demo12',
        name: 'demo12',
        component: require("@/pages/demo12")
    },
    {
        path: '/demo13',
        name: 'demo13',
        component: require("@/pages/demo13")
    },
    {
        path: '/demo14',
        name: 'demo14',
        component: require("@/pages/demo14")
    },
    {
        path: '/demo15',
        name: 'demo15',
        component: require("@/pages/demo15")
    },
    {
        path: '/demo16',
        name: 'demo16',
        component: require("@/pages/demo16")
    },
    {
        path: '/demo17',
        name: 'demo17',
        component: require("@/pages/demo17")
    }
  ]
})
