import { createApp } from 'vue'
import App from './Rocket-Ironbear.vue'
import VueGtag from 'vue-gtag'
import {_isProd, _GtagID } from '@globals/vars'

// https://launchpad.rocketmortgage.com/?isAiChat=true

createApp(App)
.use(VueGtag, {
    pageTrackerEnabled: true,
    pageTrackerTemplate(to) {
        return {
            page_title: 'Portfolio: Ironbear',
            page_path: to.path
        }
    },
    config: { id: _GtagID },
    enabled: _isProd
})
.mount('#app')