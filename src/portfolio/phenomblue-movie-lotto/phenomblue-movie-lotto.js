import { createApp } from 'vue'
import App from './phenomblue-movie-lotto.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Movie Lotto'))
.mount('#app')