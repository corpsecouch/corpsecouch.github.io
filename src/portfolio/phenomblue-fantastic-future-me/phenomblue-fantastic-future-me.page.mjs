import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectFantasticFutureMe',
    filename: 'portfolio/phenomblue-fantastic-future-me/index.html',
    entry: '/src/portfolio/phenomblue-fantastic-future-me/phenomblue-fantastic-future-me.js',
    data: {
      title: 'Fantastic Future Me'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-fantastic-future-me/'
        }
      }
    ]
}