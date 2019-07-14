<template>
  <Page>

    <!-- intro -->
    <Section id="intro">
      <header>Hi! My name is Jason and I'm currently leading experience design on Amazon's Alexa Identity team.</header>
      <p>Before taking a role in Amazon in July 2017, I led the UX design team at <a href="http://thewaltdisneycompany.com" target="_blank">Walt Disney Studios</a>. Check out my <a href="http://linkedin.com/in/jasonbejot" target="_blank">LinkedIn</a> profile to learn more. Follow me on <a href="http://twitter.com/jasonbejot" target="_blank">Twitter</a> for my random thoughts or read my articles on <a href="http://medium.com/@jasonbejot" target="_blank">Medium</a>.</p>
    </Section>

    <!-- disney -->
    <Section id="disney" class="exp">
      <img src="./disney.png" class="masthead">
      <div class="description">
        <span class="role">Principal UX</span>
        <header>From October 2013 to July 2017, I led UX design for Walt Disney Studios Technology.</header>
        <p class="details">Starting out as the sole designer, I helped build a large centralized design team within the Disney Studios Technology Group. I managed designers and worked closely with product, engineers and senior leadership across the company to create it's suite of 150+ proprietary enterprise products. I played a key role in evolving how the studio operates it's business.</p>
      </div>
    </Section>

    <!-- ace metrix -->
    <Section id="ace" class="exp">
      <img src="./ace metrix.png" class="masthead">
      <div class="description">
        <span class="role">Creative Director</span>
        <header>Between March and October of 2013, I directed the design team for Ace Metrix.</header>
        <p class="details">After starting as their Sr. UI Engineer, I quickly moved into a leadership role by building out their in-house design team. We worked closely with engineering, product, data scientists and R&amp;D to strategize and create a B2B product for assessing and measuring the impact of video advertising. Our work has influenced advertising and marketing across 2,500 brands with more than 80k ads measured across 25MM viewers.</p>
      </div>
    </Section>

    <!-- phenomblue -->
    <Section id="phenom" class="exp">
      <img src="./phenomblue.png" class="masthead">
      <div class="description">
        <span class="role">Sr. UX Designer</span>
        <header>Between 2007 and 2013, I was an engineer, a UX designer and led R&amp;D for Phenomblue.</header>
        <p class="details">At Phenomblue, I led a wide range of exciting and innovative projects for major brands including Gatorade, McDonalds, Samsung, Eli Lily, Microsoft and GlaxoSmithKline. Being early in my career, I learned how to juggle multiple projects at once, move quickly and combine creativity, strategy and technical knowledge to drive innovation.</p>
      </div>
    </Section>

    <!-- about me -->
    <Section id="about">

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

  import Section from 'components/SectionTemplate'
  import Page from 'components/PageTemplate'

  export default {
    name: 'Index',

    components: {
      Section,
      Page
    }

  }
</script>

<style scoped lang="scss">

  #intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;

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
    }
  }

  .exp {
    .description {
      @include screen-xl {
        width: 50%;
        margin: 0 auto;
      }

      @include screen-lg {
        width: 70%;
        margin: 0 auto;
      }

      @include screen-md { width: 90%; }

      @include screen-sm { width: 100%; }

      > span {
        display: block;
      }

      .role {
        @include font-raleway;
        font-size: 0.8em;
        font-weight: 500;
        text-transform: uppercase;

        + header {
          margin-top: 0.6em;
        }
      }

      header {
        font-weight: 300;
        font-size: 1.8em;
        line-height: 1.2;

        + .details {
          margin-top: 0.6em;
        }
      }
    }

    .masthead {
      width: 100%;
    }
  }

  #disney {
    color: $color-lighttext;
    background-color: $color-backgroundgrey;
  }

  #ace {
    color: $color-lighttext;
    background-color: $color-19-korea;
  }

  #phenom {
    color: $color-lighttext;
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
    color: $color-lighttext;
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
