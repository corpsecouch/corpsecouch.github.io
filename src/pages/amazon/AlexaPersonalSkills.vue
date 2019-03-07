<template>
  <main>
    <section>
      <div class="container">
        <div class="content">
          <router-link to="/">Back</router-link>
          <header>Alexa Personal Skills</header>
          <p>Enabling all Alexa Skills to recognize and personalize for individual users.</p>
          <p>Skills are basically apps for Alexa. Made by 3rd-party developers, companies and brands Skills bring more content, utility and entertainment to everyone who uses Alexa. The number of Alexa Skills is rapidly growing, with more than 70,000 available worldwide as of Q4 2018.</p>
          <p>In 2018, Alexa began recognizing people by their voice enabling her to provide features and experiences custom tailored to each individual person. We wanted to extend this capability to all Alexa Skills so they can provide personalized experiences.</p>
          <p>I was the product manager and principal experience designer.</p>
          <ul>
            <li>Initial announcement at re:invent 2017</li>
            <li>Developer preview launched at re:invent 2018</li>
            <li>Launched in Q1 2019</li>
            <li>All 70,000+ Alexa Skills are able to recognize individual Alexa users</li>
            <li>Available on all 100MM+ Echo devices</li>
            <li>Available to all 20MM+ Echo users</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'AmazonAlexaPersonalSkills',
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
