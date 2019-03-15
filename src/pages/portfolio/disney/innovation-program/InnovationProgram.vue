<template>
  <PortfolioPage>
    <template v-slot:title>Disney Studios Innovation Incubator</template>
    <template v-slot:content>
      <p>The Disney Studios Innovation Incubator is a program that provides risk-free sandbox for rapidly buidling and testing far-out technology and product ideas.</p>
      <p>The product teams responsible for the Studios enterprise tools have tight budgets and timelines. The tools themselves were build using common web technologies. This left the product teams very little room to test or explore risky or unproven ideas, eventually leading to products and engineers that stagnated.</p>
      <p>I created the Innovation Incubator as a way to drive innovation across the Studio in order scale it's business operations, enhance the day-to-day experience of the users of our enterprise tools, provide learning opportunities for stagnated skill sets, and deliver on Walt Disney's founding principles of "doing the impossible". It provides obligation-free budget and workspace to any person or team with an innovative concept as long as they demonstrate a functional prototype within a pre-determined length of time.</p>
      <p>I was the founder and director of this program. I developed the concept and drove it through to launch with approval and collaboration by Studio Technology senior leaders.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'DisneyInnovationProgram',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">
  
</style>
