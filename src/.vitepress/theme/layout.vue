<template>

    <Header v-if="frontmatter.layout !== 'home'" />

    <main>

        <NotFound v-if="page.isNotFound" />

        <Page v-else-if="frontmatter.layout === 'home'" />

        <Page v-else-if="frontmatter.layout === 'page'">
            <template v-slot:title>{{frontmatter.title}}</template>
        </Page>

        <!-- <Page v-else-if="frontmatter.layout === 'case study'" /> -->

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
    // import CaseStudy from '../../components/PortfolioPage.vue'

    const { page, frontmatter } = useData()

    // import DefaultTheme from 'vitepress/theme'
    
    // import { useData } from 'vitepress'
    // const { frontmatter } = useData()

    // import { data as pressData } from '../../press/press.data'
    // const press = frontmatter.projectId ? _.filter(newsData, ['project', frontmatter.projectId]) : []
    // console.log(frontmatter.value.Target)
    // console.log(press)

    // const { Layout } = DefaultTheme
</script>