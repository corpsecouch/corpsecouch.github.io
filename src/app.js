import _ from 'lodash';
import Vue from 'vue';
import router from './router';
import analytics from './analytics';

// *** plugins *** //

// calendly integration
/*import VueCalendly from 'vue-calendly';
Vue.use(VueCalendly);*/

// form validation
/*import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);*/

// modal
/*import VModal from 'vue-js-modal';
Vue.use(VModal);*/

new Vue({
  router
}).$mount('#app');
