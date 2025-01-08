import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from 'vite-plugin-require'
// import Sitemap from 'vite-plugin-sitemap'
import Sitemap from 'vite-plugin-sitemap'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'
import { hostname } from './globals.mjs'

// https://vitejs.dev/config/
// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// https://vite.dev/guide/build.html#multi-page-app
// https://github.com/jbaubree/vite-plugin-sitemap

import Pages from './pages.mjs'
const pages = await Pages('.page.mjs', './src')

const sitemap = { routes: [], changefreq: {}, priority: {}, lastmod: {} }
for(let i = 0; i < pages.length; i++) {
  if(pages[i].sitemap && pages[i].sitemap.route) {
    sitemap.routes.push(pages[i].sitemap.route)
    if(pages[i].sitemap.changefreq) sitemap.changefreq[pages[i].sitemap.route] = pages[i].sitemap.changefreq
    if(pages[i].sitemap.priority) sitemap.priority[pages[i].sitemap.route] = pages[i].sitemap.priority
    if(pages[i].sitemap.lastmod) sitemap.lastmod[pages[i].sitemap.route] = pages[i].sitemap.lastmod
  }
}

/*
 * Set up all the pages used with createMpaPlugin
 */
// const pages = [
//   {
//     name: 'index',
//     filename: 'index.html',
//     entry: '/src/index.js',
//     data: {
//       title: ''
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname
//         }
//       }
//     ]
//   },

//   {
//     name: '404',
//     filename: '404.html',
//     entry: '/src/404.js',
//     data: {
//       title: 'Whoops!'
//     }
//   },

//   {
//     name: 'press',
//     filename: 'press/index.html',
//     entry: '/src/press/press.js',
//     data: {
//       title: 'Press'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'press/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'awards',
//     filename: 'awards/index.html',
//     entry: '/src/awards/awards.js',
//     data: {
//       title: 'Awards'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'awards/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'portfolio',
//     filename: 'portfolio/index.html',
//     entry: '/src/portfolio/index.js',
//     data: {
//       title: 'Portfolio'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectIronbear',
//     filename: 'portfolio/rocket-ironbear/index.html',
//     entry: '/src/portfolio/rocket-ironbear/rocket-ironbear.js',
//     data: {
//       title: 'Conversational Lead Funnel'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/rocket-ironbear/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectProfile',
//     filename: 'portfolio/amazon-profile/index.html',
//     entry: '/src/portfolio/amazon-profile/amazon-profile.js',
//     data: {
//       title: 'Alexa Profile'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/amazon-profile/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectAlexaCortana',
//     filename: 'portfolio/amazon-alexa-cortana/index.html',
//     entry: '/src/portfolio/amazon-alexa-cortana/amazon-alexa-cortana.js',
//     data: {
//       title: 'Alexa + Cortana'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/amazon-alexa-cortana/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectDesignSystem',
//     filename: 'portfolio/disney-design-system/index.html',
//     entry: '/src/portfolio/disney-design-system/disney-design-system.js',
//     data: {
//       title: 'Disney Enterprise Design System'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/disney-design-system/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectGreenlight',
//     filename: 'portfolio/disney-greenlight/index.html',
//     entry: '/src/portfolio/disney-greenlight/disney-greenlight.js',
//     data: {
//       title: 'Disney Movie Greenlight'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/disney-greenlight/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectIncubator',
//     filename: 'portfolio/disney-incubator/index.html',
//     entry: '/src/portfolio/disney-incubator/disney-incubator.js',
//     data: {
//       title: 'Disney Innovation Incubator'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/disney-incubator/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectSlate',
//     filename: 'portfolio/disney-slate/index.html',
//     entry: '/src/portfolio/disney-slate/disney-slate.js',
//     data: {
//       title: 'Disney Movie Slate'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/disney-slate/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectVR',
//     filename: 'portfolio/disney-vr/index.html',
//     entry: '/src/portfolio/disney-vr/disney-vr.js',
//     data: {
//       title: 'Filmmaking for Virtual Reality'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/disney-vr/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectDinoDig',
//     filename: 'portfolio/phenomblue-dino-dig/index.html',
//     entry: '/src/portfolio/phenomblue-dino-dig/phenomblue-dino-dig.js',
//     data: {
//       title: 'Operation: Dino Dig'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-dino-dig/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectFantasticFutureMe',
//     filename: 'portfolio/phenomblue-fantastic-future-me/index.html',
//     entry: '/src/portfolio/phenomblue-fantastic-future-me/phenomblue-fantastic-future-me.js',
//     data: {
//       title: 'Fantastic Future Me'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-fantastic-future-me/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectGenesis',
//     filename: 'portfolio/phenomblue-genesis/index.html',
//     entry: '/src/portfolio/phenomblue-genesis/phenomblue-genesis.js',
//     data: {
//       title: 'Microsoft Genesis'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-genesis/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectMoppetMashup',
//     filename: 'portfolio/phenomblue-moppet-mashup/index.html',
//     entry: '/src/portfolio/phenomblue-moppet-mashup/phenomblue-moppet-mashup.js',
//     data: {
//       title: 'Moppet Mashup'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-moppet-mashup/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectMovieLotto',
//     filename: 'portfolio/phenomblue-movie-lotto/index.html',
//     entry: '/src/portfolio/phenomblue-movie-lotto/phenomblue-movie-lotto.js',
//     data: {
//       title: 'Movie Lotto'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-movie-lotto/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectPage',
//     filename: 'portfolio/phenomblue-page/index.html',
//     entry: '/src/portfolio/phenomblue-page/phenomblue-page.js',
//     data: {
//       title: 'Page'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-page/'
//         }
//       }
//     ]
//   },

