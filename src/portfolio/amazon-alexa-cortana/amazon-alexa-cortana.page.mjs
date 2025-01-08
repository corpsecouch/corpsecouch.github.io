import { hostname } from '../../../globals.mjs'

export default {
  name: 'projectAlexaCortana',
    filename: 'portfolio/amazon-alexa-cortana/index.html',
    entry: '/src/portfolio/amazon-alexa-cortana/amazon-alexa-cortana.js',
    data: {
      title: 'Alexa + Cortana'
    },
    tags: [
      {
        tag: 'link',
        injectTo: 'head-prepend',
        attrs: {
          rel: 'canonical',
          href: hostname + 'portfolio/amazon-alexa-cortana/'
        }
      }
    ]
}