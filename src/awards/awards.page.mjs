import { hostname } from '../../globals.mjs'

export default {
    name: 'awards',
    filename: 'awards/index.html',
    entry: '/src/awards/awards.js',
    data: {
      title: 'Awards'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'awards/'
        }
      }
    ]
}