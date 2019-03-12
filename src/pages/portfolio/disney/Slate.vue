<template>
  <PortfolioPage>
    <router-link :to="{ name: 'portfolio' }">Back</router-link>
    <header>Disney Studios Slate</header>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage'

  export default {
    name: 'DisneySlate',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">
  p, ul {
    padding-top: 1.8em;
    line-height: 1.5em;
  }

  ul {
    margin-left: 1em;
  }

  header {
    font-size: 2.4em;
    font-weight: 300;
    line-height: 1.2;
    padding-bottom: 1em;

    + p {
      padding: 0;
    }
  }
</style>
