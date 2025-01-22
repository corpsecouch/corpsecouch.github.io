<template>

    <Header />

    <main>

        <NotFound v-if="page.isNotFound" />

        <Content class="widthConstrained" v-else />

    </main>

    <Footer />

</template>

<script setup>
    import { useData } from 'vitepress'

    /* components */
    import Header from '@components/Header.vue'
    import Footer from '@components/Footer.vue'
    import NotFound from '@/404.md'

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