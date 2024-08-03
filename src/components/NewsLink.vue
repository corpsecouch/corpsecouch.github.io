<template>
  <span class="newslink">
    <a v-bind:href="url" target="_blank"><slot name="title"></slot></a>
    <span class="source"><slot name="source"></slot></span>
  </span>
</template>

<script>
  export default {
    name: 'NewsLink',
    props: [
      'url'
    ]
  }
</script>

<style scoped lang="scss">
  .source {
    display: block;
    font-style: italic;
    font-size: 0.7rem;
    margin-top: 0;
    line-height: 1rem;
  }
</style>
