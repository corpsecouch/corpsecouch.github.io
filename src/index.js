import _ from 'lodash';
import Vue from 'vue';
import Index from 'components/Index';
import VueResource from 'vue-resource'
Vue.use(VueResource);

new Vue({
  el: '#app',
  components: {
    Index
  }
});
