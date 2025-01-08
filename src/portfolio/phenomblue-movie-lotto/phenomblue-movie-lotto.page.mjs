import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectMovieLotto',
    filename: 'portfolio/phenomblue-movie-lotto/index.html',
    entry: '/src/portfolio/phenomblue-movie-lotto/phenomblue-movie-lotto.js',
    data: {
      title: 'Movie Lotto'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-movie-lotto/'
        }
      }
    ]
}