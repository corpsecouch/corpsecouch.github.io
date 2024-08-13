<template>
  <PortfolioPage nda="true">
    <template v-slot:title>Enterprise Design System</template>
    <template v-slot:year>2014</template>
    <template v-slot:company>Walt Disney Studios</template>

    <!--<template v-slot:hero>
      <img src="./full.png">
    </template>-->

    <!--<template v-slot:content>
      <h2>What is it?</h2>
      <p>The Disney Studios Design System is a full design language for Disney Studio’s suite of proprietary enterprise tools. It includes guidelines, wireframes, color palettes, Sketch templates, Axure templates and an Angular UI framework.</p>
      <h2>Why do it?</h2>
      <p>The business of Disney Studios depends on custom internal enterprise applications. These applications should look and behave consistently as if they were originally created as a part of the same product suite. With hundreds of these mission critical applications, created by various people across many years, consistency is nonexistent. Efficiency and effectiveness from both business operations and product development both suffer because of this.</p>
      <h2>What did I do?</h2>
      <p>I championed the need for a design system to make the suite of enterprise applications consistent and show measurable improvements with users, business operations and product development.</p>
      <h2>What was my role?</h2>
      <p>I wore many hats on this project, the most impactful were product owner and stakeholder. After rolling up my sleeves and standing-up version 1 as a team of one with no budget, the design system proved valuable enough that it gained a dedicated team of designers and engineers along with a multi-million dollar budget.</p>
      <h2>What was the outcome?</h2>
      <ul>
        <li>V2 launched in 2014</li>
        <li>V3 launched in 2017</li>
        <li>Increased speed of product development (design &amp; engineering)</li>
        <li>Created cross-product consistency (enterprise product suite)</li>
        <li>Increased overall user satisfaction with internal business tools</li>
        <li>Increased business task effectiveness (increasing overall efficiency and bandwidth of business operations)</li>
        <li>Adopted across other Disney Segments (ESPN, ABC, Disney Interactive)</li>
        <li>Received the Best of Disney award in 2014</li>
      </ul>
      <h2>What did the process look like?</h2>
      <p>This project is covered under an NDA. Please <router-link :to="{ name: 'contact' }">contact me</router-link> if you'd like to do a portfolio review.</p>
    </template>-->

    <template v-slot:challenge>
      <p>The business of Disney Studios depends on custom internal enterprise applications. These applications should look and behave consistently as if they were originally created as a part of the same product suite. With hundreds of these mission critical applications, created by various people across many years, consistency is nonexistent. Efficiency and effectiveness from both business operations and product development both suffer because of this.</p>
    </template>

    <template v-slot:process>
      <p>I championed the need for a design system to make the suite of enterprise applications consistent and show measurable improvements with users, business operations and product development.</p>
      <p>After gaining leadership buy-in, I formed and led a cross-functional steering committee that maintained the overall vision and identified the product, technical, experience, and operational requirements.</p>
    </template>

    <template v-slot:outcome>
      <p>We launched a full design system for Disney Studio’s entire suite of proprietary enterprise tools. It included guidelines, design resources, patterns and an Angular UI framework so designers, engineers, and product can all benefit.</p>
      <p>Post-launch, it increased the speed of product development, established cross-product consistency, and increased overall user satisfaction with the enterprise products. It was even adopted by other Disney segments including ABC, ESPN, and Disney Interactive.</p>
    </template>

    <template v-slot:role>
      <p>I founded and owned and program from concept to launch. Afterwards, I was the stakeholder as it transitioned to a larger team and released subsequent versions.</p>
    </template>

    <template v-slot:awards>
      <AwardList :data="awards"></AwardList>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage';
  import AwardList from 'components/AwardList.vue';
  import awardData from 'data/awards';

  const name = 'DisneyDesignSystem';

  export default {
    name: name,

    components: {
      PortfolioPage,
      AwardList
    },

    data () {
      return {
        awards: _.filter(awardData, ['project', name])
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
