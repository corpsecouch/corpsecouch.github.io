<template>
  <PortfolioPage>
    <template v-slot:title>My Wild Kingdom</template>
    <template v-slot:year>2013</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/HoZxKh5Q3CY"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <p>Mutual of Omaha's My Wild Kingdom is a groundbreaking adventure app that brings the wild to any situation. Whatever you can imagine, My Wild Kingdom makes it a reality. Hold a giraffe in your hand, put a giant elephant on the freeway or sneak an alligator into your family portrait. Like the animal kingdom itself, it can adapt to almost any environment.</p>
    </template>

    <template v-slot:awards>
      <ul>
        <li><NewsLink
          url="https://thefwa.com/cases/my-wild-kingdom"
          title="Mobile of the Day - May 6, 2013"
          source="The FWA"></NewsLink></li>
      </ul>
    </template>

    <template v-slot:news>
      <ul>
        <li><NewsLink
          url="https://thefwa.com/article/an-elephant-in-the-room-bringing-mutual-of-omaha"
          title="An Elephant in the Room: Bringing Mutual of Omaha’s Wild Kingdom to Life on Mobile"
          source="The FWA"></NewsLink></li>
        <li><NewsLink
          url="https://www.behance.net/gallery/11159475/My-Wild-Kingdom"
          title="My Wild Kingdom"
          source="Society of Digital Agencies (SoDA)"></NewsLink></li>
      </ul>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsLink from 'components/NewsLink';

  export default {
    name: 'PhenomblueMyWildKingdom',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsLink
    }
  }
</script>

<style scoped lang="scss">

</style>
