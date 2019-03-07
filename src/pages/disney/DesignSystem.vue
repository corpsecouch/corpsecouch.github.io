<template>
  <main>
    <section>
      <div class="container">
        <div class="content">
          <router-link to="/">Back</router-link>
          <header>Disney Studios Design System</header>
          <p>The Disney Studios Design System is a full design language for Disney Studio’s suite of proprietary enterprise tools. It includes guidelines, wireframes, color palettes, Sketch templates, Axure templates and an Angular UI framework.</p>
          <p>The business of Disney Studios depends on custom internal enterprise applications. These applications should look and behave consistently as if they were originally created as a part of the same product suite. With hundreds of these mission critical applications, created by various people across many years, consistency is nonexistent. Efficiency and effectiveness from both business operations and product development both suffer because of this.</p>
          <p>I championed the need for a design system to make the suite of enterprise applications consistent and show measurable improvements with users, business operations and product development.</p>
          <p>I wore many hats on this project, the most impactful were product owner and stakeholder. After rolling up my sleeves and standing-up version 1 as a team of one with no budget, the design system proved valuable enough that it gained a dedicated team of designers and engineers along with a multi-million dollar budget.</p>
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
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'DisneyDesignSystem',
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
