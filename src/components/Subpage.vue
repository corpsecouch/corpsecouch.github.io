<template>
    <h1 id="page-title" v-if="!!$slots.title"><slot name="title">Title</slot></h1>
    <slot></slot>
</template>

<script>

  // TODO: can this be deleted?

  export default {
    name: 'Subpage'
  }
</script>

<style scoped lang="css">
  #page {
    padding-top: 6rem;
  }

  #page-title {
    font-family: 'Mainstay';
    letter-spacing: normal;
    font-size: 5rem;
    font-weight: normal;
    line-height: 4.5rem;
    text-transform: none;
  }
</style>
