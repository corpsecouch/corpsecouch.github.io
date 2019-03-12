<template>
  <div id="page">
    <TopNav></TopNav>
    <main>
      <slot></slot>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>

  import TopNav from 'components/TopNav'
  import Footer from 'components/Footer'

  export default {
    name: 'PageTemplate',

    components: {
      TopNav,
      Footer
    }

  }
</script>

<style lang="scss">
  @import "styles/_global";
</style>
