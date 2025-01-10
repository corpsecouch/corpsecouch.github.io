import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-fantastic-future-me/'

export default {
  name: 'projectFantasticFutureMe',
    filename: 'portfolio/phenomblue-fantastic-future-me/index.html',
    entry: '/src/portfolio/phenomblue-fantastic-future-me/phenomblue-fantastic-future-me.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Fantastic Future Me',
            description: '',
            player: 'https://www.youtube.com/embed/SuEXRBP5ihY'
          }
        ]
    },
    data: {
      title: 'Fantastic Future Me'
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