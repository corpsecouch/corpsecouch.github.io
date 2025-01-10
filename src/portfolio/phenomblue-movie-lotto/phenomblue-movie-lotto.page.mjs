import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-movie-lotto/'

export default {
  name: 'projectMovieLotto',
    filename: 'portfolio/phenomblue-movie-lotto/index.html',
    entry: '/src/portfolio/phenomblue-movie-lotto/phenomblue-movie-lotto.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Movie Lotto',
            description: '',
            player: 'https://www.youtube.com/embed/_l6rD1AM4qo'
          }
        ]
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