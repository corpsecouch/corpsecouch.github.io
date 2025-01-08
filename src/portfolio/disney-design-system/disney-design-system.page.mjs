import { hostname } from '../../../globals.mjs'

const route = '/portfolio/disney-design-system/'

export default {
  name: 'projectDesignSystem',
    filename: 'portfolio/disney-design-system/index.html',
    entry: '/src/portfolio/disney-design-system/disney-design-system.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Disney Enterprise Design System'
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