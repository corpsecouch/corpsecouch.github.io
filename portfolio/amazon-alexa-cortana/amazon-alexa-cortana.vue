<template>
  <PortfolioPage nda="true" pcolor="lightsalmon">
    <template v-slot:title>Alexa + Cortana</template>
    <template v-slot:subtitle>The world's first AI assistant interoperability between two big-tech competitors.</template>
    <template v-slot:year>2017 - 2018</template>
    <template v-slot:company>Amazon</template>
    <template v-slot:hero>
      <!-- <img src="@assets/portfolio/amazon/alexa-cortana/alexa-cortana.png"> -->
      <img src="@assets/portfolio/amazon/alexa-cortana/thumb.png">
    </template>

    <template v-slot:challenge>
      <p>Both Amazon and Microsoft wanted to scale their AI assistants – more capabilities, more users, more developers. Jeff and Satya saw that bringing Alexa and Cortana together could accomplish this. A one-of-a-kind partnership between Amazon and Microsoft was established to figure this out.</p>
    </template>

    <template v-slot:process>
      <p>This was more than just connecting APIs or bringing Alexa's jokes and shopping to Cortana. This was about enabling two competitive AIs to work together for the benefit of the end-user. There were four key challenges I needed to overcome to figure this out:</p>
      <h4>Vision</h4>
      <p>This was going to be the beginning of a new modality for Alexa and a new, innovative line of business. I needed to craft a compelling vision for a program, not just a product.</p>
      <Illustration :imagesrc="require('@assets/portfolio/amazon/alexa-cortana/image1.jpg')">
        <template v-slot:subtext>Peeking around the corner of what interoperable A.I.'s could unlock.</template>
      </Illustration>
      <h4>AI Orchestration</h4>
      <p>How do two AIs work together? How do you know what to do when you switch between them? How do you not lose track of which one you're talking to? These are fundamental questions. I needed to design how people interact with multiple AIs through the same interface.</p>
      <Illustration :imagesrc="require('@assets/portfolio/amazon/alexa-cortana/image3.jpg')">
        <template v-slot:subtext>A peek at the extensive user testing.</template>
      </Illustration>
      <h4>Scale</h4>
      <p>Each AI assitant has it's own modalities, technical restrictions, and design systems. I needed a way to translate existing experiences from one AI to the other and do it at scale.</p>
      <h4>Holistic Approach</h4>
      <p>Each AI assistant is intrinsically tied to its hardware. There was a large tech stack gap across the hardware and software between the AIs. I needed to look holistally across both hardware and software to create a successful product and program.</p>
      <Illustration :imagesrc="require('@assets/portfolio/amazon/alexa-cortana/image2.jpg')">
        <template v-slot:subtext>A peek at the blueprints of a multi-agent experience.</template>
      </Illustration>
    </template>

    <template v-slot:outcome>
      <p>The launch of Alexa + Cortana scaled the availability of both AIs to more than one billion endpoints. Developers could now develop on one AI but launch for both simultaneously with no additional effort. It provided the foundation for other AI interoperability programs including Alexa Auto, Alexa for PC, and the Alexa integration with Facebook Portal.</p>
      <YouTubeVideo src="https://www.youtube.com/embed/Ezxch4rykzI"></YouTubeVideo>
    </template>

    <template v-slot:role>
      <p>I was the head of design for the program spanning both Amazon and Microsoft. I led cross-functional teams across both companines.</p>
    </template>

    <template v-slot:news>
      <NewsList :data="news"></NewsList>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage';
  import YouTubeVideo from '@components/YouTubeVideo';
  import newsData from '@data/news-coverage';
  import NewsList from '@components/NewsList';
  import Illustration from '@components/Illustration';
  import _ from 'lodash';

  export default {
    name: 'AmazonAlexaCortana',

    components: {
      PortfolioPage,
      YouTubeVideo,
      NewsList,
      Illustration
    },

    data() {
      return {
        news: _.filter(newsData, ['project', 'AmazonAlexaCortana'])
      }
    }
  }
</script>

<style scoped lang="css">

</style>
