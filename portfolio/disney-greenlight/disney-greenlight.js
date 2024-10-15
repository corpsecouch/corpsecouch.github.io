import { createApp } from 'vue'
import App from './disney-greenlight.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: CASTL'))
.mount('#app')