<template>
  <ul :class="$style.articles">
    <li :class="$style.article" v-for="article in data">
      <div :class="$style.left">
        <a :class="$style.title" :href="article.url">{{ article.frontmatter.title }}</a>
        <p v-if="article.frontmatter.preview.text">{{ article.frontmatter.preview.text }}</p>
        <span :class="$style.date">{{ new Date(article.frontmatter.date).toLocaleString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'}) }}</span>
      </div>
      <img :class="$style.right" v-if="article.frontmatter.preview.imageurl" :src="article.frontmatter.preview.imageurl">
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

  .article p {
    margin: 0;
    font-size: 0.9rem;
  }

  .article {
    display: flex;
    flex-flow: row;
    column-gap: 2rem;
  }

  .left {
    flex-grow: 1;
  }

  .right {
    max-width: 10rem;
    object-fit: cover;
  }

  .title {
    font-weight: 500;
    font-size: 1.1rem;
  }

  .date {
    display: block;
    font-size: 0.9rem;
    font-weight: 300;
  }
</style>
