import { hostname, static_route } from '../../../globals.mjs'

const route = '/portfolio/rocket-ironbear/'

export default {
  name: 'projectIronbear',
    filename: 'portfolio/rocket-ironbear/index.html',
    entry: '/src/portfolio/rocket-ironbear/rocket-ironbear.js',
    sitemap: {
        route: route,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date(),
        video: [
          {
            thumbnail: hostname + static_route + route + 'video.png',
            title: 'Rocket Mortgage Conversational Lead Funnel',
            description: '',
            player: 'https://www.youtube.com/embed/9BHhCdaoqZ8'
          }
        ]
    },
    data: {
      title: 'Conversational Lead Funnel'
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