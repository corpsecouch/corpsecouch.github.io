<template>
  <PortfolioPage>
    <template v-slot:title>Operation: Dino Dig</template>
    <template v-slot:year>2012</template>
    <template v-slot:company>Phenomblue</template>
    <template v-slot:hero>
      <img src="/portfolio/phenomblue-dino-dig/thumb.png">
    </template>

    <!-- <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/UGvu78DYris"></YouTubeVideo>
    </template> -->

    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/UGvu78DYris"></YouTubeVideo>
      <p>Operation: Dino Dig is a social learning and exploration experience. Utilizing Microsoft Surface 2.0, people use real-world tools to interact with the digital experience and with each other.</p>
    </template>

    <template v-slot:news>
      <NewsList :data="news"></NewsList>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage';
  import YouTubeVideo from '@components/YouTubeVideo';
  import NewsList from '@components/NewsList';
  import { data as newsData } from '@press/press.data';
  import _ from 'lodash';

  export default {
    name: 'PhenomblueDinoDig',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsList
    },

    data () {
      return {
        news: _.filter(newsData, ['project', 'PhenomblueDinoDig'])
      }
    }
  }
</script>