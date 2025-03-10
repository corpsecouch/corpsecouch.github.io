<template>
  <ul :class="$style.articles">
    <li :class="$style.article" v-for="item in data">
      <NewsLink :url="item.url">
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:source>{{ item.pub }}</template>
      </NewsLink>
    </li>
  </ul>
</template>

<script>
  import NewsLink from './NewsLink.vue';

  export default {
    name: 'NewsList',

    components: {
      NewsLink
    },

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

  .article + .article { margin-top: 1rem; }
</style>
