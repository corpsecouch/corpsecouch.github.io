---
layout: page
title: Articles
description: The collection of articles, blog posts, and thought pieces I've written over the years.
---

<script setup>
  import { data } from './articles.data'
  import Articles from '@components/Articles'
  import _ from 'lodash'

  // sort the articles
  let articles = _.orderBy(data, ['frontmatter.date'], ['desc'])

  // group the articles by year
  articles = _.groupBy(articles, (itr) => {
    return new Date(itr.frontmatter.date).getFullYear()
  })

  // grab all the years and sort them
  const years = _.orderBy(Object.keys(articles), (itr) => {
    return Number(itr)
  }, ['desc'])
</script>

<style module>
  h2 {
    text-align: left;
    margin: 3rem 0 0 0;
    line-height: 1.5em;
    font-weight: 500;
    font-size: 1.3rem;
  }
</style>

<div v-for="year in years">
  <h2>{{ year }}</h2>
  <Articles :data="articles[year]"></Articles>
</div>