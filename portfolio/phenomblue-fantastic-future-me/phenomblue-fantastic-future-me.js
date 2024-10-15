import { createApp } from 'vue'
import App from './phenomblue-fantastic-future-me.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Fantastic Future Me'))
.mount('#app')