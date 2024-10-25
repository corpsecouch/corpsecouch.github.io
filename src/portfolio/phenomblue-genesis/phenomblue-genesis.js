import { createApp } from 'vue'
import App from './phenomblue-genesis.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Genesis'))
.mount('#app')