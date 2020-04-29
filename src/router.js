import Vue from 'vue';
import VueRouter from 'vue-router';
import FourOhFour from 'pages/FourOhFour';
import Index from 'pages/index/Index';
import Portfolio from 'pages/portfolio/Portfolio';
import About from 'pages/About';
import Contact from 'pages/Contact';

import AlexaCortana from 'pages/portfolio/amazon/AlexaCortana';

import DisneyDesignSystem from 'pages/portfolio/disney/DesignSystem';
import DisneyGreenlight from 'pages/portfolio/disney/Greenlight';
import DisneyInnovationProgram from 'pages/portfolio/disney/InnovationProgram';
import DisneyMovieSlate from 'pages/portfolio/disney/Slate';
import DisneyVR from 'pages/portfolio/disney/vr';

import PhenomblueGenesis from 'pages/portfolio/phenomblue/Genesis';
import PhenomblueDinoDig from 'pages/portfolio/phenomblue/DinoDig';
import PhenomblueMovieLotto from 'pages/portfolio/phenomblue/MovieLotto';
import PhenomblueFantasticFutureMe from 'pages/portfolio/phenomblue/FantasticFutureMe';
import PhenomblueMoppetMashup from 'pages/portfolio/phenomblue/MoppetMashup';
import PhenomblueTums from 'pages/portfolio/phenomblue/Tums';
import PhenombluePage from 'pages/portfolio/phenomblue/Page';
import PhenomblueMyWildKingdom from 'pages/portfolio/phenomblue/MyWildKingdom';

//https://github.com/vihanb/babel-plugin-wildcard
//import * from 'pages/portfolio/amazon/*'; // this doesn't work

// scrollTo
/*import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo);*/

Vue.use(VueRouter);

const routes = [
  { path: '/',    name: 'index',  component: Index },
  { path: '/about',    name: 'about',  component: About },
  { path: '/portfolio', name: 'work',  component: Portfolio},
  { path: '/contact', name: 'contact',  component: Contact},

  { path: '/portfolio/amazon/alexa-cortana',            name:'alexacortana',                  component: AlexaCortana },

  { path: '/portfolio/disney/design-system',            name:'disneydesignsystem',            component: DisneyDesignSystem },
  { path: '/portfolio/disney/greenlight',               name:'disneygreenlight',              component: DisneyGreenlight },
  { path: '/portfolio/disney/innovation-program',       name:'disneyinnovationprogram',       component: DisneyInnovationProgram },
  { path: '/portfolio/disney/movie-slate',              name:'disneymovieslate',              component: DisneyMovieSlate },
  { path: '/portfolio/disney/vr',                       name:'disneyvr',                      component: DisneyVR },

  { path: '/portfolio/phenomblue/genesis',              name:'phenombluegenesis',             component: PhenomblueGenesis },
  { path: '/portfolio/phenomblue/dino-dig',             name:'phenombluedinodig',             component: PhenomblueDinoDig },
  { path: '/portfolio/phenomblue/movie-lotto',          name:'phenombluemovielotto',          component: PhenomblueMovieLotto },
  { path: '/portfolio/phenomblue/fantastic-future-me',  name:'phenombluefantasticfutureme',   component: PhenomblueFantasticFutureMe },
  { path: '/portfolio/phenomblue/moppet-mashup',        name:'phenombluemoppetmashup',        component: PhenomblueMoppetMashup },
  { path: '/portfolio/phenomblue/my-wild-kingdom',      name:'phenombluemywildkingdom',       component: PhenomblueMyWildKingdom },
  { path: '/portfolio/phenomblue/page',                 name:'phenombluepage',                component: PhenombluePage },
  { path: '/portfolio/phenomblue/tums',                 name:'phenombluetums',                component: PhenomblueTums },

  { path: '/404', name: '404',    component: FourOhFour },
  { path: '*',    redirect: '/404' }
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
      return savedPosition; // scroll to the position
    }
    else if (to.hash) {
        return { selector: to.hash }; // scroll to the selector
    }
    else {
        return { x: 0, y: 0 };  // scroll to the top
    }
  }*/
});

export default router;
