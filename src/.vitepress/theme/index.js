// https://vitepress.dev/guide/extending-default-theme#customizing-css

import Layout from './layout.vue'

/* ************************* */
/* *** global components *** */
/* ************************* */

import YouTubeVideo from '@components/YouTubeVideo.vue'

/* ********************* */
/* *** global styles *** */
/* ********************* */

import './variables.css'
import './styles.css'

export default {

    // set the global layout
    Layout: Layout,

    // register global components
    enhanceApp({ app }) {
        app.component('Video', YouTubeVideo)
    }
}