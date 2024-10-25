import { createApp } from 'vue'
import App from './disney-incubator.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Star Lab'))
.mount('#app')