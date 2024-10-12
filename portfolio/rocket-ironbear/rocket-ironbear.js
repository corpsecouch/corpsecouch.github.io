import { createApp } from 'vue'
import App from './Rocket-Ironbear.vue'
import VueGtag from 'vue-gtag'
import {_isProd, _GtagID } from '@globals/vars'

createApp(App)
.use(VueGtag, {
    pageTrackerTemplate(to) {
        return {
            page_title: document.title,
            page_path: to.path
        }
    },
    config: { id: _GtagID },
    enabled: _isProd
})
.mount('#app')