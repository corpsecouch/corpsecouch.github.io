import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/phenomblue-page/'

export default {
  name: 'projectPage',
    filename: 'portfolio/phenomblue-page/index.html',
    entry: '/src/portfolio/phenomblue-page/phenomblue-page.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Page',
            description: '',
            player: 'https://www.youtube.com/embed/aUp63-1cNGw'
          }
        ]
    },
    data: {
      title: 'Page'
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