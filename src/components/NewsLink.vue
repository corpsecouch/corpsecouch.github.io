<template>
  <div class="item">
    <div class="content">
      <a v-bind:href="url" target="_blank"><slot name="title"></slot></a>
      <span class="source"><slot name="source"></slot></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewsLink',
    props: [ 'url' ]
  }
</script>

<style scoped lang="css">
  .item {
    display: inline-flex;
    flex-direction: row;
    column-gap: 1rem;
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
