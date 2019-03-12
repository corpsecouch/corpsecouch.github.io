<template>
  <main>

    <section>
      <div class="container">
        <slot></slot>
      </div>
    </section>

    <Footer></Footer>

  </main>
</template>

<script>
  import Footer from 'components/Footer'

  export default {
    name: 'PortfolioPage',

    components: {
      Footer
    }
  }
</script>

<style scoped lang="scss">
  section {
    width: 100%;
    padding-top: 10rem;
  }

  .container {
    box-sizing: border-box;
    max-width: 990px;
    margin: 0 auto;

    @include screen-xl { width: 940px; }
    @include screen-lg { width: 720px; }
    @include screen-md { width: 86%; }
    @include screen-sm { width: 90%; }
  }
</style>
