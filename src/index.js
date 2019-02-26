import _ from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from 'pages/Index';
import FourOhFour from 'pages/FourOhFour';
import VeeValidate from 'vee-validate';

// plugins
Vue.use(VueRouter);
Vue.use(VeeValidate);

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
