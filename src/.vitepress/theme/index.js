// https://vitepress.dev/guide/extending-default-theme#customizing-css

import DefaultTheme from 'vitepress/theme'
import CaseStudy from './case-study.vue'
import './styles.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('case study', CaseStudy)
    }
}