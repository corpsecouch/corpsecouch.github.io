import { createApp } from 'vue'
import App from './phenomblue-dino-dig.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Dino Dig'))
.mount('#app')