import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectPage',
    filename: 'portfolio/phenomblue-page/index.html',
    entry: '/src/portfolio/phenomblue-page/phenomblue-page.js',
    data: {
      title: 'Page'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/phenomblue-page/'
        }
      }
    ]
}