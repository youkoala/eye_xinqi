import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import welcome from '@/pages/welcome'
import websocket from '@/pages/websocket'
//const ws = () => import('@/pages/websocket')

Vue.use(Router)
export default new Router({
  mode: 'abstract',
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/websocket',
      component: websocket
    }
  ]
})