//   {
//     name: 'projectWildKingdom',
//     filename: 'portfolio/phenomblue-wild-kingdom/index.html',
//     entry: '/src/portfolio/phenomblue-wild-kingdom/phenomblue-wild-kingdom.js',
//     data: {
//       title: 'My Wild Kingdom'
//     },
//     tags: [
//       {
//         tag: 'link',
//         injectTo: 'head-prepend',
//         attrs: {
//           rel: 'canonical',
//           href: hostname + 'portfolio/phenomblue-wild-kingdom/'
//         }
//       }
//     ]
//   }
// ]

/*
 * Changes the middleware of the dev & preview server so it mimicks the github pages webserver (mostly)
 * Breaks any built-in 404 functionality, that page needs to be tested manually
 */
const rewrites = [
  {
    from: /^[^.]*$/,
    to: (ctx) => {
      let str = ctx.match.input;
      if(!str.endsWith('/')) str += '/'
      str += 'index.html'
      return str;
    }
  }
]

/*
 * Set up vite
 */
export default defineConfig({
  appType: 'mpa',
  publicDir: 'src/public',

  plugins: [
    vue(),
    vitePluginRequire.default(),

    Sitemap({ 
      hostname: hostname,
      readable: true,
      // exclude: [ '/404' ],
      generateRobotsTxt: false, // doesn't seem to work when set to true
      // changefreq: 'weekly',
      // extensions: '/' // forces a trailing slash, which is what I want
      dynamicRoutes: sitemap.routes,
      changefreq: sitemap.changefreq,
      priority: sitemap.priority,
      lastmod: sitemap.lastmod
    }),

    createMpaPlugin({
      htmlMinify: false,
      template: 'src/templates/template.html',
      rewrites: rewrites,
      previewRewrites: rewrites,
      pages: pages,
      transformHtml(html, ctx) {
        return {
          html,
          tags: ctx.page.tags ? ctx.page.tags : []
        }
      }
    })
  ],

  /*
   * The built-in rollupOptions conflicts with createMpaPlugin
   */
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main:                         resolve(__dirname, 'index.html'),
  //       press:                        resolve(__dirname, 'press/index.html'),
  //       awards:                       resolve(__dirname, 'awards/index.html'),
  //       portfolio:                    resolve(__dirname, 'portfolio/index.html'),
  //       projectIronbear:              resolve(__dirname, 'portfolio/rocket-ironbear/index.html'),
  //       projectProfile:               resolve(__dirname, 'portfolio/amazon-profile/index.html'),
  //       projectAlexaCortana:          resolve(__dirname, 'portfolio/amazon-alexa-cortana/index.html'),
  //       projectDesignSystem:          resolve(__dirname, 'portfolio/disney-design-system/index.html'),
  //       projectGreenlight:            resolve(__dirname, 'portfolio/disney-greenlight/index.html'),
  //       projectIncubator:             resolve(__dirname, 'portfolio/disney-incubator/index.html'),
  //       projectSlate:                 resolve(__dirname, 'portfolio/disney-slate/index.html'),
  //       projectVR:                    resolve(__dirname, 'portfolio/disney-vr/index.html'),
  //       projectDinoDig:               resolve(__dirname, 'portfolio/phenomblue-dino-dig/index.html'),
  //       projectFantasticFutureMe:     resolve(__dirname, 'portfolio/phenomblue-fantastic-future-me/index.html'),
  //       projectGenesis:               resolve(__dirname, 'portfolio/phenomblue-genesis/index.html'),
  //       projectMoppetMashup:          resolve(__dirname, 'portfolio/phenomblue-moppet-mashup/index.html'),
  //       projectMovieLotto:            resolve(__dirname, 'portfolio/phenomblue-movie-lotto/index.html'),
  //       projectPage:                  resolve(__dirname, 'portfolio/phenomblue-page/index.html'),
  //       projectWildKingdom:           resolve(__dirname, 'portfolio/phenomblue-wild-kingdom/index.html'),
  //       notFound:                     resolve(__dirname, '404.html'),
  //     },
  //   }
  // },

  resolve: {
    
    extensions: ['.js', '.vue'],

    alias: {
      "@": resolve(__dirname, "./src"),
      "@data": resolve(__dirname, "./src/data"),
      "@styles": resolve(__dirname, "./src/styles"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@globals": resolve(__dirname, "./src/globals"),
      "@portfolio": resolve(__dirname, "./src/portfolio"),
      "@components": resolve(__dirname, "./src/components")
    }
  }
})
