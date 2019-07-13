<template>
  <PortfolioPage>
    <template v-slot:title>Introducing Alexa to Cortana</template>
    <template v-slot:content>
      <img src="dist/assets/portfolio/amazon/alexa-cortana/pr.png">
      <h2>What is it?</h2>
      <p>In a world-first, the two AIs (Alexa and Cortana) were linked together to provide the experiences and benefits of each AI to the other. An Alexa user gained the benefits of Cortana’s specialties within an Alexa conversation and vice-versa. All this without the need for additional cost, hardware or setup.</p>
      <h2>Why do it?</h2>
      <p>Even though Amazon and Microsoft are competitors, their CEOs, Jeff Bezos and Satya Nadella, believed that their AIs were better together than apart. Our challenge was to link to two AIs together so users gain the benefits of both.</p>
      <h2>What did I do?</h2>
      <p>I was the principal experience designer owning design across both Amazon and Microsoft.</p>
      <h2>What was my role?</h2>
      <p>I wore many hats on this project, the most impactful were product owner and stakeholder. After rolling up my sleeves and standing-up version 1 as a team of one with no budget, the design system proved valuable enough that it gained a dedicated team of designers and engineers along with a multi-million dollar budget.</p>
      <h2>What was the outcome?</h2>
      <ul>
        <li>Launched in 2018</li>
        <li>Cortana is available to all 20MM+ Alexa users on all 100MM+ Echo devices</li>
        <li>Alexa is available to all Windows 10 users across all 700MM+ Windows 10 devices</li>
        <li>Press coverage by every major tech news outlet including TechCrunch, The Verge and Gizmodo</li>
        <li>Product team was expanded to deliver V2</li>
        <li>Expanding to link other AIs</li>
      </ul>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';

  export default {
    name: 'AmazonAlexaCortana',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">
  img {
    margin-bottom: 3rem;
    width: 100%;
  }
</style>
