---
layout: page
title: Articles
description: The collection of articles, blog posts, and thought pieces I've written over the years.
---

<script setup>
  import { data } from './articles.data'
  import Articles from '@components/Articles'
  import _ from 'lodash'

  import { useData, useRoute, useRouter } from 'vitepress'

  const { page } = useData()

  let articles = _.map(data, (article) => {
    article.frontmatter.date = new Date(article.frontmatter.date)

    // remove 'archive' from the url; it's still in there even with a route rewrite
    article.url = `${article.url}`.replace(/archive\//, '')

    // make sure there's a preview object in the frontmatter
    if(!article.frontmatter.preview) article.frontmatter.preview = {}

    // create a full url for the preview image
    if(article.frontmatter.preview.image) article.frontmatter.preview.imageurl = article.url + article.frontmatter.preview.image
    
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