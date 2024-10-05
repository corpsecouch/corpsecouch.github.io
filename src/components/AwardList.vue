<template>
  <ul>
    <li v-for="item in data">
      <AwardItem :url="item.url">
        <template v-slot:award>{{ item.award }}</template>
        <template v-slot:for>{{ item.for }}</template>
        <template v-slot:org>{{ item.org }}</template>
        <template v-slot:when>{{ item.date.year }}</template>
      </AwardItem>
    </li>
  </ul>
</template>

<script>
  import AwardItem from '/src/components/AwardItem';

  export default {
    name: 'AwardList',

    components: {
      AwardItem
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
