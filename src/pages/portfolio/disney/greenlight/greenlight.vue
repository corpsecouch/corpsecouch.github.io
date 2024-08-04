<template>
  <PortfolioPage>
    <template v-slot:title>Movie Greenlight</template>
    <template v-slot:company>Walt Disney Studios</template>
    <template v-slot:year>2017</template>
    <!--<template v-slot:hero><img src="./full.png"></template>-->

    <!--<template v-slot:hero>
      <img src="./full.png">
    </template>-->

    <!--<template v-slot:content>
      <h2>What is it?</h2>
      <p>The Disney Studios Greenlight is a new process and set of business tools for developing stories for Disney movies and approving them for production.</p>
      <h2>Why do it?</h2>
      <p>All movies go through a greenlighting process, when it goes into production. It’s a long and intense where multiple teams gather, critique and develop story ideas and eventually decide whether they are Disney enough. Most movie ideas never make it through. There’s even a team dedicated to managing the entire thing.</p>
      <h2>What did I do?</h2>
      <p>The tools the teams were using had essentially become broken. Not only were they outdated and difficult to even look at but they had become incompatible, unreliable and insecure over the years. They desperately needed a new set of tools, which also means they needed a new greenlighting process.</p>
      <h2>What was my role?</h2>
      <p>I was the UX director with a small team of senior UX designers and researchers.</p>
      <h2>What was the outcome?</h2>
      <ul>
        <li>V1 Launched in 2017</li>
        <li>A greenlight process &amp; set of tools that supports every Disney theatrical release (Live action, <li>Animation, Pixar, Touchstone)</li>
        <li>Reduced time of story development lifecycle</li>
        <li>Increased business task effectiveness (increasing overall efficiency and bandwidth)</li>
        <li>Increased overall satisfaction with the tools</li>
      </ul>
      <h2>What did the process look like?</h2>
      <p>This project is covered under an NDA. Please <router-link :to="{ name: 'contact' }">contact me</router-link> if you'd like to do a portfolio review.</p>
    </template>-->

    <template v-slot:challenge>
      <p>The challenge was to fix the anitquated enterprise tools the story development team were using to develop and greenlight movie ideas.</p>
    </template>

    <template v-slot:process>
      <p>All movies go through a greenlighting process, when it goes into production. It’s a long and intense where multiple teams gather, critique and develop story ideas and eventually decide whether they are Disney enough. Most stories never make it through. There's a team dedicated to managing the entire process.</p>
      <p>I worked closely with the story development team, the users, and studio executives to deeply understand the painpoints and issues plaguing the current process.</p>
    </template>

    <template v-slot:outcome>
      <p>We delivered a new movie greenlighting process with a set of custom tools to support it that fully integrated with the overall studio filmmaking process. We reduced the story development lifecycle time and increased the story development efficiency and effectiveness.</p>
      <p>This new process coupled with the right tools enabled Disney to scale it's story development across all of it's theatrical segments including Pixar, Lucasfilm, Animation, Touchstone, and Live Action.</p>
    </template>

    <template v-slot:role>
      <p>I owned the experience design, leading the cross-functional product team and a team of senior designers.</p>
    </template>


  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage'

  export default {
    name: 'DisneyGreenlight',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
