import { createApp } from 'vue'
import App from './phenomblue-moppet-mashup.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('Portfolio: Moppet Mashup'))
.mount('#app')