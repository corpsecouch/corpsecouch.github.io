<template>
  <fragment>
    <!--<p>Experience design that looks around corners.</p>-->
    <div class="sticky-spacer top"></div>
    <h1><slot></slot></h1>
    <div class="sticky-spacer bottom"></div>
  </fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment'

  export default {
    name: 'SmallMasthead',

    components: {
      Fragment
    }
  }
</script>

<style scoped lang="scss">
  h1 {
    background-color: $color-background-dark;
    position: sticky;
    top: 0;
    z-index: $z-title;
    padding: 2rem 0;

    color: $color-text-light;
    font-size: 1.3rem;
    @include font-raleway;
    font-size: 200;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
  }

  .sticky-spacer {
    background-color: $color-background-dark;

    &.top {
      height: 10vh;
    }

    &.bottom {
      height: 10vh + -($portfolio-offset);
    }
  }
</style>
