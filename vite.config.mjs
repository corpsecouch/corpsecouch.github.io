import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from 'vite-plugin-require'
//import Sitemap from 'vite-plugin-sitemap'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'

// https://vitejs.dev/config/
// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// https://vite.dev/guide/build.html#multi-page-app
// https://github.com/jbaubree/vite-plugin-sitemap

/*
 * Set up all the pages used with createMpaPlugin
 */
const pages = [
  {
    name: 'index',
    filename: 'index.html',
    entry: '/src/main.js',
    data: {
      title: ''
    }
  },

  {
    name: '404',
    filename: '404.html',
    entry: '/src/404.js',
    data: {
      title: 'Whoops!'
    }
  },

  {
    name: 'press',
    filename: 'press/index.html',
    entry: '/src/press/press.js',
    data: {
      title: 'Press'
    }
  },

  {
    name: 'awards',
    filename: 'awards/index.html',
    entry: '/src/awards/awards.js',
    data: {
      title: 'Awards'
    }
  },

  {
    name: 'portfolio',
    filename: 'portfolio/index.html',
    entry: '/src/portfolio/index.js',
    data: {
      title: 'Portfolio'
    }
  },

  {
    name: 'projectIronbear',
    filename: 'portfolio/rocket-ironbear/index.html',
    entry: '/src/portfolio/rocket-ironbear/rocket-ironbear.js',
    data: {
      title: 'Conversational Lead Funnel'
    }
  },

  {
    name: 'projectProfile',
    filename: 'portfolio/amazon-profile/index.html',
    entry: '/src/portfolio/amazon-profile/amazon-profile.js',
    data: {
      title: 'Alexa Profile'
    }
  },

  {
    name: 'projectAlexaCortana',
    filename: 'portfolio/amazon-alexa-cortana/index.html',
    entry: '/src/portfolio/amazon-alexa-cortana/amazon-alexa-cortana.js',
    data: {
      title: 'Alexa + Cortana'
    }
  },

  {
    name: 'projectDesignSystem',
    filename: 'portfolio/disney-design-system/index.html',
    entry: '/src/portfolio/disney-design-system/disney-design-system.js',
    data: {
      title: 'Disney Enterprise Design System'
    }
  },

  {
    name: 'projectDesignSystem',
    filename: 'portfolio/disney-design-system/index.html',
    entry: '/src/portfolio/disney-design-system/disney-design-system.js',
    data: {
      title: 'Disney Enterprise Design System'
    }
  },

  {
    name: 'projectGreenlight',
    filename: 'portfolio/disney-greenlight/index.html',
    entry: '/src/portfolio/disney-greenlight/disney-greenlight.js',
    data: {
      title: 'Disney Movie Greenlight'
    }
  },

  {
    name: 'projectIncubator',
    filename: 'portfolio/disney-design-system/index.html',
    entry: '/src/portfolio/disney-design-system/disney-design-system.js',
    data: {
      title: 'Disney Innovation Incubator'
    }
  },

  {
    name: 'projectSlate',
    filename: 'portfolio/disney-incubator/index.html',
    entry: '/src/portfolio/disney-incubator/disney-incubator.js',
    data: {
      title: 'Disney Movie Slate'
    }
  },

  {
    name: 'projectVR',
    filename: 'portfolio/disney-vr/index.html',
    entry: '/src/portfolio/disney-vr/disney-vr.js',
    data: {
      title: 'Filmmaking for Virtual Reality'
    }
  },

  {
    name: 'projectDinoDig',
    filename: 'portfolio/phenomblue-dino-dig/index.html',
    entry: '/src/portfolio/phenomblue-dino-dig/phenomblue-dino-dig.js',
    data: {
      title: 'Operation: Dino Dig'
    }
  },

  {
    name: 'projectFantasticFutureMe',
    filename: 'portfolio/phenomblue-fantastic-future-me/index.html',
    entry: '/src/portfolio/phenomblue-fantastic-future-me/phenomblue-fantastic-future-me.js',
    data: {
      title: 'Fantastic Future Me'
    }
  },

  {
    name: 'projectGenesis',
    filename: 'portfolio/phenomblue-genesis/index.html',
    entry: '/src/portfolio/phenomblue-genesis/phenomblue-genesis.js',
    data: {
      title: 'Microsoft Genesis'
    }
  },

  {
    name: 'projectMoppetMashup',
    filename: 'portfolio/phenomblue-moppet-mashup/index.html',
    entry: '/src/portfolio/phenomblue-moppet-mashup/phenomblue-moppet-mashup.js',
    data: {
      title: 'Moppet Mashup'
    }
  },

  {
    name: 'projectMovieLotto',
    filename: 'portfolio/phenomblue-movie-lotto/index.html',
    entry: '/src/portfolio/phenomblue-movie-lotto/phenomblue-movie-lotto.js',
    data: {
      title: 'Movie Lotto'
    }
  },

  {
    name: 'projectPage',
    filename: 'portfolio/phenomblue-page/index.html',
    entry: '/src/portfolio/phenomblue-page/phenomblue-page.js',
    data: {
      title: 'Page'
    }
  },

  {
    name: 'projectWildKingdom',
    filename: 'portfolio/phenomblue-wild-kingdom/index.html',
    entry: '/src/portfolio/phenomblue-wild-kingdom/phenomblue-wild-kingdom.js',
    data: {
      title: 'My Wild Kingdom'
    }
  }
]

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

    /*
     * sitemap sucks, doesn't produce the right urls
     * keeping it here for now in case i figure it out
     */
    // Sitemap({ 
    //   hostname: 'https://jasonbejot.com/',
    //   readable: true,
    //   exclude: [ '/404' ],
    //   generateRobotsTxt: true,
    //   changefreq: 'weekly'
    // })

    createMpaPlugin({
      htmlMinify: false,
      template: 'src/templates/template.html',
      rewrites: rewrites,
      previewRewrites: rewrites,
      pages: pages
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
