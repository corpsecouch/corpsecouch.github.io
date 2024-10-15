import { createApp } from 'vue'
import App from './Awards.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Awards'))
.mount('#app')