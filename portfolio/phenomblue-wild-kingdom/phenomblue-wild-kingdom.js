import { createApp } from 'vue'
import App from './phenomblue-wild-kingdom.vue'
import VueGtag from 'vue-gtag'
import {_isProd, _GtagID } from '@globals/vars'

createApp(App)
.use(VueGtag, {
    pageTrackerTemplate(to) {
        return {
            page_title: 'Portfolio: My Wild Kingdom',
            page_path: to.path
        }
    },
    config: { id: _GtagID },
    enabled: _isProd
})
.mount('#app')