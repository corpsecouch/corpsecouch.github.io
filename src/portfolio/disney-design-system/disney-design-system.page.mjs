import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectDesignSystem',
    filename: 'portfolio/disney-design-system/index.html',
    entry: '/src/portfolio/disney-design-system/disney-design-system.js',
    data: {
      title: 'Disney Enterprise Design System'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/disney-design-system/'
        }
      }
    ]
}