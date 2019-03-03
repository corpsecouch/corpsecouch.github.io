import _ from 'lodash';
import Vue from 'vue';


// *** plugins *** //

// view routing
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// form validation
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// google analytics
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
  id: 'UA-318678-4'
});

// modal
import VModal from 'vue-js-modal';
Vue.use(VModal);


// *** pages *** //
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
