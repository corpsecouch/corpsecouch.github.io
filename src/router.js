import Vue from 'vue';
import VueRouter from 'vue-router';
import FourOhFour from 'pages/FourOhFour';
import Index from 'pages/index/Index';

const AlexaCortana = () => import(/* webpackChunkName: "alexa-projects" */ 'pages/portfolio/alexa/alexa-cortana/alexa-cortana')
const AlexaPresence = () => import(/* webpackChunkName: "alexa-projects" */ 'pages/portfolio/alexa/presence/presence')
const AlexaPersonalizedSkills = () => import(/* webpackChunkName: "alexa-projects" */ 'pages/portfolio/alexa/personalized-skills/personalized-skills')
const AlexaProfile = () => import(/* webpackChunkName: "alexa-projects" */ 'pages/portfolio/alexa/profile/profile')
const AlexaVoiceSettings = () => import(/* webpackChunkName: "alexa-projects" */ 'pages/portfolio/alexa/voice-settings/voice-settings')

const DisneyDesignSystem = () => import(/* webpackChunkName: "disney-projects" */ 'pages/portfolio/disney/design-system/design-system')
const DisneyGreenlight = () => import(/* webpackChunkName: "disney-projects" */ 'pages/portfolio/disney/greenlight/greenlight')
const DisneyInnovationProgram = () => import(/* webpackChunkName: "disney-projects" */ 'pages/portfolio/disney/incubator/incubator')
const DisneyMovieSlate = () => import(/* webpackChunkName: "disney-projects" */ 'pages/portfolio/disney/slate/slate')
const DisneyVR = () => import(/* webpackChunkName: "disney-projects" */ 'pages/portfolio/disney/vr/vr')

const PhenomblueGenesis = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/genesis/genesis')
const PhenomblueDinoDig = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/dino-dig/dino-dig')
const PhenomblueMovieLotto = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/movie-lotto/movie-lotto')
const PhenomblueFantasticFutureMe = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/fantastic-future-me/fantastic-future-me')
const PhenomblueMoppetMashup = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/moppet-mashup/moppet-mashup')
const PhenomblueTums = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/tums/tums')
const PhenombluePage = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/page/page')
const PhenomblueMyWildKingdom = () => import(/* webpackChunkName: "pb-projects" */ 'pages/portfolio/phenomblue/wild-kingdom/wild-kingdom')

//https://github.com/vihanb/babel-plugin-wildcard
//import * from 'pages/portfolio/amazon/*'; // this doesn't work


//console.log(MyPlugin.routes);

/*_.forEach(MyPlugin.routes, function(v, k) {
  console.log(v.componentPath);
  //v.component = import(v.componentPath)
  import(v.componentPath)
    .then(function(value) {
      console.log('then: ' + v.componentPath);
      console.log(value);
    })
    .catch(function(reason) {
      console.log('catch: ' + v.componentPath);
      console.log(reason)
    });
});*/

//console.log(MyPlugin.routes);


Vue.use(VueRouter);

const routes = [
  { path: '/',            name: 'index',      component: Index },
  /*{ path: '/#about',      name: 'about',      component: Index },
  { path: '/#portfolio',  name: 'portfolio',  component: Index },
  { path: '/#contact',    name: 'contact',    component: Index },*/

  { path: '/portfolio/amazon/alexa-cortana',            name:'alexacortana',                  component: AlexaCortana },
  { path: '/portfolio/amazon/presence',                 name:'alexapresence',                 component: AlexaPresence },
  { path: '/portfolio/amazon/personalized-skills',      name:'alexapersonalizedskills',       component: AlexaPersonalizedSkills },
  { path: '/portfolio/amazon/profile',                  name:'alexaprofile',                  component: AlexaProfile },
  { path: '/portfolio/amazon/voice-settings',           name:'alexavoicesettings',            component: AlexaVoiceSettings },

  { path: '/portfolio/disney/design-system',            name:'disneydesignsystem',            component: DisneyDesignSystem },
  { path: '/portfolio/disney/greenlight',               name:'disneygreenlight',              component: DisneyGreenlight },
  { path: '/portfolio/disney/innovation-program',       name:'disneyinnovationprogram',       component: DisneyInnovationProgram },
  { path: '/portfolio/disney/movie-slate',              name:'disneymovieslate',              component: DisneyMovieSlate },
  { path: '/portfolio/disney/vr',                       name:'disneyvr',                      component: DisneyVR },

  { path: '/portfolio/phenomblue/genesis',              name:'pbgenesis',             component: PhenomblueGenesis },
  { path: '/portfolio/phenomblue/dino-dig',             name:'pbdinodig',             component: PhenomblueDinoDig },
  { path: '/portfolio/phenomblue/movie-lotto',          name:'pbmovielotto',          component: PhenomblueMovieLotto },
  { path: '/portfolio/phenomblue/fantastic-future-me',  name:'pbfantasticfutureme',   component: PhenomblueFantasticFutureMe },
  { path: '/portfolio/phenomblue/moppet-mashup',        name:'pbmoppetmashup',        component: PhenomblueMoppetMashup },
  { path: '/portfolio/phenomblue/my-wild-kingdom',      name:'pbwildkingdom',         component: PhenomblueMyWildKingdom },
  { path: '/portfolio/phenomblue/page',                 name:'pbpage',                component: PhenombluePage },
  { path: '/portfolio/phenomblue/tums',                 name:'pbtums',                component: PhenomblueTums },

  { path: '/404', name: '404',    component: FourOhFour },
  { path: '*',    redirect: '/404' }
];


/* ************************* *
 * Dynamic portfolio routing *
 * ************************* */

/*import portfolioData from 'data/portfolio';
import MyPlugin from './myPlugin';

Vue.use(MyPlugin, {
  data: portfolioData,
  routePath: '/work'
});

MyPlugin.routes.forEach(e => {
  import(`pages/portfolio/${e.component}.vue`)
    .then(module => {
      //console.log(e, module);
      let o = {
        path: e.path,
        component: module
      };
      //console.log(e);
      routes.push(o);

      //console.log(routes);
    })
    .catch(reason => {
      console.log('reason:' + reason);
    });
});*/


const router = new VueRouter({
  //mode: 'history',
  routes: routes,

  scrollBehavior (to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
