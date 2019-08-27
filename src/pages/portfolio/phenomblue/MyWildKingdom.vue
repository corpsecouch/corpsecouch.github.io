<template>
  <PortfolioPage>
    <template v-slot:title>My Wild Kingdom</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/HoZxKh5Q3CY"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>Mutual of Omaha's My Wild Kingdom is a groundbreaking adventure app that brings the wild to any situation. Whatever you can imagine, My Wild Kingdom makes it a reality. Hold a giraffe in your hand, put a giant elephant on the freeway or sneak an alligator into your family portrait. Like the animal kingdom itself, it can adapt to almost any environment.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueMyWildKingdom',

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
