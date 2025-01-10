import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-genesis/'

export default {
  name: 'projectGenesis',
    filename: 'portfolio/phenomblue-genesis/index.html',
    entry: '/src/portfolio/phenomblue-genesis/phenomblue-genesis.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Phenomblue Genesis',
            description: '',
            player: 'https://www.youtube.com/embed/JkaGrZDk_RY'
          }
        ]
    },
    data: {
      title: 'Phenomblue Genesis'
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