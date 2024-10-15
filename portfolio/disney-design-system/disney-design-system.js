import { createApp } from 'vue'
import App from './disney-design-system.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Hex'))
.mount('#app')