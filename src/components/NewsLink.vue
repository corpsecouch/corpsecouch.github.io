<template>
  <div class="item">
    <!--<div class="icon">
      <SVGNews />
    </div>-->

    <div class="content">
      <a v-bind:href="url" target="_blank"><slot name="title"></slot></a>
      <span class="source"><slot name="source"></slot></span>
    </div>
  </div>

  <!--<span class="newslink">
    <a v-bind:href="url" target="_blank"><slot name="title"></slot></a>
    <span class="source"><slot name="source"></slot></span>
  </span>-->
</template>

<script>
  //import SVGNews from 'components/SVGNews'

  export default {
    name: 'NewsLink',
    //components: { SVGNews },
    props: [ 'url' ]
  }
</script>

<style scoped lang="scss">
  .item {
    display: inline-flex;
    flex-direction: row;
    column-gap: 1rem;
    //box-shadow: inset 2px 0 0 0 #c9d0d9;
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
