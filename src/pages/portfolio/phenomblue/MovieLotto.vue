<template>
  <PortfolioPage>
    <template v-slot:title>Movie Lotto</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/_l6rD1AM4qo"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>Movie Lotto is a casual, multi-user, multi-screen gaming platform for movie theaters to provide next-level interactive entertainment before a movie begins.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueMovieLotto',

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
