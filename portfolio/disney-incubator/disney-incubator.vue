<template>
  <PortfolioPage nda="true">
    <template v-slot:title>Innovation Incubator</template>
    <template v-slot:company>Walt Disney Studios</template>
    <template v-slot:year>2017</template>

    <!--<template v-slot:hero>
      <img src="./full.png">
    </template>-->

    <!--<template v-slot:content>
      <h2>What is it?</h2>
      <p>The Disney Studios Innovation Incubator is a program that provides risk-free sandbox for rapidly buidling and testing far-out technology and product ideas.</p>
      <h2>Why do it?</h2>
      <p>The product teams responsible for the Studios enterprise tools have tight budgets and timelines. The tools themselves were build using common web technologies. This left the product teams very little room to test or explore risky or unproven ideas, eventually leading to products and engineers that stagnated.</p>
      <h2>What was my role?</h2>
      <p>I was the founder and director. I developed the concept and drove it through to launch with approval and collaboration by Studio Technology senior leaders.</p>
      <h2>What did I do?</h2>
      <p>I established relationships and worked closely with executives across Disney to launch this program. I created it as a way to drive innovation across the company in order scale it's business operations, enhance the day-to-day experience of the users of it's enterprise tools, provide learning opportunities for stagnated engineering skill sets, and deliver on Walt Disney's founding principles of "doing the impossible". It provides obligation-free budget and workspace to any person or team with an innovative concept as long as they demonstrate a functional prototype within a pre-determined length of time.</p>
      <h2>What did the process look like?</h2>
      <p>This project is covered under an NDA. Please <router-link :to="{ name: 'contact' }">contact me</router-link> if you'd like to do a portfolio review.</p>
    </template>-->

    <template v-slot:challenge>
      <p>The product teams responsible for the Studios enterprise tools have tight budgets and timelines. The tools themselves were build using common web technologies. This left the product teams very little room to test or explore risky or unproven ideas, eventually leading to products and engineers that stagnated.</p>
    </template>

    <template v-slot:process>
      <p>Working closely with senior leadership and executives, I developed a program that would drive innovation practices across the company in order scale it's business operations, enhance the efficiency and effectiveness of it's enterprise tools, provide learning opportunities for stagnated engineering skill sets, and deliver on Walt Disney's founding principles of "doing the impossible".</p>
    </template>

    <template v-slot:outcome>
      <p>We launched a program that provides low-risk sandbox for rapidly buidling and testing emerging technology and product ideas.</p>
    </template>

    <template v-slot:role>
      <p>I founded and led the program, driving it from concept to launch.</p>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage';

  export default {
    name: 'DisneyInnovationProgram',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="css">

</style>
