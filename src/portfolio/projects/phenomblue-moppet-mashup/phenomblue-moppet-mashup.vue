<template>
  <PortfolioPage>
    <template v-slot:title>Moppet Mashup</template>
    <template v-slot:company>Phenomblue</template>
    <template v-slot:year>2009</template>

    <template v-slot:hero>
      <img src="/portfolio/phenomblue-moppet-mashup/thumb.png">
    </template>

    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/FqURhpK_aCM"></YouTubeVideo>
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
  import { data as newsData } from '@press/press.data';
  import NewsList from '@components/NewsList';
  import AwardList from '@components/AwardList.vue';
  import {data as awardData } from '@awards/awards.data';
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