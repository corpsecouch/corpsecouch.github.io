import { hostname } from '../globals.mjs'

const route = '/'

export default {
    name: 'index',
    filename: 'index.html',
    entry: '/src/index.js',
    sitemap: {
        route: route,
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date()
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
                href: hostname + route
            }
        }
    ]
}