<template>

    <Header />

    <main>

        <NotFound v-if="page.isNotFound" id="404" />

        <Home v-else-if="frontmatter.layout === 'home'" id="home" />

        <Page v-else-if="frontmatter.layout === 'page'">
            <template v-slot:title>{{frontmatter.title}}</template>
        </Page>

        <Article v-else-if="frontmatter.layout === 'article'" id="article" v-bind:links="frontmatter.links">
            <template v-slot:title>{{frontmatter.title}}</template>
            <template v-slot:subtitle>{{frontmatter.subtitle}}</template>
            <template v-slot:date>{{new Date(frontmatter.date).toLocaleString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'})}}</template>
        </Article>

        <Application v-else-if="frontmatter.layout === 'application'" id="application"
            v-bind:video="frontmatter.video"
            v-bind:projects="frontmatter.projects"
            v-bind:logos="frontmatter.logos"
            v-bind:socials="frontmatter.socials">
                <template v-slot:role>{{ frontmatter.role }}</template>
                <template v-slot:company>{{ frontmatter.company }}</template>
        </Application>

        <Portfolio v-else-if="frontmatter.layout === 'portfolio-index'" id="portfolio">
            <template v-slot:title>{{frontmatter.title}}</template>
        </Portfolio>

        <CaseStudy v-else-if="frontmatter.layout === 'portfolio'" id="case-study"
            v-bind:keyProject="frontmatter.keys.project"
            v-bind:keyCompany="frontmatter.keys.company"
            v-bind:nda="frontmatter.nda"
            v-bind:color="frontmatter.hero.color"
            v-bind:hero="frontmatter.hero.image"
            v-bind:title="frontmatter.title"
            v-bind:year="frontmatter.year"
            v-bind:subtitle="frontmatter.subtitle" />

        <Content v-else id="general" />

    </main>

    <Footer />

</template>

<script setup>
    import { useData } from 'vitepress'

    /* components */
    import Header from '@components/Header.vue'
    import Footer from '@components/Footer.vue'
    import NotFound from './404.vue'
    import Page from './page.vue'
    import Article from './article.vue'
    import Application from './application.vue'
    import CaseStudy from './case-study.vue'
    import Portfolio from './portfolio.vue'
    import Home from './home.vue'

    const { page, frontmatter } = useData()
</script>

<style lang="css">
    main {
        /* make sure the main area will always be at least the height of the browser */
        min-height: 100vh;
    }
</style>