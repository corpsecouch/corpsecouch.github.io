import _ from 'lodash';
import Vue from 'vue';

// plugins
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-318678-4'
});

import Index from 'pages/Index';
import FourOhFour from 'pages/FourOhFour';
const routes = [
  { path: '/', component: Index },
  { path: '/404', component: FourOhFour },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router
});
