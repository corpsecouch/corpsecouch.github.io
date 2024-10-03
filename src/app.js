import _ from 'lodash';
import { createApp } from 'vue';
const app = createApp({});


const isProd = process.env.NODE_ENV === 'production';
//const isProd = process.env.NODE_ENV === 'dev';


/* ******************** */
/* *** router setup *** */
/* ******************** */

const routes = [
  { name: 'index',                        component: () => import('pages/Index') },
  { name: 'press',                        component: () => import('pages/Press') },
  { name: 'portfolio',                    component: () => import('pages/Portfolio') },
  { name: 'rocketironbear',               component: () => import('pages/portfolio/rocket/ironbear/ironbear') },
  { name: 'alexacortana',                 component: () => import('pages/portfolio/alexa/alexa-cortana/alexa-cortana') },
  { name: 'alexaprofile',                 component: () => import('pages/portfolio/alexa/profile/profile') },
  { name: 'disneydesignsystem',           component: () => import('pages/portfolio/disney/design-system/design-system') },
  { name: 'disneygreenlight',             component: () => import('pages/portfolio/disney/greenlight/greenlight') },
  { name: 'disneyinnovationprogram',      component: () => import('pages/portfolio/disney/incubator/incubator') },
  { name: 'disneymovieslate',             component: () => import('pages/portfolio/disney/slate/slate') },
  { name: 'disneyvr',                     component: () => import('pages/portfolio/disney/vr/vr') },
  { name: 'pbgenesis',                    component: () => import('pages/portfolio/phenomblue/genesis/genesis') },
  { name: 'pbdinodig',                    component: () => import('pages/portfolio/phenomblue/dino-dig/dino-dig') },
  { name: 'pbmovielotto',                 component: () => import('pages/portfolio/phenomblue/movie-lotto/movie-lotto') },
  { name: 'pbfantasticfutureme',          component: () => import('pages/portfolio/phenomblue/fantastic-future-me/fantastic-future-me') },
  { name: 'pbmoppetmashup',               component: () => import('pages/portfolio/phenomblue/moppet-mashup/moppet-mashup') },
  { name: 'pbwildkingdom',                component: () => import('pages/portfolio/phenomblue/wild-kingdom/wild-kingdom') },
  { name: 'pbpage',                       component: () => import('pages/portfolio/phenomblue/page/page') },
  //{ name: 'pbtums',                       component: () => import('pages/portfolio/phenomblue/tums/tums') },
  { name: '404',                          component: () => import('pages/FourOhFour') },
  { path: '/:pathMatch(.*)*',             redirect: '/404' }
]

import routesData from 'data/routes';
_.merge(routes, routesData);

//import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: routes,
  //history: createWebHistory(),
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { left: 0, top: 0 }
  }
});

// dynamically changes the title of each page based on it's route
router.beforeEach((to, from) => {
  document.title = to.meta.title;
})

app.use(router);



/* ****************************** */
/* *** google analytics setup *** */
/* ****************************** */

import VueGtag from 'vue-gtag';

if(isProd) app.use(VueGtag, { config: { id: 'G-G24FHEZ8YC', } }, router);



/* ********************* */
/* *** mount the app *** */
/* ********************* */

app.mount('#app');
