<template>
  <main>
    <section>
      <div class="container">
        <div class="content">
          <router-link to="/">Back</router-link>
          <header>Disney Studios Innovation Incubator</header>
          <p>The Disney Studios Innovation Incubator is a program that provides risk-free sandbox for rapidly buidling and testing far-out technology and product ideas.</p>

          <p>The product teams responsible for the Studios enterprise tools have tight budgets and timelines. The tools themselves were build using common web technologies. This left the product teams very little room to test or explore risky or unproven ideas, eventually leading to products and engineers that stagnated.</p>

          <p>I created the Innovation Incubator as a way to drive innovation across the Studio in order scale it's business operations, enhance the day-to-day experience of the users of our enterprise tools, provide learning opportunities for stagnated skill sets, and deliver on Walt Disney's founding principles of "doing the impossible". It provides obligation-free budget and workspace to any person or team with an innovative concept as long as they demonstrate a functional prototype within a pre-determined length of time.</p>

          <p>I was the founder and director of this program. I developed the concept and drove it through to launch with approval and collaboration by Studio Technology senior leaders.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'DisneyInnovationProgram',
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

  main {
    padding: 10em 0;
  }

  section {
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    max-width: 990px;
    margin: 0 auto;

    @include screen-xl { width: 940px; }
    @include screen-lg { width: 720px; }
    @include screen-md { width: 86%; }
    @include screen-sm { width: 90%; }
  }

  .content {
    margin: 0 auto;
    @include screen-xl { width: 70%; }
    @include screen-lg { width: 70%; }
    @include screen-md { width: 90%; }
    @include screen-sm { width: 100%; }
  }
</style>
