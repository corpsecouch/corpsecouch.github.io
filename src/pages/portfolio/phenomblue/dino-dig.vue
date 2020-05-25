<template>
  <PortfolioPage>
    <template v-slot:title>Operation: Dino Dig</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/UGvu78DYris"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>Operation: Dino Dig is a social learing and exploration experience. Utilizing Microsoft Surface 2.0, people use real-world tools to interact with the digital experience and with each other.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueDinoDig',

    components: {
      PortfolioPage,
      YouTubeVideo
    }
  }
</script>

<style scoped lang="scss">
  h2 {
    margin-top: 3rem !important;
  }
</style>
