<template>
  <PortfolioPage>
    <template v-slot:title>Fantastic Future Me</template>
    <template v-slot:year>2012</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/SuEXRBP5ihY"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <p>Fantastic Future Me is a kiosk-style interactive museum exhibit. It encourages kids to match their interests and aspirations to create a one-of-a-kind Future Me. Fantastic Future Me is permanent exhibit at the Omaha Children's Museum which is the second highest attended arts and cultural institution in Nebraska. Kids enjoy this exhibit once every 81 seconds!</p>
    </template>

    <template v-slot:news>
      <NewsList :data="news"></NewsList>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsList from 'components/NewsList';
  import newsData from 'data/news-coverage';

  export default {
    name: 'PhenomblueFantasticFutureMe',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsList
    },

    data() {
      return {
        news: _.filter(newsData, ['project', 'PhenomblueFantasticFutureMe'])
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
