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
</script>

<Articles :data="articles"></Articles>