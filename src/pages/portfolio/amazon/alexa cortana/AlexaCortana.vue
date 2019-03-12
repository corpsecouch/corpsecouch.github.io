<template>
  <main>
    <section>
      <div class="container">
        <div class="content">
          <router-link to="/">Back</router-link>
          <header>Introducint Alexa to Cortana</header>
          <p>In a world-first, the two AIs (Alexa and Cortana) were linked together to provide the experiences and benefits of each AI to the other. An Alexa user gained the benefits of Cortana’s specialties within an Alexa conversation and vice-versa. All this without the need for additional cost, hardware or setup.</p>
          <p>Even though Amazon and Microsoft are competitors, their CEOs, Jeff Bezos and Satya Nadella, believed that their AIs were better together than apart. Our challenge was to link to two AIs together so users gain the benefits of both.</p>
          <p>I was the principal experience designer owning design across both Amazon and Microsoft.</p>
          <p>I wore many hats on this project, the most impactful were product owner and stakeholder. After rolling up my sleeves and standing-up version 1 as a team of one with no budget, the design system proved valuable enough that it gained a dedicated team of designers and engineers along with a multi-million dollar budget.</p>
          <ul>
            <li>Launched in 2018</li>
            <li>Cortana is available to all 20MM+ Alexa users on all 100MM+ Echo devices</li>
            <li>Alexa is available to all Windows 10 users across all 700MM+ Windows 10 devices</li>
            <li>Press coverage by every major tech news outlet including TechCrunch, The Verge and Gizmodo</li>
            <li>Product team was expanded to deliver V2</li>
            <li>Expanding to link other AIs</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'AmazonAlexaCortana',
  }
</script>

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
