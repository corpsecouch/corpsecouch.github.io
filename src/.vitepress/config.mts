import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { figure } from '@mdit/plugin-figure'
import faviconPlugin from './vitepress-plugin-favicons.mjs'
import canonicalPlugin from './vitepress-plugin-canonical-urls.mjs'
import structuredDataPlugin from './vitepress-plugin-structure-data.mjs'
import googleAnalyticsPlugin from './vitepress-plugin-google-analytics.mjs'

import { getImageFullUrl } from '../articles/articles.utils.js'
import _ from 'lodash'

const hostname:string = 'https://jasonbejot.com'
const _isProd:boolean = process.env.NODE_ENV === 'production';
const _GtagID:string = 'G-G24FHEZ8YC';

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Jason Bejot",
  description: "Hi, I'm Jason. Executive leader, award-winning designer, inventor, and expert in conversational AI and personalization.",

  srcExclude: [
    '**/articles/drafts/**',
    '**/ace-metrix/**',
    '**/rocket-agentic/index.md',
    '**/rocket-expansion/index.md',
    '**/rocket-ivr/index.md',
    '**/rocket-multi-modal/index.md',
    '**/rocket-personality/index.md',
    '**/rocket-vision/index.md',
    '**/amazon-authentication/index.md',
    '**/amazon-face-id/index.md',
    '**/amazon-personalized-skills/index.md',
    '**/amazon-presence-detection/index.md',
    '**/amazon-voice-settings/index.md',
    '**/disney-dma/index.md',
    '**/disney-greenlight/index.md',
    '**/disney-incubator/index.md',
    '**/disney-music/index.md',
    '**/disney-slate/index.md',
  ],

  rewrites: {
    // where articles will be served from
    'articles/archive/:article*' : 'articles/:article*',

    // where portfolio projects will be served from
    // 'portfolio/projects/:project*' : 'portfolio/:project*',
    'portfolio/projects/:company/:project*' : 'portfolio/:project*',
    // 'portfolio/projects/:company/:project*' : 'portfolio/:company/:project*',
    // 'portfolio/projects/:company*/:project*' : 'portfolio/:company*\-:project*',

    // where application landing pages will be served from
    'applications/:pre*-:slug' : 'apps/:slug'
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
    lastmodDateOnly: true,
    transformItems(items) {
      let filtered_items = _.filter(items, (item) => {
        // prevent application urls from being added to the sitemap
        return !item.url.match(/^apps\//i)
      })
      return filtered_items
    }
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
