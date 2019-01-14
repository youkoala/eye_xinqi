/*global Vue*/

/* weex initialized here, please do not move this line */
import router from './router'
import App from '@/index.vue'
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

