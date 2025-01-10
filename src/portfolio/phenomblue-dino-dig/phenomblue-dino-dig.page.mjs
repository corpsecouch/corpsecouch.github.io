import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-dino-dig/'

export default {
  name: 'projectDinoDig',
    filename: 'portfolio/phenomblue-dino-dig/index.html',
    entry: '/src/portfolio/phenomblue-dino-dig/phenomblue-dino-dig.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Operation: Dino Dig',
            description: '',
            player: 'https://www.youtube.com/embed/UGvu78DYris'
          }
        ]
    },
    data: {
      title: 'Operation: Dino Dig'
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