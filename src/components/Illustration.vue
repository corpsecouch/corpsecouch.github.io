<template>
  <div class="illustration">
    <img :src="imagesrc">
    <p class="subtext" v-if="!!this.$slots.subtext"><slot name="subtext"></slot></p>
  </div>
</template>

<script>
  export default {
    name: 'Illustration',
    props: [ 'imagesrc' ]
  }
</script>

<style scoped lang="css">
  .illustration {
    margin-bottom: 3rem;
    padding: 1rem;
  }

  img {
    width: 100%;
    margin-top: 1rem;
  }

  .subtext {
    color: grey;
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
    margin-top: 0.5rem;
  }
</style>
