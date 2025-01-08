import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectProfile',
    filename: 'portfolio/amazon-profile/index.html',
    entry: '/src/portfolio/amazon-profile/amazon-profile.js',
    data: {
      title: 'Alexa Profile'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/amazon-profile/'
        }
      }
    ]
}