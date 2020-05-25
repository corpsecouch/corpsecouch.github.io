<template>
  <section>
    <!--<p>Experience design that looks around corners.</p>-->
    <slot></slot>
    <MoreContentCaret id="caret"></MoreContentCaret>
  </section>
</template>

<script>

  import MoreContentCaret from 'components/MoreContentCaret';

  export default {
    name: 'BigMasthead',

    components: {
      MoreContentCaret
    }
  }
</script>

<style scoped lang="scss">
  section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    color: $color-text-light;
    background-color: $color-background-dark;
    font-size: 1.3rem;//1.625rem;
    @include font-raleway;
    font-size: 200;
    letter-spacing: 0.2em; // 20%-ish?
    text-transform: uppercase;

    /*p {
      width: 50%;
      @include font-raleway;
      font-size: 2.8rem;
      font-weight: 200;
      letter-spacing: 0.4em;
      line-height: 3.4rem;
    }*/
  }

  #caret {
    position: absolute;
    bottom: 1rem;
    animation-name: example;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes example {
    0% {
      bottom: 2.5rem;
      opacity: 0;
      filter: blur(3px);
    }

    50% {
      opacity: 1;
      filter: blur(0px);
    }

    100% {
      opacity: 0;
      filter: blur(3px);
    }
  }
</style>
