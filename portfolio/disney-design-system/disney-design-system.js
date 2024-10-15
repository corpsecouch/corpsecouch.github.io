import { createApp } from 'vue'
import App from './disney-design-system.vue'
import VueGtag from 'vue-gtag'
import {_isProd, _GtagID } from '@globals/vars'

createApp(App)
.use(VueGtag, {
    pageTrackerEnabled: true,
    pageTrackerTemplate(to) {
        return {
            page_title: 'Portfolio: Enterprise Design System',
            page_path: to.path
        }
    },
    config: { id: _GtagID },
    enabled: _isProd
})
.mount('#app')