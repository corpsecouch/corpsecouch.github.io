import _ from 'lodash';
import { createApp } from 'vue';
const app = createApp({});



/* ******************** */
/* *** router setup *** */
/* ******************** */

const routes = [
  { path: '/',                                          name: 'index',                        component: () => import('pages/Index') },
  /*
  { path: '/#about',                                    name: 'about',                        component: Index },
  { path: '/#portfolio',                                name: 'portfolio',                    component: Index },
  { path: '/#contact',                                  name: 'contact',                      component: Index },
  */

  { path: '/portfolio/rocket/project-one',              name:'project-one',                   component: () => import('pages/portfolio/rocket/project-one/project-one') },
  { path: '/portfolio/rocket/project-two',              name:'project-two',                   component: () => import('pages/portfolio/rocket/project-two/project-two') },

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
  { path: '/:pathMatch(.*)*',                           redirect: '/404' }
];

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),//createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { left: 0, top: 0 }
  }
});

app.use(router);


/* ****************************** */
/* *** google analytics setup *** */
/* ****************************** */

import VueGtag from 'vue-gtag';

const isProd = process.env.NODE_ENV === 'dev'//'production';

console.log("isProd:", isProd)

app.use(VueGtag, {
  config: {
      id: 'G-G24FHEZ8YC',
  }
}, router);



/* ********************* */
/* *** mount the app *** */
/* ********************* */

app.mount('#app');
