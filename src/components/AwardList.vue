<template>
  <ul :class="$style.awards">
    <li :class="$style.award" v-for="item in data">
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
  import AwardItem from './AwardItem.vue'

  export default {
    name: 'AwardList',

    components: { AwardItem },

    props: [ 'data' ]
  }
</script>

<style module lang="css">
  .awards {
    list-style: none;
    margin: 0;
  }

  .award + .award { margin-top: 1rem; }
</style>
