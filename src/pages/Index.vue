<template>
  <Page class="widthConstrained">

    <section id="name">
      <h1>Jason<br />Bejot</h1>
    </section>

    <section id="social">
      <router-link :to="{ path: '/', hash: '#about' }" alt="About">About</router-link>
      <router-link :to="{ path: '/', hash: '#portfolio' }" alt="Portfolio">Portfolio</router-link>
      <router-link :to="{ path: '/', hash: '#news' }" alt="News">News</router-link>
      <router-link :to="{ path: '/', hash: '#contact' }" alt="Contact">Contact</router-link>
    </section>

    <!-- ------------- -->
    <!-- ABOUT SECTION -->
    <!-- ------------- -->

    <section id="about">
      <!--<h2>About Me</h2>-->
      <section>
        <!--<p>I'm an experience design and product leader with a background in computer science, innovation, and entreprenuership with 19 years of professional leadership experience envisioning the future, crafting strategies, and delivering experiences.</p>-->
        <p>I'm a executive-level tech innovator with 19 years of professional experience having worked at Disney, Amazon, and Rocket Companies, and more.</p>
        <p>Growing up on a large family farm, I filled my days with immersive storytelling playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and I gravitated towards HCI.</p>
        <p>After spending a few years as an engineering lead I made the switch to experience design. I found a real talent for invention and innovation combining my technical background with the focus on the human experience. As a result I've been elected to innovation councils, received patents and awards, launched innovation programs, and worked directly with C-suite executives at Fortune 500 companies on strategic projects.</p>
        <p>Along the way I became a musician, playing spacy guitar riffs in The Answer Team, touring and recording two albums.</p>
        <p>I currently live in Atlanta with my partner and kiddo.</p>

        <!-- <p>I'm a cross-functional leader with 19 years of experience specializing in working on large scale, complex, and ambiguous projects.</p>
        <p>I have experience across multiple industries including big tech, entertainment, b2b, advertising, and fintec most recently having worked for The Walt Disney Studios, Amazon, and Rocket Companies.</p>
        <p>I have extensive experience going from 0-to-1 and transforming emerging technologies and ambiguity into effective, delightful experiences.</p> -->
      </section>

      <div class="columns">
        <section class="left">
          <h3>Patents</h3>
          <ul id="patents">
            <li>
              <span class="title">Physical Navigation Guided via Story‐Based Augmented and/or Mixed Reality Experiences</span>
                <span class="number">us 15/593,258</span>
            </li>
            <li>
              <span class="title">Recording High Fidelity Digital Immersive Experiences Through Off-Device Computation</span>
                <span class="number">us 15/338,806</span>
            </li>
            <li>
              <span class="title">Dynamically Changing a 3D Object into an Interactive 3D Menu</span>
                <span class="number">us 14/734278</span>
            </li>
          </ul>
        </section>
        <section class="right">
          <h3>Recognition</h3>
          <ul id="awards">
            <li>Webby</li>
            <li>FWA</li>
            <li>W3</li>
            <li>Disney Inventor</li>
            <li>Best of Disney</li>
            <li>Microsoft PhizzPop Challenge</li>
          </ul>
        </section>
      </div>
    </section>

    <!-- ----------------- -->
    <!-- PORTFOLIO SECTION -->
    <!-- ----------------- -->

    <!--<section id="portfolio2">
      <h2>Portfolio</h2>
      
      <ul class="carousel">
        <li class="slide columns" ref="slide1">
          <div class="left">
            <img src="./portfolio/alexa/profile/thumb.png">
          </div>
          <div class="right">
            <span class="title">Alexa Profile</span>
            <span class="company">Alexa 2019</span>
            <div>
              <span @click="goto('slide3')">Previous</span>
              <span @click="goto('slide2')">Next</span>
            </div>
          </div>
        </li>

        <li class="slide columns" ref="slide2">
          <div class="left">
            <img src="./portfolio/alexa/alexa-cortana/thumb.png">
          </div>
          <div class="right">
            <span class="title">Alexa + Cortana</span>
            <span class="company">Alexa 2017</span>
            <div>
              <span @click="goto('slide1')">Previous</span>
              <span @click="goto('slide3')">Next</span>
            </div>
          </div>
        </li>

        <li class="slide columns" ref="slide3">
          <div class="left">
            <img src="./portfolio/disney/vr/thumb.png">
          </div>
          <div class="right">
            <span class="title">Filmmaking for VR</span>
            <span class="company">Disney 2014</span>
            <div>
              <span @click="goto('slide2')">Previous</span>
              <span @click="goto('slide1')">Next</span>
            </div>
          </div>
        </li>
      </ul>
      
    </section>-->

    <section id="portfolio">
      <h2>&bull; P<span class="o">o</span>rtfolio &bull;</h2>

      <!-- Rocket -->

      <div class="company">
        <h3>Rocket Companies</h3>
        <p>As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.</p>
        <div class="projects columns">
          <router-link
            class="project"
            v-for="p in portfolioData.rocket.projects"
            :data="p"
            :key="p.route.name"
            :to="p.route"
            :title="p.title">
              <img :src="require(`${p.image}`)" class="work">
              <span class="title">{{p.title}}</span>
              <span class="company">{{p.year}}</span>
          </router-link>
        </div>
        <div class="news" v-if="portfolioData.rocket.news.all.length">
          <p>Articles about my work at Rocket:</p>
          <ul>
              <li v-for="n in portfolioData.rocket.news.top3"><NewsLink
              :url="n.url"
              :title="n.title"
              :source="n.pub"></NewsLink></li>
          </ul>
          <router-link :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all the articles ({{ portfolioData.rocket.news.all.length }} total)</router-link>
        </div>
      </div>

      <!-- Amazon -->

      <div class="company">
        <h3>Amazon</h3>
        <p>At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.</p>
        <div class="projects columns">
          <router-link
            class="project"
            v-for="p in portfolioData.amazon.projects"
            :data="p"
            :key="p.route.name"
            :to="p.route"
            :title="p.title">
              <img :src="require(`${p.image}`)" class="work">
              <span class="title">{{p.title}}</span>
              <span class="company">{{p.year}}</span>
          </router-link>
        </div>
        <div class="news" v-if="portfolioData.amazon.news.all.length">
          <p>Articles about my work at Amazon:</p>
          <ul>
              <li v-for="n in portfolioData.amazon.news.top3"><NewsLink
              :url="n.url"
              :title="n.title"
              :source="n.pub"></NewsLink></li>
          </ul>
          <router-link :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all the articles ({{ portfolioData.amazon.news.all.length }} total)</router-link>
        </div>
      </div>

      <!-- Disney -->

      <div class="company">
        <h3>Walt Disney Studios</h3>
        <p>At Disney...</p>
        <div class="projects columns">
          <router-link
            class="project"
            v-for="p in portfolioData.disney.projects"
            :data="p"
            :key="p.route.name"
            :to="p.route"
            :title="p.title">
              <img :src="require(`${p.image}`)" class="work rounded">
              <span class="title">{{p.title}}</span>
              <span class="company">{{p.year}}</span>
          </router-link>
        </div>
        <div class="news" v-if="portfolioData.disney.news.all.length">
          <p>Articles about my work at Disney:</p>
          <ul>
              <li v-for="n in portfolioData.disney.news.top3"><NewsLink
              :url="n.url"
              :title="n.title"
              :source="n.pub"></NewsLink></li>
          </ul>
          <router-link :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all the articles ({{ portfolioData.disney.news.all.length }} total)</router-link>
        </div>
      </div>

      <!-- Phenomblue -->

      <div class="company">
        <h3>Phenomblue</h3>
        <p>Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.</p>
        <div class="projects columns">
          <router-link
            class="project"
            v-for="p in portfolioData.phenomblue.projects"
            :data="p"
            :key="p.route.name"
            :to="p.route"
            :title="p.title">
              <img :src="require(`${p.image}`)" class="work rounded">
              <span class="title">{{p.title}}</span>
              <span class="company">{{p.year}}</span>
          </router-link>
        </div>
        <div class="news" v-if="portfolioData.phenomblue.news.all.length">
          <p>Articles about my work at Phenomblue:</p>
          <ul>
              <li v-for="n in portfolioData.phenomblue.news.top3"><NewsLink
              :url="n.url"
              :title="n.title"
              :source="n.pub"></NewsLink></li>
          </ul>
          <router-link :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all the articles ({{ portfolioData.phenomblue.news.all.length }} total)</router-link>
        </div>
      </div>

    </section>

    <!-- ------------ -->
    <!-- NEWS SECTION -->
    <!-- ------------ -->

    <section id="news">
      <h2>&bull; In The News &bull;</h2>
      <div class="content news">
        <p>My work has been featured or mentioned in at least <strong>{{ newsData.length }} articles</strong> (that I know of).</p>
        <ul>
            <li v-for="n in newsData"><NewsLink
            :url="n.url"
            :title="n.title"
            :source="n.pub"></NewsLink></li>
        </ul>
      </div>
    </section>

    <!-- --------------- -->
    <!-- CONTACT SECTION -->
    <!-- --------------- -->

    <section id="contact">
      <!-- https://www.ionos.com/digitalguide/e-mail/e-mail-security/protecting-your-email-address-how-to-do-it/ -->
      <div class="columns">
        <div class="left">
          <h2>Contact<br />Me</h2>
        </div>
        <div class="right content">
          <p>Let's shoot the shit.</p>
          <!-- ADPlist widget -->
          <!--
            <section style="height: 496px; box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px; border-radius: 16px; overflow: hidden; width: 100%; max-width: 650px;"><iframe src="https://adplist.org/widgets/booking?src=jason-bejot" title="" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>
          -->
          <p><Email /></p>
          <div id="social">
            <a href="https://twitter.com/jasonbejot" title="Twitter" target="_blank"><SVGTwitter /></a>
            <a href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank"><SVGLinkedIn /></a>
            <a href="https://medium.com/@jasonbejot" title="Medium" target="_blank"><SVGMedium /></a>
          </div>
        </div>
      </div>
    </section>

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Page from 'components/PageTemplate';
  import projectData from 'data/portfolio';
  import SVGTwitter from 'components/SVGTwitter';
  import SVGMedium from 'components/SVGMedium';
  import SVGLinkedIn from 'components/SVGLinkedIn';
  import Email from 'components/Email';
  import newsData from 'data/news-coverage';
  import NewsLink from 'components/NewsLink';
  import companies from 'data/companies';

  export default {
    name: 'Index',

    components: {
      Page,
      SVGTwitter,
      SVGMedium,
      SVGLinkedIn,
      Email,
      NewsLink
    },

    /*methods: {
      // https://stackoverflow.com/questions/61435070/scroll-down-when-clicked-with-vue-js
      goto(ref) {
        let el = this.$refs[ref];
        
        el.parentElement.scrollTo(
          el.offsetLeft - el.parentElement.offsetLeft,
          el.offsetTop
          );
      }
    },*/

    data () {

      // remove all hidden projects and sort the rest
      let projects = _.orderBy(
        _.filter(
          projectData,
          o => { return !o.hidden; }),
        [ 'year' ],
        [ 'desc' ]);

      let portfolioData = {};
      _.each(companies, (value, key) => {
        portfolioData[value.slug] = {
          projects: _.filter(projects, o => { return o.company.slug == value.slug; }),
          news: {
            all: _.filter(newsData, o => { return o.company.slug == value.slug })
          }
        }
        portfolioData[value.slug].news.top3 = _.take(portfolioData[value.slug].news.all, 3)
      });

      return {
        portfolioData: portfolioData,
        newsData: newsData
      }
    }

  }
