// https://vitepress.dev/guide/extending-default-theme#customizing-css

import Layout from './layout.vue'

/* components */
import YouTubeVideo from '@components/YouTubeVideo.vue'
// import Illustration from '@components/Illustration.vue'

/* styles */
import './variables.css'
import './styles.css'

export default {
    Layout: Layout,
    enhanceApp({ app }) {
        app.component('Video', YouTubeVideo)
        // app.component('Illustration', Illustration)
    }
}