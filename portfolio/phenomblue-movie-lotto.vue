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
      <AwardList :data="awards"></AwardList>
    </template>

    <template v-slot:news>
      <NewsList :data="news"></NewsList>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage';
  import YouTubeVideo from '@components/YouTubeVideo';
  import newsData from '@data/news-coverage';
  import NewsList from '@components/NewsList';
  import AwardList from '@components/AwardList.vue';
  import awardData from '@data/awards';
  import _ from 'lodash';

  const name = 'PhenomblueMovieLotto';

  export default {
    name: name,

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsList,
      AwardList
    },

    data() {
      return {
        news: _.filter(newsData, ['project', name]),
        awards: _.filter(awardData, ['project', name])
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
