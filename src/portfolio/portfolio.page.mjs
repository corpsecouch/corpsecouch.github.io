import { hostname } from '../../globals.mjs'

const route = '/portfolio/'

export default {
  name: 'portfolio',
  filename: 'portfolio/index.html',
  entry: '/src/portfolio/index.js',
  sitemap: {
      route: route,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date()
  },
  data: {
    title: 'Portfolio'
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