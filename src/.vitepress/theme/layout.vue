<template>

    <Header />

    <main>

        <NotFound v-if="page.isNotFound" />

        <Page v-else-if="frontmatter.layout === 'home'" />

        <Page v-else-if="frontmatter.layout === 'page'">
            <template v-slot:title>{{frontmatter.title}}</template>
        </Page>

        <Article v-else-if="frontmatter.layout === 'article'" v-bind:medium="frontmatter.medium" v-bind:substack="frontmatter.substack">
            <template v-slot:title>{{frontmatter.title}}</template>
            <template v-slot:subtitle>{{frontmatter.subtitle}}</template>
            <template v-slot:date>{{new Date(frontmatter.date).toLocaleString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'})}}</template>
        </Article>

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

    const { page, frontmatter } = useData()
</script>