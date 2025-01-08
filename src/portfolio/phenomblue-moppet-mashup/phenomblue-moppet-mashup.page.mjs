import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectMoppetMashup',
    filename: 'portfolio/phenomblue-moppet-mashup/index.html',
    entry: '/src/portfolio/phenomblue-moppet-mashup/phenomblue-moppet-mashup.js',
    data: {
      title: 'Moppet Mashup'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-moppet-mashup/'
        }
      }
    ]
}