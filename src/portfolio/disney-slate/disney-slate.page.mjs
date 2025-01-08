import { hostname } from '../../../globals.mjs'

const route = '/portfolio/disney-slate/'

export default {
  name: 'projectSlate',
    filename: 'portfolio/disney-slate/index.html',
    entry: '/src/portfolio/disney-slate/disney-slate.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Disney Movie Slate'
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