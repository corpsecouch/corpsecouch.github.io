<template>
  <PortfolioPage>
    <template v-slot:title>Fantastic Future Me</template>
    <template v-slot:year>2012</template>
    <template v-slot:company>Phenomblue</template>

    <template v-slot:hero>
      <YouTubeVideo src="https://www.youtube.com/embed/SuEXRBP5ihY"></YouTubeVideo>
    </template>

    <template v-slot:content>
      <p>Fantastic Future Me is a kiosk-style interactive museum exhibit. It encourages kids to match their interests and aspirations to create a one-of-a-kind Future Me. Fantastic Future Me is permanent exhibit at the Omaha Children's Museum which is the second highest attended arts and cultural institution in Nebraska. Kids enjoy this exhibit once every 81 seconds!</p>
    </template>

    <template v-slot:news>
      <ul>
        <li><NewsLink
          url="http://www.ocm.org/exhibits-and-events/permanent-exhibits/fantastic-future-me/"
          title="Fantastic Future Me"
          source="Omaha Childrens Museum"></NewsLink></li>
        <li><NewsLink
          url="https://books.google.com/books?id=ThcHBAAAQBAJ&pg=PA192&lpg=PA192&dq=phenomblue+fantastic+future+me&source=bl&ots=mwswQHIPTd&sig=ACfU3U3lUJYquuu6uJv4KSsmy6BnGVu6iA&hl=en&sa=X&ved=2ahUKEwjKsKaHj9_pAhVRLX0KHb9YAJkQ6AEwAnoECAoQAg#v=onepage&q=phenomblue%20fantastic%20future%20me&f=false"
          title="Making Hope Happen: Create the Future You Want for Yourself and Others"
          source="Google Books"></NewsLink></li>
        <li><NewsLink
          url="https://myemail.constantcontact.com/News-Release--Future-Me-Exhibit-Opening-Next-Week.html?soid=1011257236026&aid=k58hW7TGGq0"
          title="New Fantastic Future Me Exhibit Builds Hope in Children"
          source="Omaha Childrens Museum"></NewsLink></li>
        <!--<li><NewsLink
          url="http://fantasticfutureme.com/"
          title="Fantastic Future Me (homepage)"
          source="Omaha Childrens Museum"></NewsLink></li>-->
      </ul>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';
  import NewsLink from 'components/NewsLink';

  export default {
    name: 'PhenomblueFantasticFutureMe',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsLink
    }
  }
</script>

<style scoped lang="scss">

</style>
