<template>

    <section :style="{'background-color': frontmatter.hero.color}">
      <div>
        <section id="hero">
          <img :src="frontmatter.hero.image">
        </section>
        <div class="wrapper">
            <h1>{{ frontmatter.hero.title }}</h1>
            <p>{{ frontmatter.hero.subtitle }}</p>
            <span id="company">{{ frontmatter.hero.company }}</span>
            <span id="year">{{ frontmatter.hero.year }}</span>
        </div>
      </div>
    </section>
    
    <Content />
</template>

<script setup>
    // import DefaultTheme from 'vitepress/theme'
    
    import { useData } from 'vitepress'
    const { frontmatter } = useData()

    // import { data as pressData } from '../../press/press.data'
    // const press = frontmatter.projectId ? _.filter(newsData, ['project', frontmatter.projectId]) : []
    // console.log(frontmatter.value.Target)
    // console.log(press)

    // const { Layout } = DefaultTheme
</script>