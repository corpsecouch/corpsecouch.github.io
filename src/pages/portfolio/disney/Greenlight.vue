<template>
  <PortfolioPage>
    <template v-slot:title>Disney Studios Greenlight</template>
    <template v-slot:content>
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
