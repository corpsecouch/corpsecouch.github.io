<template>
  <div class="widthConstrained">
    <h1 :class="$style.title" v-if="!!$slots.title">
      <slot name="title">Title</slot>
    </h1>
    <Content />
  </div>
</template>

<script>
  export default {
    name: 'Page'
  }
</script>

<style module lang="css">
  /* #page {
    padding-top: 6rem;
  } */

  .title {
    /* font-family: 'Mainstay';
    letter-spacing: normal;
    font-size: 5rem;
    font-weight: normal;
    line-height: 4.5rem;
    text-transform: none; */

    font-family: 'Afacad Flux';
    letter-spacing: 0.1em;
    font-weight: 400;

    text-align: left;
    /* font-weight: 400; */
    /* letter-spacing: normal; */
    font-size: 2.8rem;
    text-transform: none;
    margin: 0 0 1em 0;
  }
</style>
