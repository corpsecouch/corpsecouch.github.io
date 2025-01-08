import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectIronbear',
    filename: 'portfolio/rocket-ironbear/index.html',
    entry: '/src/portfolio/rocket-ironbear/rocket-ironbear.js',
    data: {
      title: 'Conversational Lead Funnel'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/rocket-ironbear/'
        }
      }
    ]
}