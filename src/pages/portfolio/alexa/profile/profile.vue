<template>
  <PortfolioPage>
    <template v-slot:title>Alexa Profile</template>
    <template v-slot:subtitle>Launching personal profiles for Alexa.</template>
    <template v-slot:company>Amazon Alexa</template>
    <template v-slot:year>2019</template>
    <!--<template v-slot:content>
      <img src="./profile.png">

      <p>The challenge was to create a single place for people to manage their personal biometrics and security settings, what Alexa uses to recognize a person and verify their identity.</p>

      <p>A profile sounds like a trivial thing, table-stakes for any app or service. But it's surprisingly complex when it's for an AI, people expect that AI to be communal, it's multi-modal (voice, app, 1P devices), it involves biometrics, and it's at Amazon scale.</p>

      <p>By launching the Profile we opened up Alexa's ability to personalize. This started a fundamental transformation from an AI that didn't consider who she was interacting with to a deeply personal AI.</p>

      <p>I owned the experience design, leading multiple cross-functional teams and designers across the Alexa organization.</p>
    </template>-->

    <template v-slot:hero>
      <img src="./profile.png">
    </template>

    <template v-slot:challenge>
      <p>The challenge was to create a single place for people to manage their personal biometrics and security settings, what Alexa uses to recognize a person and verify their identity.</p>
    </template>

    <template v-slot:process>
      <p>A profile sounds like a trivial thing, table-stakes for any app or service. But it's surprisingly complex when it's for an AI, people expect that AI to be communal, it's multi-modal (voice, app, 1P devices), it involves biometrics, and it's at Amazon scale.</p>
    </template>

    <template v-slot:outcome>
      <p>By launching the Profile we opened up Alexa's ability to personalize. This started a fundamental transformation from an AI that didn't consider who she was interacting with to a deeply personal AI.</p>
    </template>

    <template v-slot:role>
      <p>I owned the experience design, leading multiple cross-functional teams and designers across the Alexa organization.</p>
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
