<template>
  <Page>

    <!-- intro -->
    <Section id="intro">
      <header>Hi! My name is Jason and I'm currently leading experience design on Amazon's Alexa Identity team.</header>
      <p>Before taking a role in Amazon in July 2017, I led the UX design team at <a href="http://thewaltdisneycompany.com" target="_blank">Walt Disney Studios</a>. Check out my <a href="http://linkedin.com/in/jasonbejot" target="_blank">LinkedIn</a> profile to learn more. Follow me on <a href="http://twitter.com/jasonbejot" target="_blank">Twitter</a> for my random thoughts or read my articles on <a href="http://medium.com/@jasonbejot" target="_blank">Medium</a>.</p>
    </Section>

    <!-- disney -->
    <ExperienceTemplate id="disney" class="text-light" src="static/disney.png">
      <template v-slot:role>
        Principal UX
      </template>
      <template v-slot:title>
        From October 2013 to July 2017, I led UX design for Walt Disney Studios Technology.
      </template>
      <template v-slot:details>
        Starting out as the sole designer, I helped build a large centralized design team within the Disney Studios Technology Group. I managed designers and worked closely with product, engineers and senior leadership across the company to create it's suite of 150+ proprietary enterprise products. I played a key role in evolving how the studio operates it's business.
      </template>
    </ExperienceTemplate>

    <!-- ace metrix -->
    <ExperienceTemplate id="ace" class="text-light" src="static/ace metrix.png">
      <template v-slot:role>
        Head of Design
      </template>
      <template v-slot:title>
        Between March and October of 2013, I was the head of design for Ace Metrix.
      </template>
      <template v-slot:details>
        After starting as their Sr. UI Engineer, I quickly moved into a leadership role by building out their in-house design team. We worked closely with engineering, product, data scientists and R&amp;D to strategize and create a B2B product for assessing and measuring the impact of video advertising. Our work has influenced advertising and marketing across 2,500 brands with more than 80k ads measured across 25MM viewers.
      </template>
    </ExperienceTemplate>

    <!-- phenomblue -->
    <ExperienceTemplate id="phenom" class="text-light" src="static/phenomblue.png">
      <template v-slot:role>
        Sr. UX Designer
      </template>
      <template v-slot:title>
        At Phenomblue, I led R&amp;D and UX design for 5 years.
      </template>
      <template v-slot:details>
        At Phenomblue, I led a wide range of exciting and innovative projects for major brands including Gatorade, McDonalds, Samsung, Eli Lily, Microsoft and GlaxoSmithKline. Being early in my career, I learned how to juggle multiple projects at once, move quickly and combine creativity, strategy and technical knowledge to drive innovation.
      </template>
    </ExperienceTemplate>

    <!-- about me -->
    <Section id="about" class="text-light">

      <header>About Me</header>

      <p>I always knew I wanted to positively impact people's lives. Even my motivation for getting a Computer Science degree was to entertain and enrich lives by making games.</p>

      <p>Growing up on a large family farm, I filled my days with immersive storytelling by playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and gravitated towards HCI.</p>

      <p>After spending a few years as an engineering lead I made the switch to experience design. I've been able to create things that delight millions of people and drive business (of course). Combined with my science and technical background, I've found a passion for driving innovation and invention through the lens of the experience. As a result I was elected to the innovation council at Phenomblue, received three Disney Inventor Awards, a patent, launched a product incubator within Disney Studios and was handpicked by the Disney Studios CTO to spearhead a Studio-wide innovation initiative.</p>

      <p>In a previous life I was musician writing and playing spacy guitar riffs in The Answer Team, touring and recording two albums. Then I was a biker tempting fate on the treacherous, twisty Souther California canyon roads.</p>

      <p>I currently live in Seattle with my wife and daughter.</p>
    </Section>

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import ExperienceTemplate from 'components/ExperienceTemplate'
  import Section from 'components/SectionTemplate'
  import Page from 'components/PageTemplate'

  export default {
    name: 'Index',

    components: {
      ExperienceTemplate,
      Section,
      Page
    }

  }
</script>

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

      * {
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

    /*/deep/ .container {
      background-image: url('~../../static/disney.png');
    }*/
  }

  #ace {
    background-color: $color-19-korea;
  }

  #phenom {
    background-color: $color-backgroundgrey;

    /*/deep/ .description {
      position: relative;
      @include screen-xl { top: -350px; }

      @include screen-lg { top: -250px; }

      @include screen-md { top: -175px; }

      @include screen-sm { top: 0px; }
    }*/
  }

  #about {
    background-color: $color-19-plasticpink;
    padding-bottom: 3em;

    /deep/ .container {

    * {
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
