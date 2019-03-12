<template>
  <PortfolioPage>
    <router-link :to="{ name: 'portfolio' }">Back</router-link>
    <header>Disney Studios Greenlight</header>
    <p>The Disney Studios Greenlight is a new process and set of business tools for developing stories for Disney movies and approving them for production.</p>
    <p>All movies go through a greenlighting process, when it goes into production. It’s a long and intense where multiple teams gather, critique and develop story ideas and eventually decide whether they are Disney enough. Most movie ideas never make it through. There’s even a team dedicated to managing the entire thing.</p>
    <p>The tools the teams were using had essentially become broken. Not only were they outdated and difficult to even look at but they had become incompatible, unreliable and insecure over the years. They desperately needed a new set of tools, which also means they needed a new greenlighting process.</p>
    <p>I was the principal UX designer, managing two senior UX designers over the course of the project.</p>
    <ul>
      <li>V1 Launched in 2017</li>
      <li>A greenlight process &amp; set of tools that supports every Disney theatrical release (Live action, <li>Animation, Pixar, Touchstone)</li>
      <li>Reduced time of story development lifecycle</li>
      <li>Increased business task effectiveness (increasing overall efficiency and bandwidth)</li>
      <li>Increased overall satisfaction with the tools</li>
    </ul>
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

<style lang="scss">
  @import "styles/_global";
</style>

<style scoped lang="scss">
  p, ul {
    padding-top: 1.8em;
    line-height: 1.5em;
  }

  ul {
    margin-left: 1em;
  }

  header {
    font-size: 2.4em;
    font-weight: 300;
    line-height: 1.2;
    padding-bottom: 1em;

    + p {
      padding: 0;
    }
  }
</style>
