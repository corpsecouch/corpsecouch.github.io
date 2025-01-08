import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectVR',
    filename: 'portfolio/disney-vr/index.html',
    entry: '/src/portfolio/disney-vr/disney-vr.js',
    data: {
      title: 'Filmmaking for Virtual Reality'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/disney-vr/'
        }
      }
    ]
}