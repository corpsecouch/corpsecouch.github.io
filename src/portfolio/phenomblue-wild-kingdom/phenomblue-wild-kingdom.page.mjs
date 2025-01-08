import { hostname } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-wild-kingdom/'

export default {
  name: 'projectWildKingdom',
    filename: 'portfolio/phenomblue-wild-kingdom/index.html',
    entry: '/src/portfolio/phenomblue-wild-kingdom/phenomblue-wild-kingdom.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'My Wild Kingdom'
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