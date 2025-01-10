import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-moppet-mashup/'

export default {
  name: 'projectMoppetMashup',
    filename: 'portfolio/phenomblue-moppet-mashup/index.html',
    entry: '/src/portfolio/phenomblue-moppet-mashup/phenomblue-moppet-mashup.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Moppet Mashup',
            description: '',
            player: 'https://www.youtube.com/embed/FqURhpK_aCM'
          }
        ]
    },
    data: {
      title: 'Moppet Mashup'
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