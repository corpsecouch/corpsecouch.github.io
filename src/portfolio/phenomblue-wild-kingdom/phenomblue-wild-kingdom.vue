<template>
  <PortfolioPage pcolor="wheat">
    <template v-slot:title>My Wild Kingdom</template>
    <template v-slot:year>2013</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <img src="@assets/portfolio/phenomblue/wild-kingdom/preview.png">
    </template>

    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/HoZxKh5Q3CY"></YouTubeVideo>
      <p>Mutual of Omaha's My Wild Kingdom is a groundbreaking adventure app that brings the wild to any situation. Whatever you can imagine, My Wild Kingdom makes it a reality. Hold a giraffe in your hand, put a giant elephant on the freeway or sneak an alligator into your family portrait. Like the animal kingdom itself, it can adapt to almost any environment.</p>
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

  const name = 'PhenomblueMyWildKingdom';

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
