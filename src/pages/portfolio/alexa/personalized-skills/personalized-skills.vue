<template>
  <PortfolioPage>
    <template v-slot:title>Alexa Personalized Skills</template>
    <template v-slot:year>2018</template>
    <template v-slot:company>Amazon Alexa</template>
    <!--<template v-slot:hero><img src="./pr.png"></template>-->
    <template v-slot:content>
      <h2>What is it?</h2>
      <p>Enabling all Alexa Skills to recognize and personalize for individual users.</p>
      <h2>Why do it?</h2>
      <p>Skills are basically apps for Alexa. Made by 3rd-party developers, companies and brands Skills bring more content, utility and entertainment to everyone who uses Alexa. The number of Alexa Skills is rapidly growing, with more than 70,000 available worldwide as of Q4 2018.</p>
      <h2>What did I do?</h2>
      <p>In 2018, Alexa began recognizing people by their voice enabling her to provide features and experiences custom tailored to each individual person. We wanted to extend this capability to all Alexa Skills so they can provide personalized experiences.</p>
      <h2>What was my role?</h2>
      <p>I was the product manager and principal experience designer.</p>
      <h2>What was the outcome?</h2>
      <ul>
        <li>Initial announcement at re:invent 2017</li>
        <li>Developer preview launched at re:invent 2018</li>
        <li>Launched in Q1 2019</li>
        <li>All 70,000+ Alexa Skills are able to recognize individual Alexa users</li>
        <li>Available on all 100MM+ Echo devices</li>
        <li>Available to all 20MM+ Echo users</li>
      </ul>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'AmazonPersonalSkills',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
