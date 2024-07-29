<template>
  <!--<span><a v-bind:href="url" target="_blank">{{ title }}</a> &mdash; {{ source }}</span>-->
  <span class="newslink"><a v-bind:href="url" target="_blank">{{ title }}</a><span class="source">{{ source }}</span></span>
</template>

<script>

  export default {
    name: 'NewsLink',
    props: [
      'url',
      'title',
      'source'
    ]
  }
</script>

<style scoped lang="scss">
  a {
    //display: block;
  }

  .source {
    display: block;
    font-style: italic;
    font-size: 0.7rem;
    margin-top: 0.25em;
  }
</style>
