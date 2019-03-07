import _ from 'lodash';
import Vue from 'vue';


// *** plugins *** //

// view routing
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// form validation
/*import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);*/

// google analytics
import VueAnalytics from 'vue-analytics';
Vue.use(VueAnalytics, {
  id: 'UA-318678-4'
});

// modal
/*import VModal from 'vue-js-modal';
Vue.use(VModal);*/

// scrollTo
/*import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);*/


// *** pages *** //
import Index from 'pages/Index';
import FourOhFour from 'pages/FourOhFour';
/*import DisneyDesignSystem from 'pages/disney/DesignSystem';
import DisneyGreenlight from 'pages/disney/Greenlight';
import DisneyInnovationProgram from 'pages/disney/InnovationProgram';
import AlexaCortana from 'pages/amazon/AlexaCortana';
import AlexaPersonalSkills from 'pages/amazon/AlexaPersonalSkills';*/
const routes = [
  { path: '/', name:'index', component: Index },
  /*{ path: '/disney/design-system', name:'disneydesignsystem', component: DisneyDesignSystem },
  { path: '/disney/greenlight', name:'disneygreenlight', component: DisneyGreenlight },
  { path: '/disney/innovation-program', name:'disneyinnovationprogram', component: DisneyInnovationProgram },
  { path: '/amazon/alexa-cortana', name:'alexacortana', component: AlexaCortana },
  { path: '/amazon/alexa-personal-skills', name:'alexapersonalskills', component: AlexaPersonalSkills },*/

  { path: '/404', component: FourOhFour },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  //mode: 'history',
  routes: routes/*,
  scrollBehavior (to, from, savedPosition) {
    console.log('scrollBehavior');
    console.log('to:', to);
    console.log('from:', from);
    console.log('savedPosition:', savedPosition);
    if(savedPosition) {
      return savedPosition;
    }
    else if (to.hash) {
        return { selector: to.hash }
    }
    else {
        return { x: 0, y: 0 }
    }
  }*/
})

new Vue({
  el: '#app',
  router
});
