import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectDinoDig',
    filename: 'portfolio/phenomblue-dino-dig/index.html',
    entry: '/src/portfolio/phenomblue-dino-dig/phenomblue-dino-dig.js',
    data: {
      title: 'Operation: Dino Dig'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-dino-dig/'
        }
      }
    ]
}