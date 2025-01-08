import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectIncubator',
    filename: 'portfolio/disney-incubator/index.html',
    entry: '/src/portfolio/disney-incubator/disney-incubator.js',
    data: {
      title: 'Disney Innovation Incubator'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/disney-incubator/'
        }
      }
    ]
}