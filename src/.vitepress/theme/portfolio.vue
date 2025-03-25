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
    name: 'Portfolio'
  }
</script>

<style module lang="css">
  .title {
    font-family: 'Afacad Flux';
    letter-spacing: 0.1em;
    font-weight: 400;
    text-align: left;
    font-size: 2.8rem;
    text-transform: none;
    margin: 0 0 1em 0;
  }
</style>