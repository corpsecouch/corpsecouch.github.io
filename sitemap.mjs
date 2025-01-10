// borrowed heavily from: https://github.com/appsaeed/vite-sitemap/blob/main/src/index.ts

import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { format } from 'date-fns';

const xmlOpen = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
const xmlClose = `</urlset>`

export default function Sitemap(options={}) {
    const baseURL = options.baseURL || ''
    // const outputDir = options.outputDir || 'dist'
    const filename = options.filename || 'sitemap.xml'
    const urls = options.urls || []

    const entries = urls.map((url) => {
        const vals = []

        if(url.route) vals.push(`\t\t<loc>${baseURL}${url.route}</loc>\n`)
        if(url.changefreq) vals.push(`\t\t<changefreq>${url.changefreq}</changefreq>\n`)
        if(url.priority) vals.push(`\t\t<priority>${url.priority.toFixed(1)}</priority>\n`)
        if(url.lastmod) vals.push(`\t\t<lastmod>${format(url.lastmod, "yyyy-MM-dd'T'HH:mm:sss'Z'")}</lastmod>\n`)
        if(url.video){
            url.video.map((video) => {
                vals.push(`\t\t<video:video>\n`)
                vals.push(`\t\t\t<video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>\n`)
                vals.push(`\t\t\t<video:title>${video.title}</video:title>\n`)
                vals.push(`\t\t\t<video:description>${video.description}</video:description>\n`)
                vals.push(`\t\t\t<video:player_loc>${video.player}</video:player_loc>\n`)
                vals.push(`\t\t</video:video>\n`)
            })
        }

        return `\t<url>\n${vals.join('')}\t</url>\n`
    })

    const xml = `${xmlOpen}\n${entries.join('')}${xmlClose}`

    return {
        name: 'sitemap',
        async writeBundle(options) {
            try {
                await writeFile(resolve(options.dir, filename), xml)
            } catch (error) {
                // throw new Error(String(error));
                console.log(error)
            }
        }
    }
}