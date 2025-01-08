import { hostname } from '../../../globals.mjs'

const route = '/portfolio/rocket-ironbear/'

export default {
  name: 'projectIronbear',
    filename: 'portfolio/rocket-ironbear/index.html',
    entry: '/src/portfolio/rocket-ironbear/rocket-ironbear.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Conversational Lead Funnel'
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