import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectWildKingdom',
    filename: 'portfolio/phenomblue-wild-kingdom/index.html',
    entry: '/src/portfolio/phenomblue-wild-kingdom/phenomblue-wild-kingdom.js',
    data: {
      title: 'My Wild Kingdom'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-wild-kingdom/'
        }
      }
    ]
}