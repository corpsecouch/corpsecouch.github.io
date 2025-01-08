import { hostname } from '../../globals.mjs'

export default {
  name: 'portfolio',
  filename: 'portfolio/index.html',
  entry: '/src/portfolio/index.js',
  data: {
    title: 'Portfolio'
  },
  tags: [
    {
      tag: 'link',
      injectTo: 'head-prepend',
      attrs: {
        rel: 'canonical',
        href: hostname + 'portfolio/'
      }
    }
  ]
}