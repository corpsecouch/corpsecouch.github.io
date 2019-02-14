<template>
  <main>

    <!-- intro -->
    <SectionTemplate id="intro">
      <header>Hi! My name is Jason and I'm currently leading design on Amazon's Alexa Identity team.</header>
      <p>Before taking a role in Amazon in July 2017, I led the UX design team at <a href="http://thewaltdisneycompany.com" target="_blank">Walt Disney Studios</a>. Check out my <a href="http://linkedin.com/in/jasonbejot" target="_blank">LinkedIn</a> profile to learn more. Follow me on <a href="http://twitter.com/jasonbejot" target="_blank">Twitter</a> for my random thoughts or read my articles on <a href="http://medium.com/@jasonbejot" target="_blank">Medium</a>.</p>
    </SectionTemplate>

    <!-- disney -->
    <ExperienceTemplate id="disney" class="text-light" src="https://picsum.photos/800/400/?random">
      <template v-slot:role>
        Sr. UX Architect + Lead
      </template>
      <template v-slot:title>
        From October 2013 to July 2017, I led UX design for Walt Disney Studios Technology.
      </template>
      <template v-slot:details>
        I started out as the sole designer and built a team that, at it's largest, totalled 16 people. I worked closely with the team, product, engineers and senior leadership across the company creating it's proprietary enterprise products and processes. I played a key role in evolving how the studio operates it's business.
      </template>
    </ExperienceTemplate>

    <!-- ace metrix -->
    <ExperienceTemplate id="ace" class="text-light" src="https://picsum.photos/800/400/?random">
      <template v-slot:role>
        Creative Director
      </template>
      <template v-slot:title>
        Between March and October of 2013, I was the head of design for Ace Metrix.
      </template>
      <template v-slot:details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis, fringilla posuere risus. Mauris ornare mattis arcu, bibendum sodales libero elementum et. Nam mattis varius tortor ac imperdiet. Aliquam egestas, sem at consequat vestibulum, urna diam fermentum odio.
      </template>
    </ExperienceTemplate>

    <!-- phenomblue -->
    <ExperienceTemplate id="phenom" class="text-light" src="https://picsum.photos/800/400/?random">
      <template v-slot:role>
        Sr. UX Designer
      </template>
      <template v-slot:title>
        At Phenomblue, I led R&amp;D and UX design for 5 years.
      </template>
      <template v-slot:details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis, fringilla posuere risus. Mauris ornare mattis arcu, bibendum sodales libero elementum et. Nam mattis varius tortor ac imperdiet. Aliquam egestas, sem at consequat vestibulum, urna diam fermentum odio.
      </template>
    </ExperienceTemplate>

    <!-- about me -->
    <SectionTemplate id="about" class="text-light">
      <header>About Me</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis, fringilla posuere risus. Mauris ornare mattis arcu, bibendum sodales libero elementum et.</p>
      <p>Nam mattis varius tortor ac imperdiet. Aliquam egestas, sem at consequat vestibulum, urna diam fermentum odio, eget congue tellus sem nec enim. Suspendisse finibus turpis arcu, ac porta ante cursus id. Ut aliquam lobortis dictum. Curabitur commodo aliquam elit sit amet viverra. Sed tristique dui in tincidunt malesuada.</p>
      <p>Mauris vehicula fringilla neque, eu porta risus venenatis ac. Pellentesque ultricies maximus sagittis. Morbi tortor ante, fermentum eu vehicula in, pretium non leo. Cras ornare urna eu arcu dignissim finibus.</p>
    </SectionTemplate>

  </main>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import ExperienceTemplate from 'components/ExperienceTemplate'
  import SectionTemplate from 'components/SectionTemplate'

  export default {
    name: 'Index',

    components: {
      ExperienceTemplate,
      SectionTemplate
    }

  }
</script>

<style lang="scss">
  @import "styles/_global";

  header, p {
    @include font-raleway;
  }
</style>

<style scoped lang="scss">
  .text-light {
    color: rgba(255, 255, 255, 0.6);

    /deep/ header {
      color: rgba(255, 255, 255, 1);
    }
  }

  #intro {
    display: flex;
    flex-direction: column;
    justify-content: center;

    /deep/ .container {

      header, p {
        margin: 0 auto;

        @include screen-xl { width: 70%; }

        @include screen-lg { width: 70%; }

        @include screen-md { width: 90%; }

        @include screen-sm { width: 100%; }
      }

      header {
        font-size: 2.4em;
        font-weight: 300;
        line-height: 1.2;
      }

      p {
        padding-top: 1em;
        font-size: 1.2em;
        line-height: 1.6;
      }

      a {
        color: rgb(247, 72, 82);
        text-decoration: none;
        cursor: pointer;
        font-weight: 500;
      }
    }
  }

  #disney {
    background-color: $color-backgroundgrey;
  }

  #ace {
    background-color: $color-19-korea;
  }

  #phenom {
    background-color: $color-backgroundgrey;
  }

  #about {
    background-color: $color-19-plasticpink;

    /deep/ .container {

      header, p {
        margin: 0 auto;

        @include screen-xl { width: 50%; }

        @include screen-lg { width: 70%; }

        @include screen-md { width: 90%; }

        @include screen-sm { width: 100%; }
      }
    }

    header {
      font-weight: 500;
      text-transform: uppercase;

      /deep/ + p {
        padding-top: 0.6em;
      }
    }

    p {
      line-height: 1.3;
      font-size: 0.9em;

       /deep/ + p {
         padding-top: 1em;
       }
     }
   }


</style>
