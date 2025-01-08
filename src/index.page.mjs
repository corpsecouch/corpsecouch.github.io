import { hostname } from '../globals.mjs'

export default {
    name: 'index',
    filename: 'index.html',
    entry: '/src/index.js',
    sitemap: {
        route: '/',
        changefreq: 'monthly'
    },
    data: {
        title: ''
    },
    tags: [
        {
            tag: 'link',
            injectTo: 'head-prepend',
            attrs: {
                rel: 'canonical',
                href: hostname
            }
        }
    ]
}