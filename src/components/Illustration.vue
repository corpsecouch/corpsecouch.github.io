<template>
  <div :class="$style.illustration">
    <slot name="image"></slot>
    <img v-if="$props.src" :src="$props.src" />
    <p :class="$style.subtext" v-if="!!$slots.subtext"><slot name="subtext"></slot></p>
  </div>
</template>

<script>

  // TODO: can this be deleted?

  export default {
    name: 'Illustration',
    props: [ 'src' ]
  }
</script>

<style module lang="css">
  .illustration {
    margin-top: 1rem;
    background-color: whitesmoke;
    margin-bottom: 3rem;
    padding: 2rem 2rem 1.5rem 2rem;

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) {
      padding: 1rem;
    }

    img {
      width: 100%
    }

    &:deep(img) {
      width: 100%;
      filter: drop-shadow(0px 2px 0.5rem rgba(0, 0, 0, 0.2));
    }

    p {
      margin: 0.6rem 0 0 0;
    }
  }

  .subtext {
    color: grey;
    font-size: 0.8rem;
    font-style: italic;
    text-align: center;
  }
</style>
