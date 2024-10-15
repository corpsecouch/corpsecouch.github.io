import { createApp } from 'vue'
import App from './phenomblue-wild-kingdom.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: My Wild Kingdom'))
.mount('#app')