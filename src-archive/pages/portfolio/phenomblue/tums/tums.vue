<template>
  <PortfolioPage>
    <template v-slot:title>TUMS: Food Fight</template>
    <template v-slot:year>2012</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/6IP0BH-Tfwg"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <!-- https://www.behance.net/gallery/2828225/Tums-Food-Fight -->
      <!-- https://www.youtube.com/watch?v=dWkjyXX5whA -->
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

</style>
