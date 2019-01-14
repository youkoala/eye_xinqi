import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//import ws from '@/web/websocket'
import home from '@/web/home'
const ws = () => import('@/web/websocket')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ws
    },
    {
      path: '/websocket',
      component: ws
    },
    {
      path: '/home',
      component: home
    }
  ]
})
