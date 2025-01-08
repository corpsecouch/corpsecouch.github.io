import { hostname } from '../../globals.mjs'

const route = '/press/'

export default {
    name: 'press',
    filename: 'press/index.html',
    entry: '/src/press/press.js',
    sitemap: {
        route: route,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Press'
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