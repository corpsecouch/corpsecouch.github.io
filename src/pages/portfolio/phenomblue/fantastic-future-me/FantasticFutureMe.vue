<template>
  <PortfolioPage>
    <template v-slot:title>Fantastic Future Me</template>
    <template v-slot:content>
      <video controls poster="./fantastic-future-me.jpg">
        <source src="./fantastic-future-me.mp4" type="video/mp4">
        <p>Your browser does not support the video tag.</p>
      </video>
      <h2>What is it?</h2>
      <p>TK</p>
      <h2>Why do it?</h2>
      <p>TK</p>
      <h2>What was my role?</h2>
      <p>TK</p>
      <h2>What did I do?</h2>
      <p>TK</p>
      <h2>What was the outcome?</h2>
      <ul>
        <li>TK</li>
      </ul>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'PhenomblueFantasticFutureMe',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">
  img, video {
    margin-bottom: 3rem;
    width: 100%;
  }
</style>
