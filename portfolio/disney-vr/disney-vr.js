import { createApp } from 'vue'
import App from './disney-vr.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: VR'))
.mount('#app')