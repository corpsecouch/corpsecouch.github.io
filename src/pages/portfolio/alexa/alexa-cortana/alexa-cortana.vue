<template>
  <PortfolioPage nda="true">
    <template v-slot:title>Alexa + Cortana</template>
    <template v-slot:subtitle>The world's first AI assistant interoperability between two big-tech competitors.</template>
    <template v-slot:year>2017 - 2018</template>
    <template v-slot:company>Amazon</template>
    <template v-slot:hero>
      <img src="./alexa-cortana.png">
    </template>

    <template v-slot:challenge>
      <p>Both Amazon and Microsoft wanted to scale their AI assistants – more capabilities, more users, more developers. Jeff and Satya saw that bringing Alexa and Cortana together could accomplish this. A one-of-a-kind partnership between Amazon and Microsoft was established to figure this out.</p>
    </template>

    <template v-slot:process>
      <p>This was more than just connecting APIs or bringing Alexa's jokes and shopping to Cortana. This was about enabling two competitive AIs to work together for the benefit of the end-user. There were four key challenges I needed to overcome to figure this out:</p>
      <h4>Vision</h4>
      <p>This was going to be the beginning of a new modality for Alexa and a new, innovative line of business. I needed to craft a compelling vision for a program, not just a product.</p>
      <h4>AI Orchestration</h4>
      <p>How do two AIs work together? How do you know what to do when you switch between them? How do you not lose track of which one you're talking to? These are fundamental questions. I needed to design how people interact with multiple AIs through the same interface.</p>
      <h4>Scale</h4>
      <p>Each AI assitant has it's own modalities, technical restrictions, and design systems. I needed a way to translate existing experiences from one AI to the other and do it at scale.</p>
      <h4>Holistic Approach</h4>
      <p>Each AI assistant is intrinsically tied to its hardware. There was a large tech stack gap across the hardware and software between the AIs. I needed to look holistally across both hardware and software to create a successful product and program.</p>
    </template>

    <template v-slot:outcome>
      <p>The launch of Alexa + Cortana scaled the availability of both AIs to more than one billion endpoints. Developers could now develop on one AI but launch for both simultaneously with no additional effort. It provided the foundation for other AI interoperability programs including Alexa Auto, Alexa for PC, and the Alexa integration with Facebook Portal.</p>
      <YouTubeVideo src="https://www.youtube.com/embed/Ezxch4rykzI"></YouTubeVideo>
    </template>

    <template v-slot:role>
      <p>I was the head of design for the program spanning both Amazon and Microsoft. I led cross-functional teams across both companines.</p>
    </template>

    <template v-slot:news>
      <ul>
        <li><NewsLink
          url="https://www.theverge.com/2017/8/30/16224876/microsoft-amazon-cortana-alexa-partnership"
          title="Microsoft and Amazon partner to integrate Alexa and Cortana digital assistants"
          source="The Verge"></NewsLink></li>
        <li><NewsLink
          url="https://www.theverge.com/2018/5/7/17326808/microsoft-cortana-update-alexa-integration-build-2018"
          title="Microsoft demonstrates Alexa and Cortana integration"
          source="The Verge"></NewsLink></li>

        <li><NewsLink
          url="https://www.cnet.com/how-to/how-to-use-alexa-and-cortana-together/"
          title="How to use Alexa and Cortana together"
          source="cnet"></NewsLink></li>

        <li><NewsLink
          url="https://www.zdnet.com/article/the-alexa-cortana-integration-why-wasnt-this-bigger-news/"
          title="The Alexa-Cortana integration: Why wasn't this bigger news?"
          source="ZDnet"></NewsLink></li>

        <li><NewsLink
          url="https://lifehacker.com/how-to-use-cortana-and-alexa-together-1828386070"
          title="How to Use Cortana and Alexa together"
          source="Lifehacker"></NewsLink></li>

        <li><NewsLink
          url="https://techcrunch.com/2018/08/15/the-alexa-cortana-integration-is-now-available-in-a-public-preview/"
          title="The Alexa-Cortana integration is now available in a public preview"
          source="TechCrunch"></NewsLink></li>

        <li><NewsLink
          url="https://gizmodo.com/alexa-and-cortana-are-on-speaking-terms-1798622487"
          title="Alexa and Cortana Are on Speaking Terms"
          source="Gizmodo"></NewsLink></li>

        <li><NewsLink
          url="https://www.nytimes.com/2017/08/30/technology/amazon-alexa-microsoft-cortana.html"
          title="‘Cortana, Open Alexa,’ Amazon Says. And Microsoft Agrees."
          source="The New York Times"></NewsLink></li>
      </ul>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import NewsLink from 'components/NewsLink';
  import YouTubeVideo from 'components/YouTubeVideo';

  export default {
    name: 'AmazonAlexaCortana',

    components: {
      PortfolioPage,
      NewsLink,
      YouTubeVideo
    }
  }
</script>

<style scoped lang="scss">

</style>
