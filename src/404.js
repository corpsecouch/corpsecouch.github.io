import { createApp } from 'vue'
import App from './pages/FourOhFour.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

createApp(App)
.use (VueGtag, config('404'))
.mount('#app')