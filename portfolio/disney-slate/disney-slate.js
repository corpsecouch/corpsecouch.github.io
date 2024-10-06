import { createApp } from 'vue'
import App from './disney-slate.vue'
import VueGtag from 'vue-gtag'
import {_isProd, _GtagID } from '@globals/vars'

createApp(App)
.use(VueGtag, {
    config: { id: _GtagID },
    enabled: _isProd
})
.mount('#app')