<template>
    <NotFound v-if="page.isNotFound" />
    <Content v-else />
    <footer class="divider">
      Built from scratch with care.
      <span id="copyright">&copy; Jason Bejot</span>
    </footer>
</template>

<script setup>
    import { useData } from 'vitepress'
    import NotFound from '../../404.md'
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