<template>
  <PortfolioPage>
    <template v-slot:title>Alexa + Cortana</template>
    <template v-slot:subtitle>Bringing the two AIs together.</template>
    <template v-slot:year>2017 - 2018</template>
    <template v-slot:company>Amazon Alexa</template>
    <template v-slot:hero>
      <img src="./alexa-cortana.png">
    </template>
    <!--<template v-slot:content>
      <p>Alexa is Amazon's voice-based personal assistant available on hundreds of millions of Echo and 3rd-party devices.<p>
      <p>Cortana is Microsoft's productivity-focused assistant available across hundreds of millions of Windows devices.</p>

      <p>The challenge was that both Amazon and Microsoft wanted to offer the best of both AIs to their customers and developers.</p>

      <p>The solution was to integrate the two so that Alexa's capabilities are available when people use Cortana and vice-versa.</p>

      <p>Led design and research across both the Amazon and Microsoft teams.</p>
    </template>-->

    <template v-slot:challenge>
      <p>The challenge was that both Amazon and Microsoft wanted to offer the best of both AIs to their customers and developers.</p>
    </template>

    <template v-slot:process>
      <p>Enabling two commercial AIs from two competitors was a world first and brimming with challenges. Alexa is cloud-based and voice-first, while Cortana is device-centric and primarily text-based. We had to find a way to bring harmony between two vastly different worlds across the experience, technology, and business.</p>
    </template>

    <template v-slot:outcome>
      <p>By launching this integration, we expanded the availability of both AIs to hundreds of million more devices and people worldwide.</p>
      <p>The technology and experiences we created later scaled to enable Alexa to work with integrated automotive AIs.</p>
    </template>

    <template v-slot:role>
      <p>I owned the experience design and research, leading cross-functional teams across both Amazon and Microsoft.</p>
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

  export default {
    name: 'AmazonAlexaCortana',

    components: {
      PortfolioPage,
      NewsLink
    }
  }
</script>

<style scoped lang="scss">

</style>
