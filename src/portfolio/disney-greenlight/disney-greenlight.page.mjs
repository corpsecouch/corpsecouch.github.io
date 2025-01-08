import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectGreenlight',
    filename: 'portfolio/disney-greenlight/index.html',
    entry: '/src/portfolio/disney-greenlight/disney-greenlight.js',
    data: {
      title: 'Disney Movie Greenlight'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/disney-greenlight/'
        }
      }
    ]
}