import { hostname } from '../../../globals.mjs'

const route = '/portfolio/amazon-profile/'

export default {
  name: 'projectProfile',
    filename: 'portfolio/amazon-profile/index.html',
    entry: '/src/portfolio/amazon-profile/amazon-profile.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Alexa Profile'
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