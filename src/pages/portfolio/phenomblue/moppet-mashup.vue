<template>
  <PortfolioPage>
    <template v-slot:title>Moppet Mashup</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/FqURhpK_aCM"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>A large-format interactive social experience, leveraging Microsoft Surface 1.0, for the 2009 Big Omaha conference.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueMoppetMashup',

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