</script>

<style scoped lang="scss">

  @font-face {
    font-family: 'Mainstay';
    font-weight: normal;
    src: url('/src/assets/fonts/Mainstay.otf'),
         url('/src/assets/fonts/Mainstay.ttf');
  }

  h1 {
    font-family: 'Mainstay';
    text-transform: none;
    letter-spacing: normal;
    font-size: 6rem;
    transform: rotate(-18deg);
  }

  h2 {
    font-family: 'Mainstay';
    letter-spacing: normal;
    font-size: 5rem;
    font-weight: normal;
    line-height: 4.5rem;
    text-transform: none;
    //text-align: left;
  }

  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    .left { grid-column: left; }
    .right { grid-column: right; }
  }

  #portfolio {
    > .company + .company {
      margin-top: 7rem;
    }

    .news {
      margin-top: 3rem;
    }

    h3 {
      font-size: 1.5rem;
      //padding: 0 0 1rem 0;
      //text-align: center;

      + p {
        padding: 0 0 3rem 0;
      }
    }

    img.rounded {
      -webkit-border-radius: 16px;
      -moz-border-radius: 16px;
      border-radius: 16px;
      box-shadow: 0 8px 6px -6px black;
      margin-bottom: 1rem;
    }
  }

  #contact {
    .columns {
      grid-template-columns: [left] max-content [right] 1fr;
      grid-gap: 1.5rem;
    }

    h2 {
      transform: rotate(-18deg);
      text-align: center;

      &::before {
        display: none;
      }
    }
  }

  /*#portfolio2 {
    .carousel {
      list-style: none;
      display: flex;
      overflow-x: scroll;
      counter-reset: item;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }

    .slide {
      position: relative;
      flex: 0 0 100%;
      width: 100%;
      counter-increment: item;
    }

    .columns {
      grid-template-columns: [left] max-content [right] 1fr;
      grid-gap: 1.5rem;
    }
  }*/

  #name {
    margin-bottom: 0;
    p {
      text-align: center;
    }
  }

  #social {
    margin-top: 3rem;
    display: flex;
    justify-content: center;

    a {
      margin: 0 1.3rem;
    }

    svg {
      width: 2rem;
      height: 2rem;
      fill: $color-text-dark;
    }
  }

  #portfolio {
    h2 {
      > .o {
        letter-spacing: -0.55rem;
      }
    }

    .columns {
      //display: grid;
      //grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      //grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
      //grid-auto-rows: 1fr;
      grid-gap: 3.5rem 1.5rem;

      @include screen-large { }
      @include screen-regular { }
      @include screen-small { grid-template-columns: auto; }
    }

    a.project {
      text-decoration: none;
      text-align: center;

      &:hover {
        .title {
          text-decoration: underline;
        }

        .company {
          text-decoration: none;
        }
      }

      .title, .company {
        display: block;
      }

      .company {
        color: $color-text-dark;
        font-size: 0.7rem;
        text-transform: uppercase;
        text-decoration: none;
        margin-top: 0.25em;
        flex-shrink: 0;
      }
    }

    #featured {
      a {
        // https://spin.atomicobject.com/2015/07/14/css-responsive-square/
        position: relative;
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;

        &:hover {
          text-decoration: none;

          .title {
            text-decoration: underline;
          }

          img {
            filter: hue-rotate(30deg) blur(4px) brightness(150%);
          }
        }

        &:after {
          content: '';
          display: block;
          padding-bottom: 100%;
        }

        .wrapper {
          position: absolute;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }

        img {
          transition: filter 0.3s ease;
          flex-grow: 1;
        }

        .title {
          display: block;
          width: 100%;
          font-size: 1.2rem;
          @include font-raleway;
          font-weight: 300;
          margin-top: 0.3rem;
          flex-shrink: 0;
        }
      }
    }

    #archive {
      margin-top: 3rem;
      grid-gap: 2rem;
      //@include screen-small { grid-template-columns: auto; }
    }
  }

  #about {
    
  }

  #about .columns {
    //display: grid;
    grid-template-columns: [left] 1fr [right] 0.7fr;
    //grid-auto-rows: 1fr;
    grid-gap: 2.5rem;
    margin-top: 3rem;

    @include screen-small {
      //grid-template-columns: [left right] auto;
      display: block;
      .right { margin-top: 1.5rem; }
    }

    //.left { grid-column: left; }
    //.right { grid-column: right; }

    #patents {
      .number {
        font-size: 0.7rem;
        text-transform: uppercase;
        margin-top: 0.25em;
      }

      .title {
        display: block;
      }

      li + li {
        margin-top: 1rem;
      }
    }
  }

  /*#news ul, */#about ul {
    list-style: none;
    margin: 0;
  }

  .news {
    ul{
      list-style: none;
      margin: 0;

      + a {
        margin-top: 2rem;
        display: inline-block;
      }
    }

    p {
      margin-bottom: 2rem;
      //text-align: center;
    }

    li {
      box-shadow: inset 2px 0 0 0 #c9d0d9;
      padding-left: 1rem;

      + li {
        margin-top: 1rem;
      }
    }

    strong {
      font-weight: 600;
    }
  }

  #contact {
    margin-bottom: 4rem;

    .content {
      text-align: center;
    }
  }

</style>
