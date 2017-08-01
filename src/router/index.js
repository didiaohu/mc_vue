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
      path: '/demo9',
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
    }
  ]
})
