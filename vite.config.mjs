import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from 'vite-plugin-require'

// https://vitejs.dev/config/
// https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/
// https://vite.dev/guide/build.html#multi-page-app

export default defineConfig({
  mode: 'development',

  plugins: [
    vue(),
    vitePluginRequire.default()
  ],

  appType: 'mpa',

  build: {
    rollupOptions: {
      input: {
        main:                         resolve(__dirname, 'index.html'),
        press:                        resolve(__dirname, 'press/index.html'),
        portfolio:                    resolve(__dirname, 'portfolio/index.html'),
        projectIronbear:              resolve(__dirname, 'portfolio/rocket-ironbear.html'),
        projectProfile:               resolve(__dirname, 'portfolio/amazon-profile.html'),
        projectAlexaCortana:          resolve(__dirname, 'portfolio/amazon-alexa-cortana.html'),
        projectDesignSystem:          resolve(__dirname, 'portfolio/disney-design-system.html'),
        projectGreenlight:            resolve(__dirname, 'portfolio/disney-greenlight.html'),
        projectIncubator:             resolve(__dirname, 'portfolio/disney-incubator.html'),
        projectSlate:                 resolve(__dirname, 'portfolio/disney-slate.html'),
        projectVR:                    resolve(__dirname, 'portfolio/disney-vr.html'),
        projectDinoDig:               resolve(__dirname, 'portfolio/phenomblue-dino-dig.html'),
        projectFantasticFutureMe:     resolve(__dirname, 'portfolio/phenomblue-fantastic-future-me.html'),
        projectGenesis:               resolve(__dirname, 'portfolio/phenomblue-genesis.html'),
        projectMoppetMashup:          resolve(__dirname, 'portfolio/phenomblue-moppet-mashup.html'),
        projectMovieLotto:            resolve(__dirname, 'portfolio/phenomblue-movie-lotto.html'),
        projectPage:                  resolve(__dirname, 'portfolio/phenomblue-page.html'),
        projectWildKingdom:           resolve(__dirname, 'portfolio/phenomblue-wild-kingdom.html'),
      },
    }
  },

  resolve: {
    
    extensions: ['.js', '.vue'],

    alias: {
      "@": resolve(__dirname, "./src"),
      "@data": resolve(__dirname, "./data"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@portfolio": resolve(__dirname, "./portfolio"),
      "@components": resolve(__dirname, "./components")
    }
  }
})
