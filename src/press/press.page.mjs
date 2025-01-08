import { hostname } from '../../globals.mjs'

export default {
    name: 'press',
    filename: 'press/index.html',
    entry: '/src/press/press.js',
    data: {
      title: 'Press'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'press/'
        }
      }
    ]
}