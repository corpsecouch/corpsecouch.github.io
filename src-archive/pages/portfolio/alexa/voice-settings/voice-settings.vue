<template>
  <PortfolioPage>
    <template v-slot:title>Alexa Voice Settings</template>
    <template v-slot:company>Amazon Alexa</template>
    <template v-slot:year>2018</template>
    <!--<template v-slot:hero><img src="./pr.png"></template>-->
    <template v-slot:content>
      <p>Alexa is Amazon's voice-based personal assistant available on hundreds of millions of Echo and 3rd-party devices.</p>

      <p>The challenge was...</p>

      <p>The solution was to..</p>

      <p>Led design and research across both the Amazon and Microsoft teams.</p>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'AmazonVoiceSettings',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
