<template>
  <PortfolioPage nda="true">
    <template v-slot:title>Alexa Profile</template>
    <template v-slot:subtitle>The heart of personalization.</template>
    <template v-slot:company>Amazon Alexa</template>
    <template v-slot:year>2019</template>

    <template v-slot:hero>
      <img src="./profile.png">
    </template>

    <template v-slot:challenge>
      <p>Alexa customers needed a way to manage what Alexa knows about them as an individual – their biometrics, preference, privacy and security settings, etc.</p>
    </template>

    <template v-slot:process>
      <p>A profile sounds like a trivial thing, table-stakes for any app or service. There were four key challenges I needed to overcome to figure this out:</p>
      <h4>Vision</h4>
      <p>This was going to be a core strategic component to the holistic Alexa experience. I needed to squint into the future to see what a personal Alexa might look like.</p>
      <h4>Audience</h4>
      <p>Everyone in the world needed to be able to access their profile regardless of context. I needed to design for everyone and every modality.</p>
      <h4>Systems Thinking &amp; Design</h4>
      <p>I risked setting false expectations of personalization where there was none. I needed to design a solution that fits within and expands the holistic existing Alexa expereince.</p>
      <h4>Durability &amp; Scalability</h4>
      <p>Phase 2 is a real thing this time. I needed to design a solution that scales and evolves after it's launch, looking around the corner to plan for future needs and expectations.</p>
    </template>

    <template v-slot:outcome>
      <p>The launch of the Alexa Profile ushered in a paradigm shift, moving Alexa from an impersonal assistant to a personal one. It set the bar for profiles across Amazon by being the first profile launched for any Amazon product. The number of personalized Alexa experiences increases exponentially within the first year.</p>
    </template>

    <template v-slot:role>
      <p>I was the head of design for the program, leading multiple cross-functional teams and designers across the Alexa organization.</p>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'AmazonProfile',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
