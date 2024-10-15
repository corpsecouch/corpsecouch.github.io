import { createApp } from 'vue'
import App from './disney-slate.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Slate'))
.mount('#app')