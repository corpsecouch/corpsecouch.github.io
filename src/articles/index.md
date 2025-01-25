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

  // _.each(articles, (article, key) => {
  //   const next = key + 1 < articles.length ? key + 1 : null
  //   article.frontmatter.next = null
  //   if(next != null) {
  //     article.frontmatter.next = {}
  //     article.frontmatter.next.url = articles[next].url
  //     article.frontmatter.next.text = articles[next].frontmatter.title
  //   }

  //   const prev = key - 1 >= 0 ? key - 1 : null
  //   article.frontmatter.prev = null
  //   if(prev != null) {
  //     article.frontmatter.prev = {}
  //     article.frontmatter.prev.url = articles[prev].url
  //     article.frontmatter.prev.text = articles[prev].frontmatter.title
  //   }
  // })

  articles = _.orderBy(data, ['frontmatter.date'], ['desc'])
</script>

<Articles :data="articles"></Articles>