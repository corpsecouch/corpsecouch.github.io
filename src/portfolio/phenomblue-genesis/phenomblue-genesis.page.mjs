import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectGenesis',
    filename: 'portfolio/phenomblue-genesis/index.html',
    entry: '/src/portfolio/phenomblue-genesis/phenomblue-genesis.js',
    data: {
      title: 'Microsoft Genesis'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-genesis/'
        }
      }
    ]
}