<template>
  <PortfolioPage>
    <template v-slot:title>Microsoft Genesis</template>
    <template v-slot:content>
      <YouTubeVideo src="https://www.youtube.com/embed/JkaGrZDk_RY"></YouTubeVideo>
      <h2>What is it?</h2>
      <p>Genesis is a 3D, real-time, multi-person space simulator created specifically for the Microsoft Surface 1.0.</p>
      <!--<h2>Why do it?</h2>
      <p>TK</p>
      <h2>What was my role?</h2>
      <p>TK</p>
      <h2>What did I do?</h2>
      <p>TK</p>-->
      <h2>What was the outcome?</h2>
      <ul>
        <li>Debuted in 2009 at the South by Southwest (SXSW) Interactive Festival</li>
        <li>Featured chroma-depth 3D with custom designed 3D glasses</li>
        <li>Designed an innovative menu sytem</li>
      </ul>

      <!--Microsoft Surface 1.0 enables multiple users to use touch and real world objects to simultaneously manipulate and interact with digital content. This makes it the ideal experience platform for trade shows, lobbies and other social environments. To help promote and showcase the capabilities of Surface, Phenomblue debuted Genesis at the Silverlight/Microsoft demo area during SXSW Interactive 2009. Genesis is a Surface chroma-depth 3D app that lets users create their own universe.

Partnering with Microsoft, we designed custom ChromaDepth 3D glasses and distributed them to attendees who wanted to try their hand at collaboratively creating a galaxy from scratch. It was a massive hit on the show floor.

We developed a custom menu system that was intuitive and complemented the experience. Multiple users could create a virtual galaxy, complete with real world physics including Suns, planets, solar wind and space dust. Genesis was designed strategically for several users to interact at once – at SXSW, we saw five to six people interacting with the Surface at once throughout the day.-->
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'PhenomblueGenesis',

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
