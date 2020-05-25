<template>
  <Page>

      <SmallMasthead>
        <slot name="title"></slot>
      </SmallMasthead>

      <section id="wrapper" class="content">
        <!--<div id="masthead"><slot name="masthead"></slot></div>
        <div id="content"><slot name="content"></slot></div>-->
        <slot name="content"></slot>
      </section>

  </Page>
</template>

<script>
  import Page from 'components/PageTemplate'
  import SmallMasthead from 'components/SmallMasthead'

  export default {
    name: 'PortfolioPage',

    components: {
      Page,
      SmallMasthead
    }
  }
</script>

<style scoped lang="scss">
  #wrapper {
    position: relative;
    top: $portfolio-offset;
    //top: -1.5rem;
    @include screen-small { top: 0; }
    //background-color: $color-background-light;
    //padding: 3rem 0;
  }

  .content {
    width: 70%;
    @include screen-large { width: 770px; }
  }

  /*#masthead {
    width: 70%;
    margin: auto;
    @include screen-small { width: 100%; }
  }*/

  /*#title {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-background-dark;
  }*/

  /*#title-background {
    height: 42vh;
    background-color: $color-background-dark;
  }

  #title {
    padding-bottom: 4vh;
    color: $color-text-light;
    font-size: 1.3rem;
    @include font-raleway;
    font-size: 200;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    text-align: center;
    position: sticky;
    top: 10rem;
  }*/

  /*#content {
    width: 70%;
    @include screen-small { width: 90%; }
    margin: auto;
    padding: 3rem 0;
  }*/
</style>
