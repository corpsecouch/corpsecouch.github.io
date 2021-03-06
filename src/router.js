import Vue from 'vue';
import VueRouter from 'vue-router';

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
  { path: '/',                                          name: 'index',                        component: () => import('pages/Index') },
  /*
  { path: '/#about',                                    name: 'about',                        component: Index },
  { path: '/#portfolio',                                name: 'portfolio',                    component: Index },
  { path: '/#contact',                                  name: 'contact',                      component: Index },
  */
  { path: '/portfolio/amazon/alexa-cortana',            name:'alexacortana',                  component: () => import('pages/portfolio/alexa/alexa-cortana/alexa-cortana') },
  { path: '/portfolio/amazon/presence',                 name:'alexapresence',                 component: () => import('pages/portfolio/alexa/presence/presence') },
  { path: '/portfolio/amazon/personalized-skills',      name:'alexapersonalizedskills',       component: () => import('pages/portfolio/alexa/personalized-skills/personalized-skills') },
  { path: '/portfolio/amazon/profile',                  name:'alexaprofile',                  component: () => import('pages/portfolio/alexa/profile/profile') },
  { path: '/portfolio/amazon/voice-settings',           name:'alexavoicesettings',            component: () => import('pages/portfolio/alexa/voice-settings/voice-settings') },

  { path: '/portfolio/disney/design-system',            name:'disneydesignsystem',            component: () => import('pages/portfolio/disney/design-system/design-system') },
  { path: '/portfolio/disney/greenlight',               name:'disneygreenlight',              component: () => import('pages/portfolio/disney/greenlight/greenlight') },
  { path: '/portfolio/disney/innovation-program',       name:'disneyinnovationprogram',       component: () => import('pages/portfolio/disney/incubator/incubator') },
  { path: '/portfolio/disney/movie-slate',              name:'disneymovieslate',              component: () => import('pages/portfolio/disney/slate/slate') },
  { path: '/portfolio/disney/vr',                       name:'disneyvr',                      component: () => import('pages/portfolio/disney/vr/vr') },

  { path: '/portfolio/phenomblue/genesis',              name:'pbgenesis',                     component: () => import('pages/portfolio/phenomblue/genesis/genesis') },
  { path: '/portfolio/phenomblue/dino-dig',             name:'pbdinodig',                     component: () => import('pages/portfolio/phenomblue/dino-dig/dino-dig') },
  { path: '/portfolio/phenomblue/movie-lotto',          name:'pbmovielotto',                  component: () => import('pages/portfolio/phenomblue/movie-lotto/movie-lotto') },
  { path: '/portfolio/phenomblue/fantastic-future-me',  name:'pbfantasticfutureme',           component: () => import('pages/portfolio/phenomblue/fantastic-future-me/fantastic-future-me') },
  { path: '/portfolio/phenomblue/moppet-mashup',        name:'pbmoppetmashup',                component: () => import('pages/portfolio/phenomblue/moppet-mashup/moppet-mashup') },
  { path: '/portfolio/phenomblue/my-wild-kingdom',      name:'pbwildkingdom',                 component: () => import('pages/portfolio/phenomblue/wild-kingdom/wild-kingdom') },
  { path: '/portfolio/phenomblue/page',                 name:'pbpage',                        component: () => import('pages/portfolio/phenomblue/page/page') },
  { path: '/portfolio/phenomblue/tums',                 name:'pbtums',                        component: () => import('pages/portfolio/phenomblue/tums/tums') },

  { path: '/404',                                       name: '404',                          component: () => import('pages/FourOhFour') },
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
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
