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
    /* margin-bottom: 3rem;
    padding: 1rem; */
    margin-top: 1rem;
    background-color: whitesmoke;
    margin-bottom: 3rem;
    padding: 2rem 2rem 1.5rem 2rem;

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) {
      padding: 1rem;
    }
  }

  img {
    width: 100%;
    /* margin-top: 1rem; */
    filter: drop-shadow(0px 2px 0.5rem rgba(0, 0, 0, 0.2));
  }

  .subtext {
    color: grey;
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
    /* margin-top: 0.5rem; */
  }
</style>
