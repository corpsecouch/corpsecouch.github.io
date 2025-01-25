---
layout: 'page'
title: 'Articles'
---

<script setup>
  import { data } from './articles.data'
  import Articles from '@components/Articles'
  import _ from 'lodash'

  import { useData, useRoute, useRouter } from 'vitepress'

  const { page } = useData()

  let articles = _.map(data, (article) => {
    article.frontmatter.date = new Date(article.frontmatter.date)
    article.url = `${article.url}`.replace(/archive\//, '')
    if(!article.frontmatter.preview) article.frontmatter.preview = {}
    return article
  })

  articles = _.orderBy(data, ['frontmatter.date'], ['desc'])
</script>

<Articles :data="articles"></Articles>