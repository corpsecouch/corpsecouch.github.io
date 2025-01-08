import { hostname } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-page/'

export default {
  name: 'projectPage',
    filename: 'portfolio/phenomblue-page/index.html',
    entry: '/src/portfolio/phenomblue-page/phenomblue-page.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Page'
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