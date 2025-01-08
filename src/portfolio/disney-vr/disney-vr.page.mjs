import { hostname } from '../../../globals.mjs'

const route = '/portfolio/disney-vr/'

export default {
  name: 'projectVR',
    filename: 'portfolio/disney-vr/index.html',
    entry: '/src/portfolio/disney-vr/disney-vr.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Filmmaking for Virtual Reality'
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