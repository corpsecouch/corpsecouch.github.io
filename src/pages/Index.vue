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
        Starting out as a Sr. UI Engineer, I quickly switched to a leadership role by building out their in-house design team. I worked closely with engineering, product, data scientists and R&amp;D to strategize and create a B2B product for assessing and measuring the impact of video advertising. Our work has influenced brand advertising and decision making across 2,500 brands and 80k ads measured across 25MM viewers.
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
        During my time at Phenomblue, I led a wide range of exciting and innovative projects for brands including Gatorade, McDonalds, Samsung, Eli Lily, Microsoft and GlaxoSmithKline. Being early in my career, I learned how to juggle multiple projects at once, move quickly and combine creativity, strategy and technical knowledge to drive innovation.
      </template>
    </ExperienceTemplate>

    <!-- about me -->
    <SectionTemplate id="about" class="text-light">
      <header>About Me</header>
      <p>Early on in my career I knew I wanted to impact people's lives for the better. Getting a Computer Science degree was completely motivated by wanting to make games to entertain people.</p>
      <p>I transitioned into design when I realized I had a knack for understanding how people interacted things and expected things to work. As an experience designer I've been able to create things that delight and drive business (of course). But more importantly, and what I'm most passionate about, I'm able to add value to people's lives.</p>
      <p>Combined with my deep science and technical background, I routinely drive technical innovation through the lens of the experience. Having been elected to the innovation council at Phenomblue and recieving three Disney Inventor Awards and an patent.</p>
      <p>In a previous life I was musician writing and playing spacy guitar riffs in The Answer Team, touring and recording two albums. Then I was a biker tempting fate on treacherous, twisty canyon roads in the southern California mountains. But all of this was after I was a farm-boy living in the middle of a corn field, helping manage 5,000 acres of corn and 30,000 head of cattle.</p>
      <p>I currently live in Seattle with my wife and daughter.</p>
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

  p {
    line-height: 1.3;
    font-size: 0.9em;
    letter-spacing: 0.4px;
  }
</style>

<style scoped lang="scss">
  .text-light {
    color: $color-lighttext;

    /deep/ header {
      color: rgba(255, 255, 255, 1);
    }
  }

  #intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;

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
        color: $color-link;
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
       /deep/ + p {
         padding-top: 1em;
       }
     }
   }

</style>
