import { hostname } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-movie-lotto/'

export default {
  name: 'projectMovieLotto',
    filename: 'portfolio/phenomblue-movie-lotto/index.html',
    entry: '/src/portfolio/phenomblue-movie-lotto/phenomblue-movie-lotto.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date()
    },
    data: {
      title: 'Movie Lotto'
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