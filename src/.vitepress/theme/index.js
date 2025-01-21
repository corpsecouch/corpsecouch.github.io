// https://vitepress.dev/guide/extending-default-theme#customizing-css

// import DefaultTheme from 'vitepress/theme-without-fonts'
// import CaseStudy from './case-study.vue'
// import Page from './page.vue'
import Layout from './layout.vue'
// import './styles.css'

export default {
    // extends: DefaultTheme,
    Layout: Layout,
    // enhanceApp({ app }) {
        // app.component('case study', CaseStudy)
        // app.component('subpage', Page)
    // }
}