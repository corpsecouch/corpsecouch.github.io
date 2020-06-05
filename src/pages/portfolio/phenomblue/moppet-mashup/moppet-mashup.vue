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
      <ul>
        <li><NewsLink
          url="https://www.webbyawards.com/winners/2010/advertising-media/individual-categories/mobile-experience-marketing/moppet-mashup-live/?/"
          title="2010 Honoree"
          source="The Webby Awards"></NewsLink></li>
      </ul>
    </template>

    <template v-slot:news>
      <ul>
        <li><NewsLink
          url="https://www.adeevee.com/2009/05/big-omaha-conference-moppet-mashup-design/"
          title="Big Omaha Conference: Moppet Mashup"
          source="adeevee"></NewsLink></li>
        <li><NewsLink
          url="https://vimeo.com/channels/nui/4696222"
          title="Moppet Mashup"
          source="NUI (Natual User Interface)"></NewsLink></li>
      </ul>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsLink from 'components/NewsLink';

  export default {
    name: 'PhenomblueMoppetMashup',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsLink
    }
  }
</script>

<style scoped lang="scss">

</style>
