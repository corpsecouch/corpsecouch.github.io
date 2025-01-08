import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectSlate',
    filename: 'portfolio/disney-slate/index.html',
    entry: '/src/portfolio/disney-slate/disney-slate.js',
    data: {
      title: 'Disney Movie Slate'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/disney-slate/'
        }
      }
    ]
}