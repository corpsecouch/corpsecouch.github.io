<template>
  <PortfolioPage>
    <template v-slot:title>Fantastic Future Me</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/SuEXRBP5ihY"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>Fantastic Future Me is a kiosk-style interactive museum exhibit. It encourages kids to match their interests and aspirations to create a one-of-a-kind Future Me. Fantastic Future Me is permanent exhibit at the Omaha Children's Museum which is the second highest attended arts and cultural institution in Nebraska. Kids enjoy this exhibit once every 81 seconds!</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueFantasticFutureMe',

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
