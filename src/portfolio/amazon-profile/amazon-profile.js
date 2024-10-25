import { createApp } from 'vue'
import App from './Amazon-Profile.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Alexa Profile'))
.mount('#app')