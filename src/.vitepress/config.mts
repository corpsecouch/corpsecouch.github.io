import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { figure } from '@mdit/plugin-figure'
import faviconPlugin from './vitepress-plugin-favicons.mjs'
import canonicalPlugin from './vitepress-plugin-canonical-urls.mjs'
import structuredDataPlugin from './vitepress-plugin-structure-data.mjs'
import googleAnalyticsPlugin from './vitepress-plugin-google-analytics.mjs'

import { getImageFullUrl } from '../articles/articles.utils.js'

const hostname:string = 'https://jasonbejot.com'
const _isProd:boolean = process.env.NODE_ENV === 'production';
const _GtagID:string = 'G-G24FHEZ8YC';

console.log('_isProd:', _isProd)

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Jason Bejot",

  rewrites: {
    'articles/archive/:article*' : 'articles/:article*',
    'portfolio/projects/:project*' : 'portfolio/:project*'
  },

  /* ************************** */
  /* * markdown configuration * */
  /* ************************** */

  markdown: {
    config: (md) => {
      md.use(figure) // https://mdit-plugins.github.io/figure.html#demo
    }
  },

  /* ********************** */
  /* * vite configuration * */
  /* ********************** */

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (chunkInfo):string => {
            let url:string = '[name]-[hash][extname]'

            if(chunkInfo.names) {

              if(chunkInfo.originalFileNames.length) {

                if(chunkInfo.originalFileNames[0].match(/articles\/archive/i)) {

                  // only act on these file types
                  const exts = ['jpg', 'png', 'webp', 'jpeg', 'gif']

                  for(var i = 0; i < exts.length; i++){

                    if(chunkInfo.names[0].match(new RegExp(`\.${exts[i]}$`, 'i'))) {
                      
                      // move article images to the same folder as the article, not the assets folder
                      url = chunkInfo.originalFileNames[0].replace(/archive\//i, '')
                      
                      break

                    }

                  }

                }

              }

            }
            
            return url
          } 
        }
      }
    },

    resolve: {
        
      extensions: ['.js', '.vue', '.md'],
  
      alias: {
        "@": resolve(__dirname, "../"),
        "@styles": resolve(__dirname, "../styles"),
        "@globals": resolve(__dirname, "../globals"),
        "@portfolio": resolve(__dirname, "../portfolio"),
        "@components": resolve(__dirname, "../components"),
        "@press": resolve(__dirname, '../press'),
        "@awards": resolve(__dirname, '../awards')
      }
    }
  },

  /* ************************* */
  /* * sitemap configuration * */
  /* ************************* */

  // https://vitepress.dev/guide/sitemap-generation
  sitemap: {
    hostname: hostname,
    lastmodDateOnly: true
  },
  
  transformPageData(pageData) {

    pageData.frontmatter.head ??= []

    /* ****************** */
    /* * canonical urls * */
    /* ****************** */

    canonicalPlugin.transformPageData(pageData, {
      hostname: hostname
    })

    /* ************ */
    /* * favicons * */
    /* ************ */

    faviconPlugin.transformPageData(pageData)

    /* ******************** */
    /* * google analytics * */
    /* ******************** */

    if(_isProd) {
      googleAnalyticsPlugin.transformPageData(pageData, {
        gtag: _GtagID
      })
    }

    /* ****************************** */
    /* * structed data for articles * */
    /* ****************************** */
    
    if(pageData.frontmatter.layout == 'article') {
      structuredDataPlugin.transformPageData(pageData, {
        type: 'BlogPosting',
        headline: pageData.frontmatter.title,
        datePublished: pageData.frontmatter.date,
        author: 'Jason Bejot',
        images: [getImageFullUrl(pageData.frontmatter.preview.image, pageData.relativePath, hostname)]
      })
    }

  }
})
