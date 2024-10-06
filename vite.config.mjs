import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from 'vite-plugin-require'
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// https://vite.dev/guide/build.html#multi-page-app

export default defineConfig({
  // mode: 'development',

  plugins: [
    vue(),
    vitePluginRequire.default(),
    Sitemap({ 
      hostname: 'https://jasonbejot.com/',
      readable: true,
      exclude: [ '/404' ]
    })
  ],

  appType: 'mpa',

  build: {
    rollupOptions: {
      input: {
        main:                         resolve(__dirname, 'index.html'),
        press:                        resolve(__dirname, 'press/index.html'),
        portfolio:                    resolve(__dirname, 'portfolio/index.html'),
        projectIronbear:              resolve(__dirname, 'portfolio/rocket-ironbear/index.html'),
        projectProfile:               resolve(__dirname, 'portfolio/amazon-profile/index.html'),
        projectAlexaCortana:          resolve(__dirname, 'portfolio/amazon-alexa-cortana/index.html'),
        projectDesignSystem:          resolve(__dirname, 'portfolio/disney-design-system/index.html'),
        projectGreenlight:            resolve(__dirname, 'portfolio/disney-greenlight/index.html'),
        projectIncubator:             resolve(__dirname, 'portfolio/disney-incubator/index.html'),
        projectSlate:                 resolve(__dirname, 'portfolio/disney-slate/index.html'),
        projectVR:                    resolve(__dirname, 'portfolio/disney-vr/index.html'),
        projectDinoDig:               resolve(__dirname, 'portfolio/phenomblue-dino-dig/index.html'),
        projectFantasticFutureMe:     resolve(__dirname, 'portfolio/phenomblue-fantastic-future-me/index.html'),
        projectGenesis:               resolve(__dirname, 'portfolio/phenomblue-genesis/index.html'),
        projectMoppetMashup:          resolve(__dirname, 'portfolio/phenomblue-moppet-mashup/index.html'),
        projectMovieLotto:            resolve(__dirname, 'portfolio/phenomblue-movie-lotto/index.html'),
        projectPage:                  resolve(__dirname, 'portfolio/phenomblue-page/index.html'),
        projectWildKingdom:           resolve(__dirname, 'portfolio/phenomblue-wild-kingdom/index.html'),
        notFound:                     resolve(__dirname, '404.html'),
      },
    }
  },

  resolve: {
    
    extensions: ['.js', '.vue'],

    alias: {
      "@": resolve(__dirname, "./src"),
      "@data": resolve(__dirname, "./data"),
      "@assets": resolve(__dirname, "./assets"),
      "@globals": resolve(__dirname, "./globals"),
      "@portfolio": resolve(__dirname, "./portfolio"),
      "@components": resolve(__dirname, "./components")
    }
  }
})
