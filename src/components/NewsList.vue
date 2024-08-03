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
  import NewsLink from 'components/NewsLink';

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

<style scoped lang="scss">
  ul {
    list-style: none;
    margin: 0;

    li {
      box-shadow: inset 2px 0 0 0 #c9d0d9;
      padding-left: 1rem;

      + li { margin-top: 1rem; }
    }
  }
</style>
