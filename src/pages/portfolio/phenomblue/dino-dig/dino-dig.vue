<template>
  <PortfolioPage>
    <template v-slot:title>Operation: Dino Dig</template>
    <template v-slot:year>2012</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/UGvu78DYris"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <p>Operation: Dino Dig is a social learning and exploration experience. Utilizing Microsoft Surface 2.0, people use real-world tools to interact with the digital experience and with each other.</p>
    </template>

    <template v-slot:news>
      <ul>
        <li><NewsLink
          url="https://www.sixteen-nine.net/2012/03/05/dse2012-phenomblue-interactive-surface-to-lost-wages/"
          title="DSE2012: PhenomBlue Bringing Interactive Surface To Las Vegas"
          source="sixteen-nine"></NewsLink></li>
      </ul>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsLink from 'components/NewsLink';

  export default {
    name: 'PhenomblueDinoDig',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsLink
    }
  }
</script>

<style scoped lang="scss">

</style>
