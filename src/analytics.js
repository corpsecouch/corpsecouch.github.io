//import { ref } from 'vue';
import router from './router';
import VueGtag from 'vue-gtag';

// google analytics
// https://medium.com/dailyjs/tips-tricks-for-vue-analytics-87a9d2838915

//ref.config.productionTip =  false;
const isProd = process.env.NODE_ENV === 'production';

app.use(VueGtag, {
  //id: 'UA-318678-4',
  id: '364084982',
  router,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});
