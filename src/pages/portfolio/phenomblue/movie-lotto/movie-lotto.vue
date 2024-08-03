<template>
  <PortfolioPage>
    <template v-slot:title>Movie Lotto</template>
    <template v-slot:year>2012</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/_l6rD1AM4qo"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <p>Movie Lotto is a casual, multi-user, multi-screen gaming platform for movie theaters to provide next-level interactive entertainment before a movie begins.</p>
    </template>

    <template v-slot:awards>
      <ul>
        <li><NewsLink
          url=""
          title="2012 Digital Out-of-Home Awards Finalist"
          source="MediaPost"></NewsLink></li>
      </ul>
    </template>

    <template v-slot:news>
      <NewsList :data="news"></NewsList>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsLink from 'components/NewsLink';
  import newsData from 'data/news-coverage';
  import NewsList from 'components/NewsList';

  export default {
    name: 'PhenomblueMovieLotto',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsList
    },

    data() {
      return {
        news: _.filter(newsData, ['project', 'PhenomblueMovieLotto'])
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
