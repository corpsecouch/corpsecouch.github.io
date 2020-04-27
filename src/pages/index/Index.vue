<template>
  <Page>

    <!--<Section id="one">
      <p>Hi, my name is Jason and I'm human-focused technologist.</p>
      <p>I'm currently an experience design leader at Amazon working on Alexa, defining the future of AI personalization, security and privacy-centric biometric recognition.</p>
    </Section>-->



    <section id="masthead">
      <img>
    </section>

    <section id="intro">
      <p class="left">Experience design that looks around corners.</p>
      <p class="right">I'm a technologist who designs experiences addressing the human side of innovation, how behavior and technology together can create a brighter future. I work at the intersection of psychology, technology, and business. </p>
    </section>

    <section id="social">
      <a>twitter</a>
      <a>linked in</a>
      <a>medium</a>
    </section>

    <!--<section id="work">
      <div id="projects">
        <PortfolioListItem
          v-for="project in projects"
          v-bind:data="projects"
          v-bind:key="project.routeName"
          v-bind:class="{highlight: project.highlight}"
          v-bind:routeName="project.routeName"
          v-bind:imageUrl="project.imageUrl">
            <template v-slot:company>{{project.company}}</template>
            <template v-slot:title>{{project.title}}</template>
            <template v-slot:description>{{project.description}}</template>
        </PortfolioListItem>
      </div>
      <router-link :to="{ name : 'portfolio' }" alt="Portfolio">More in my porfolio</router-link>
    </section>-->

    <!--<section id="about">
      <header>About Me</header>
      <p>I always knew I wanted to positively impact people's lives. Even my motivation for getting a Computer Science degree was to entertain and enrich lives by making games.</p>
      <p>Growing up on a large family farm, I filled my days with immersive storytelling by playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and gravitated towards HCI.</p>
      <p>After spending a few years as an engineering lead I made the switch to experience design. I've been able to create things that delight millions of people and drive business (of course). Combined with my science and technical background, I've found a passion for driving innovation and invention through the lens of the experience. As a result I was elected to the innovation council at Phenomblue, received three Disney Inventor Awards, a patent, launched a product incubator within Disney Studios and was handpicked by the Disney Studios CTO to spearhead a Studio-wide innovation initiative.</p>
      <p>In a previous life I was musician writing and playing spacy guitar riffs in The Answer Team, touring and recording two albums. Then I was a biker tempting fate on the treacherous, twisty Southern California canyon roads.</p>
      <p>I currently live in Seattle with my wife and daughter.</p>
    </section>-->

    <!--<Section>
      <div>
        Designer
        Engineer
        Entrepreneur
      </div>

      <div>

      </div>

    </Section>

    Patents
    X
    X
    X

    Recognition
    News Coverage
    Webby Awards
    FWA Awards
    W3 Awards
    Disney Inventor Awards
    Best of Disney Award
    Microsoft PhizzPop Challenge-->


    <!--<Section id="work">
      <header>Work</header>

      <ul>
        <li>Amazon</li>
        <li>Disney</li>
        <li>Ace Metrix</li>
        <li>Phenomblue</li>
        <li>Orajen</li>
        <li>U.S. Army Corp of Engineers</li>
        <li>SAIC</li>
        <li>University of Nebraska Omaha</li>
      </ul>
      <img src="./amazon.png">
      <img src="./disney.png">
      <img src="./acemetrix.jpg">
      <img src="./phenomblue.jpg">
      <img src="./orajen.jpg">
      <img src="./us army corps of engineers.jpg">
      <img src="./saic.png">
      <img src="./uno.png">
    </Section>-->

    <!--<Section id="about">
      <header>About Me</header>
      <p>I always knew I wanted to positively impact people's lives. Even my motivation for getting a Computer Science degree was to entertain and enrich lives by making games.</p>
      <p>Growing up on a large family farm, I filled my days with immersive storytelling by playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and gravitated towards HCI.</p>
      <p>After spending a few years as an engineering lead I made the switch to experience design. I've been able to create things that delight millions of people and drive business (of course). Combined with my science and technical background, I've found a passion for driving innovation and invention through the lens of the experience. As a result I was elected to the innovation council at Phenomblue, received three Disney Inventor Awards, a patent, launched a product incubator within Disney Studios and was handpicked by the Disney Studios CTO to spearhead a Studio-wide innovation initiative.</p>
      <p>In a previous life I was musician writing and playing spacy guitar riffs in The Answer Team, touring and recording two albums. Then I was a biker tempting fate on the treacherous, twisty Southern California canyon roads.</p>
      <p>I currently live in Seattle with my wife and daughter.</p>
    </Section>-->

    <!--<Section id="contact">
      <header>Let's talk</header>
      <p>Is it work related?<br><a href="http://linkedin.com/in/jasonbejot" target="_blank">Message me on LinkedIn</a></p>
      <p>Something other than work?<br><a href="http://twitter.com/jasonbejot" target="_blank">DM me on Twitter</a></p>
      <p>If all else fails...<br><a href="https://calendly.com/jasonbejot" target="_blank">Book a meeting</a></p>
    </Section>-->

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Section from 'components/SectionTemplate'
  import Page from 'components/PageTemplate'
  import PortfolioListItem from 'components/PortfolioListItem'
  import portfolioData from 'data/portfolio'

  export default {
    name: 'Index',

    components: {
      Section,
      Page,
      PortfolioListItem
    },

    data () {
      return {
        projects: _.filter(portfolioData, function(o) { return o.showcase; })
      }
    }

  }
</script>

<style scoped lang="scss">

  #work {
    grid-column: 1 / span 5;
    grid-row: 2;
    width: 100%;
    padding: 4rem 4rem;
    background-color: #efefef;
    text-align: center;

    > a {
      text-transform: uppercase;
    }
  }

  /*#projects {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4rem;

    article {
      display: inline-block;
      width: 30%;
      transform: translateZ(0); // fixes chrome bug with dropshadows and columns: https://stackoverflow.com/questions/17881923/box-shadow-trimmed-in-css-columns-in-chrome
    }
  }*/

  #masthead {
    grid-column: colLeft / mainRight;
    grid-row: 1;
    img {
      background-color: grey;
      width: 100%;
      height: 24rem;
    }
  }

  #intro {
    grid-column: colLeft / mainRight;
    grid-row: 2;

    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4rem 2rem;

    p {
      margin: 0;
    }

    .left {
      grid-column: 1;
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.2;
    }

    .right {
      grid-column: 2;
    }
  }

  #social {
    grid-column: colLeft / mainRight;
    grid-row: 3;
    display: flex;
    justify-content: center;

    a {
      padding: 0.5rem;
      margin-left: 1.5rem;

      &:first-child {
        margin: 0;
      }
    }
  }


  /* --- --- --- */

  /*#intro {
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
  }*/

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

  /*#about {
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
  }*/

</style>
