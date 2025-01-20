// https://vitepress.dev/guide/extending-default-theme#customizing-css

import DefaultTheme from 'vitepress/theme'
import CaseStudy from './case-study.vue'

console.log('theme!')

export default {
    extends: DefaultTheme,
    // layout: CaseStudy
    enhanceApp({ app }) {
        app.component('case study', CaseStudy)
    }
}