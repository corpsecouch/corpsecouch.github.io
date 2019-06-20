import _ from 'lodash';
import Vue from 'vue';

// *** plugins *** //

// view routing
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// form validation
/*import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);*/

// modal
/*import VModal from 'vue-js-modal';
Vue.use(VModal);*/

// scrollTo
/*import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);*/


// *** pages *** //
import Index from 'pages/index/Index';
import Contact from 'pages/contact/Contact';
import FourOhFour from 'pages/FourOhFour';
import Portfolio from 'pages/portfolio/Portfolio';
import DisneyDesignSystem from 'pages/portfolio/disney/design-system/DesignSystem';
import DisneyGreenlight from 'pages/portfolio/disney/greenlight/Greenlight';
import DisneyInnovationProgram from 'pages/portfolio/disney/innovation-program/InnovationProgram';
import DisneyMovieSlate from 'pages/portfolio/disney/slate/Slate';
import DisneyVR from 'pages/portfolio/disney/vr/vr';
import AlexaCortana from 'pages/portfolio/amazon/alexa-cortana/AlexaCortana';
import AlexaPersonalSkills from 'pages/portfolio/amazon/alexa-personal-skills/AlexaPersonalSkills';
import PhenomblueGenesis from 'pages/portfolio/phenomblue/genesis/Genesis';
import PhenomblueDinoDig from 'pages/portfolio/phenomblue/dino-dig/DinoDig';
import PhenomblueMovieLotto from 'pages/portfolio/phenomblue/movie-lotto/MovieLotto';
import PhenomblueFantasticFutureMe from 'pages/portfolio/phenomblue/fantastic-future-me/FantasticFutureMe';
//import AceAnalyticsDashboard from 'pages/portfolio/ace-metrix/analytics-dashboard/AnalyticsDashboard';

const routes = [
  { path: '/',                                            name: 'index',                    component: Index },
  { path: '/#about', name:'about', component: Index },
  { path: '/contact', name:'contact', component: Contact },

  { path: '/portfolio',                                 name:'portfolio',                     component: Portfolio },
  { path: '/portfolio/disney/design-system',            name:'disneydesignsystem',            component: DisneyDesignSystem },
  { path: '/portfolio/disney/greenlight',               name:'disneygreenlight',              component: DisneyGreenlight },
  { path: '/portfolio/disney/innovation-program',       name:'disneyinnovationprogram',       component: DisneyInnovationProgram },
  { path: '/portfolio/disney/movie-slate',              name:'disneymovieslate',              component: DisneyMovieSlate },
  { path: '/portfolio/disney/vr',                       name:'disneyvr',                      component: DisneyVR },
  { path: '/portfolio/amazon/alexa-cortana',            name:'alexacortana',                  component: AlexaCortana },
  { path: '/portfolio/amazon/alexa-personal-skills',    name:'alexapersonalskills',           component: AlexaPersonalSkills },
  { path: '/portfolio/phenomblue/genesis',              name:'phenombluegenesis',             component: PhenomblueGenesis },
  { path: '/portfolio/phenomblue/dino-dig',             name:'phenombluedinodig',             component: PhenomblueDinoDig },
  { path: '/portfolio/phenomblue/movie-lotto',          name:'phenombluemovielotto',          component: PhenomblueMovieLotto },
  { path: '/portfolio/phenomblue/fantastic-future-me',  name:'phenombluefantasticfutureme',   component: PhenomblueFantasticFutureMe },
//  { path: '/portfolio/ace-analytics-dashboard',         name:'aceanalyticsdashbaord',   component: AceAnalyticsDashboard },

  { path: '/404', component: FourOhFour },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  //mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    console.log('scrollBehavior');
    console.log('to:', to);
    console.log('from:', from);
    console.log('savedPosition:', savedPosition);
    if(savedPosition) {
      return savedPosition; // scroll to the position
    }
    else if (to.hash) {
        return { selector: to.hash }; // scroll to the selector
    }
    else {
        return { x: 0, y: 0 };  // scroll to the top
    }
  }
});

// google analytics
// https://medium.com/dailyjs/tips-tricks-for-vue-analytics-87a9d2838915
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip =  true;
/*const isProd = */process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: 'UA-318678-4',
  router/*,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: isProd,
    sendHitTask: isProd
  }*/
});

new Vue({
  el: '#app',
  router
});
