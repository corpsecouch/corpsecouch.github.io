import { hostname } from '../../../globals.mjs'

const route = '/portfolio/amazon-alexa-cortana/'

export default {
  name: 'projectAlexaCortana',
    filename: 'portfolio/amazon-alexa-cortana/index.html',
    entry: '/src/portfolio/amazon-alexa-cortana/amazon-alexa-cortana.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Alexa + Cortana'
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