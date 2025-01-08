import { hostname } from '../../globals.mjs'

const route = '/awards/'

export default {
    name: 'awards',
    filename: 'awards/index.html',
    entry: '/src/awards/awards.js',
    sitemap: {
        route: route,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Awards'
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