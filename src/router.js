import Vue from 'vue';
import VueRouter from 'vue-router';
import FourOhFour from 'pages/FourOhFour';
import Index from 'pages/index/Index';
import Portfolio from 'pages/portfolio/Portfolio';
import About from 'pages/About';
import Contact from 'pages/Contact';

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
