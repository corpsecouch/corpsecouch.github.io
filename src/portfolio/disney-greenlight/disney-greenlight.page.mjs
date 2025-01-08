import { hostname } from '../../../globals.mjs'

const route = '/portfolio/disney-greenlight/'

export default {
  name: 'projectGreenlight',
    filename: 'portfolio/disney-greenlight/index.html',
    entry: '/src/portfolio/disney-greenlight/disney-greenlight.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Disney Movie Greenlight'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + route
        }
      }
    ]
}