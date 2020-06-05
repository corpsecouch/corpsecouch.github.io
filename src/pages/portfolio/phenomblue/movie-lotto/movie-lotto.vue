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
      <ul>
        <li><NewsLink
          url="https://www.mediapost.com/publications/article/170926/best-integrated-with-a-mobile-device-movie-lotto.html"
          title="Best Integrated with a Mobile Device: Movie Lotto, Phenomblue"
          source="MediaPost"></NewsLink></li>
        <li><NewsLink
          url="https://siliconprairienews.com/2012/03/phenomblue-think-tank-produces-movie-lotto-daydreamer/"
          title="Phenomblue think tank produces Movie Lotto, Daydreamer"
          source="Silicon Prairie News"></NewsLink></li>
      </ul>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsLink from 'components/NewsLink';

  export default {
    name: 'PhenomblueMovieLotto',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsLink
    }
  }
</script>

<style scoped lang="scss">

</style>
