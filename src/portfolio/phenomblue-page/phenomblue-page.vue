<template>
  <PortfolioPage>
    <template v-slot:title>Page</template>
    <template v-slot:year>2013</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <img src="@assets/portfolio/phenomblue/page/preview.png">
    </template>

    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/aUp63-1cNGw"></YouTubeVideo>
      <p>PAGE is a beta-released case study introducing one possible enhancement to reading: an immersive tool using digital text, visuals and augmented reality to draw users deeper into the reading experience and break down the "fifth wall" between a technology-saturated generation and literature.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage';
  import YouTubeVideo from '@components/YouTubeVideo';

  export default {
    name: 'PhenombluePage',

    components: {
      PortfolioPage,
      YouTubeVideo
    }
  }
</script>

<style scoped lang="css">

</style>
