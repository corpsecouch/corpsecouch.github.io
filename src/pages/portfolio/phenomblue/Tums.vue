<template>
  <PortfolioPage>
    <template v-slot:title>TUMS: Food Fight</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/6IP0BH-Tfwg"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>Phenomblue created the TUMS Food Fight experience, a Facebook app to identify and engage brand advocates with customized play.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueTums',

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
