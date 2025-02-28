<template>

    <Header />

    <main>

        <NotFound v-if="page.isNotFound" />

        <Page v-else-if="frontmatter.layout === 'home'" />

        <Page v-else-if="frontmatter.layout === 'page'">
            <template v-slot:title>{{frontmatter.title}}</template>
        </Page>

        <Article v-else-if="frontmatter.layout === 'article'" v-bind:links="frontmatter.links">
            <template v-slot:title>{{frontmatter.title}}</template>
            <template v-slot:subtitle>{{frontmatter.subtitle}}</template>
            <template v-slot:date>{{new Date(frontmatter.date).toLocaleString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'})}}</template>
        </Article>

        <Application v-else-if="frontmatter.layout === 'application'" v-bind:video="frontmatter.video">
            <template v-slot:role>{{ frontmatter.role }}</template>
            <template v-slot:company>{{ frontmatter.company }}</template>
        </Application>

        <Content v-else />

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

    const { page, frontmatter } = useData()
</script>