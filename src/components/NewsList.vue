<template>
  <ul>
    <li v-for="item in data">
      <NewsLink :url="item.url">
        <template v-slot:title>{{ item.title }}</template>
        <template v-slot:source>{{ item.pub }}</template>
      </NewsLink>
    </li>
  </ul>
</template>

<script>
  import NewsLink from './/NewsLink.vue';

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

<style scoped lang="css">
  ul {
    list-style: none;
    margin: 0;

    li {
      & + li { margin-top: 1rem; }
    }
  }
</style>
