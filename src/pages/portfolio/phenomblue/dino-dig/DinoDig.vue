<template>
  <PortfolioPage>
    <template v-slot:title>Operation: Dino Dig</template>
    <template v-slot:content>
      <video controls poster="./dino-dig.jpg">
        <source src="./dino-dig.mp4" type="video/mp4">
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
    name: 'PhenomblueDinoDig',

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
