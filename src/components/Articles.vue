<template>
  <ul :class="$style.articles">
    <li :class="$style.article" v-for="article in data">
      <a :class="$style.title" :href="article.url">{{ article.frontmatter.title }}</a>
      <span :class="$style.date">{{ new Date(article.frontmatter.date).toLocaleString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'}) }}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Articles',
    props: [
      'data'
    ]
  }
</script>

<style module lang="css">
  .articles {
    list-style: none;
    margin: 0;
  }

  .article + .article {
    margin-top: 2rem;
  }

  .title {
    font-weight: 400;
    font-size: 1.1rem;
  }

  .date {
    display: block;
    font-size: 0.9rem;
  }
</style>
