<template>
  <PortfolioPage>
    <template v-slot:title>Disney Studios Slate</template>
    <template v-slot:content>
      <h2>What is it?</h2>
      <p></p>
      <h2>Why do it?</h2>
      <p></p>
      <h2>What did I do?</h2>
      <p></p>
      <h2>What was my role?</h2>
      <p></p>
      <h2>What was the outcome?</h2>
      <ul>
        <li></li>
      </ul>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage'

  export default {
    name: 'DisneySlate',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
