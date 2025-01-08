import { hostname } from '../../../globals.mjs'

const route = '/portfolio/disney-incubator/'

export default {
  name: 'projectIncubator',
    filename: 'portfolio/disney-incubator/index.html',
    entry: '/src/portfolio/disney-incubator/disney-incubator.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Disney Innovation Incubator'
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