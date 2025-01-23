---
layout: 'page'
title: 'Articles'
---

<script setup>
  import { data } from './articles.data'
  import Articles from '@components/Articles'
  import _ from 'lodash'

  let articles = _.map(data, (article) => {
    article.frontmatter.date = new Date(article.frontmatter.date)
    return article
  })

  articles = _.orderBy(data, ['frontmatter.date'], ['desc'])
</script>

<Articles :data="articles"></Articles>