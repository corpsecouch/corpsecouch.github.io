<template>
  <PortfolioPage>
    <template v-slot:title>Page</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/aUp63-1cNGw"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>PAGE is a beta-released case study introducing one possible enhancement to reading: an immersive tool using digital text, visuals and augmented reality to draw users deeper into the reading experience and break down the "fifth wall" between a technology-saturated generation and literature.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenombluePage',

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
