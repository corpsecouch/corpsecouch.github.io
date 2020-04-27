import Vue from 'vue';
import router from './router';
import VueAnalytics from 'vue-analytics';

// google analytics
// https://medium.com/dailyjs/tips-tricks-for-vue-analytics-87a9d2838915

Vue.config.productionTip =  false;
const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: 'UA-318678-4',
  router,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});
