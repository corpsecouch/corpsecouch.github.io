<template>
  <PortfolioPage>
    <template v-slot:title>Moppet Mashup</template>
    <template v-slot:company>Phenomblue</template>
    <template v-slot:year>2009</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/FqURhpK_aCM"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <p>A large-format interactive social experience, leveraging Microsoft Surface 1.0, for the 2009 Big Omaha conference.</p>
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

  const name = 'PhenomblueMoppetMashup';

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
