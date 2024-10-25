import { createApp } from 'vue'
import App from './amazon-alexa-cortana.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Alexa + Cortana'))
.mount('#app')