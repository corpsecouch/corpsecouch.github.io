import { createApp } from 'vue'
import App from './Press.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Press'))
.mount('#app')