<template>
  <PortfolioPage>
    <template v-slot:title>Alexa Presence Detection</template>
    <template v-slot:subtitle>Launching the ability to determine which Echo you're near.</template>
    <template v-slot:year>2019</template>
    <template v-slot:company>Amazon Alexa</template>
    <template v-slot:content>
      <!-- missed reminders -->
      <!-- auto lock -->

      <img src="./test.jpg">

      <p>The challenge was to </p>

    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'AmazonPresence',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
