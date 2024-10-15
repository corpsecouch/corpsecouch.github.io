import { createApp } from 'vue'
import App from './Rocket-Ironbear.vue'
import VueGtag from 'vue-gtag'
import config from '@globals/analytics'

// https://launchpad.rocketmortgage.com/?isAiChat=true

createApp(App)
.use (VueGtag, config('Portfolio: Ironbear'))
.mount('#app')