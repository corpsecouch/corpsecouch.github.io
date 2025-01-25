<template>
  <div :class="$style.item">
    <a v-bind:href="url" target="_blank"><slot name="title"></slot></a>
    <span :class="$style.source"><slot name="source"></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'NewsLink',
    props: [ 'url' ]
  }
</script>

<style module lang="css">
  .item {
    display: inline-flex;
    flex-direction: column;
    border-left: solid 1px #c9d0d9;
    padding-left: 1rem;
  }

  .source {
    display: block;
    font-style: italic;
    font-size: 0.7rem;
    margin-top: 0;
    line-height: 1rem;
  }
</style>
