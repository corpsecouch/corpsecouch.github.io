import { createApp } from 'vue'
import App from './Index.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Index'))
.mount('#app')