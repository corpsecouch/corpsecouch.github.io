<template>
  <Page class="widthConstrained">

    <section id="name">
      <h1>Jason<br />Bejot</h1>
    </section>

    <section class="menu">
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

    <section id="portfolio">
      <h2>&bull; P<span class="o">o</span>rtfolio &bull;</h2>

      <section class="menu">
        <router-link :to="{ path: '/', hash: '#rocket' }" alt="Rocket">Rocket</router-link>
        <router-link :to="{ path: '/', hash: '#amazon' }" alt="Amazon">Amazon</router-link>
        <router-link :to="{ path: '/', hash: '#disney' }" alt="Disney">Disney</router-link>
        <router-link :to="{ path: '/', hash: '#phenomblue' }" alt="Phenomblue">Phenomblue</router-link>
      </section>

      <!-- Rocket -->

      <div class="company" id="rocket">

        <h3>Rocket Companies</h3>
        <p>As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.</p>
        
        <ul class="projects">
          <li class="project" v-for="p in portfolioData.rocket.projects">
            <div class="left">
              <img :src="require(`${p.image}`)" class="rounded">
            </div>
            <div class="right">
              <span class="title">{{ p.title }}</span>
              <span class="year">{{ p.year }}</span>
              <span class="description">{{ p.description }}</span>
              <ul class="tags">
                <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
              </ul>
              <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link>
            </div>
          </li>
        </ul>

        <div class="awards" v-if="portfolioData.rocket.awards.length">
          <p>{{ portfolioData.rocket.awards.length }} award{{ portfolioData.rocket.awards.length > 1 ? 's' : '' }} for my Rocket work:</p>
          <AwardList :data="portfolioData.rocket.awards"></AwardList>
        </div>

        <div class="news" v-if="portfolioData.rocket.news.all.length">
          <p>Articles about my work at Rocket:</p>
          <NewsList :data="portfolioData.rocket.news.top3"></NewsList>
          <router-link class="more-link" :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all {{ portfolioData.rocket.news.all.length }} Rocket articles</router-link>
        </div>
        
      </div>

      <!-- Amazon -->

      <div class="company" id="amazon">

        <h3>Amazon</h3>
        <p>At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.</p>
        
        <ul class="projects">
          <li class="project" v-for="p in portfolioData.amazon.projects">
            <div class="left">
              <img :src="require(`${p.image}`)">
            </div>
            <div class="right">
              <span class="title">{{ p.title }}</span>
              <span class="year">{{ p.year }}</span>
              <span class="description">{{ p.description }}</span>
              <ul class="tags">
                <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
              </ul>
              <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link>
            </div>
          </li>
        </ul>

        <div class="awards" v-if="portfolioData.amazon.awards.length">
          <p>{{ portfolioData.amazon.awards.length }} award{{ portfolioData.amazon.awards.length > 1 ? 's' : '' }} for my Amazon work:</p>
          <AwardList :data="portfolioData.amazon.awards"></AwardList>
        </div>

        <div class="news" v-if="portfolioData.amazon.news.all.length">
          <p>Articles about my work at Amazon:</p>
          <NewsList :data="portfolioData.amazon.news.top3"></NewsList>
          <router-link class="more-link" :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all {{ portfolioData.amazon.news.all.length }} Amazon articles</router-link>
        </div>

      </div>

      <!-- Disney -->

      <div class="company" id="disney">

        <h3>Walt Disney Studios</h3>
        <p>At Disney...</p>
        
        <ul class="projects">
          <li class="project" v-for="p in portfolioData.disney.projects">
            <div class="left">
              <img :src="require(`${p.image}`)" class="rounded">
            </div>
            <div class="right">
              <span class="title">{{ p.title }}</span>
              <span class="year">{{ p.year }}</span>
              <span class="description">{{ p.description }}</span>
              <ul class="tags">
                <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
              </ul>
              <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link>
            </div>
          </li>
        </ul>

        <div class="awards" v-if="portfolioData.disney.awards.length">
          <p>{{ portfolioData.disney.awards.length }} award{{ portfolioData.disney.awards.length > 1 ? 's' : '' }} for my Disney work:</p>
          <AwardList :data="portfolioData.disney.awards"></AwardList>
        </div>

        <div class="news" v-if="portfolioData.disney.news.all.length">
          <p>Articles about my work at Disney:</p>
          <NewsList :data="portfolioData.disney.news.top3"></NewsList>
          <router-link class="more-link" :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all {{ portfolioData.disney.news.all.length }} Disney articles</router-link>
        </div>

      </div>

      <!-- Phenomblue -->

      <div class="company" id="phenomblue">

        <h3>Phenomblue</h3>
        <p>Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.</p>
        
        <ul class="projects">
          <li class="project" v-for="p in portfolioData.phenomblue.projects">
            <div class="left">
              <img :src="require(`${p.image}`)" class="rounded">
            </div>
            <div class="right">
              <span class="title">{{ p.title }}</span>
              <span class="year">{{ p.year }}</span>
              <span class="description">{{ p.description }}</span>
              <ul class="tags">
                <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
              </ul>
              <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link>
            </div>
          </li>
        </ul>

        <div class="awards" v-if="portfolioData.phenomblue.awards.length">
          <p>{{ portfolioData.phenomblue.awards.length }} award{{ portfolioData.phenomblue.awards.length > 1 ? 's' : '' }} for my Phenomblue work:</p>
          <AwardList :data="portfolioData.phenomblue.awards"></AwardList>
        </div>

        <div class="news" v-if="portfolioData.phenomblue.news.all.length">
          <p>Articles about my work at Phenomblue:</p>
          <NewsList :data="portfolioData.phenomblue.news.top3"></NewsList>
          <router-link class="more-link" :to="{ path: '/', hash: '#news' }" alt="See all the articles">See all {{ portfolioData.phenomblue.news.all.length }} Phenomblue articles</router-link>
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
        <NewsList :data="newsData"></NewsList>
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
  import companies from 'data/companies';
  import NewsList from 'components/NewsList';
  import AwardList from 'components/AwardList';
  import awardsData from 'data/awards';

  export default {
    name: 'Index',

    components: {
      Page,
      SVGTwitter,
      SVGMedium,
      SVGLinkedIn,
      Email,
      NewsList,
      AwardList
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
        _.filter(projectData, o => { return !o.hidden; }),
        [ 'year' ],
        [ 'desc' ]);

      let portfolioData = {};
      _.each(companies, (value, key) => {
        portfolioData[value.slug] = {

          projects: _.filter(projects, o => { return o.company.slug == value.slug; }),

          awards: _.orderBy(
            _.filter(awardsData, o => { return o.company.slug == value.slug }),
            o => { return o.date.year; },
            ['desc']),

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
  }

  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    .left { grid-column: left; }
    .right { grid-column: right; }
  }

  #portfolio {
    > .company {
      margin-top: 7rem; }

    .news, .awards { margin-top: 3rem; }

    h3 {
      font-size: 1.5rem;
      + p { padding: 0 0 3rem 0; }
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

      &::before { display: none; }
    }
  }

  #name {
    margin-bottom: 0;
    p { text-align: center; }
  }

  .menu {
    margin-top: 3rem;
    display: flex;
    justify-content: center;

    a { margin: 0 1.3rem; }
  }

  #social {
    margin-top: 3rem;
    display: flex;
    justify-content: center;

    a { margin: 0 1.3rem; }

    svg {
      width: 2rem;
      height: 2rem;
      fill: $color-text-dark;
    }
  }

  #portfolio {
    h2 {
      > .o { letter-spacing: -0.55rem; }
    }

    .columns {
      grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
      grid-gap: 3.5rem 1.5rem;

      @include screen-large { }
      @include screen-regular { }
      @include screen-small { grid-template-columns: auto; }
    }

    .projects {
      margin: 0;
      list-style: none;

      .project {
        display: grid;
        grid-template-columns: [left] 40% [right] 1fr;
        grid-column-gap: 2rem;

        + .project { margin-top: 3.5rem; }
        .left {
          grid-column: left;

          object-fit: contain;
          > img {
            width: 100%;

            &.rounded {
              -webkit-border-radius: 16px;
              -moz-border-radius: 16px;
              border-radius: 16px;
              box-shadow: 0 8px 12px -7px black;
            }
          }
        }
        .right {
          grid-column: right;
          > * {
            + * { margin-top: 1rem; }
          }
        }

        .right > * {
          + * { margin-top: 1rem; }
        }

        .title {
          display: block;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .year {
          display: block;
          font-style: italic;
          margin: 0;
          font-size: 0.7rem;
        }

        .description { display: block; }

        .tags {
          list-style: none;
          margin-left: 0;
          display: flex;
          flex-flow: row wrap;
          gap: 0.2rem 0.5rem;
          .tag {
            background-color: #9ec4ce;
            color: $color-text-light;
            padding: 0 0.7rem;
            border-radius: 1rem;
            font-size: 0.8rem;
          }
        }

        .link { display: inline-block; }
      }
    }

    a.project {
      text-decoration: none;
      text-align: center;

      &:hover {
        .title { text-decoration: underline; }

        .company { text-decoration: none; }
      }

      .title, .company { display: block; }

      .company {
        color: $color-text-dark;
        font-size: 0.7rem;
        text-transform: uppercase;
        text-decoration: none;
        margin-top: 0.25em;
        flex-shrink: 0;
      }
    }

    /*#featured {
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
    }*/

    #archive {
      margin-top: 3rem;
      grid-gap: 2rem;
      //@include screen-small { grid-template-columns: auto; }
    }
  }

  #about .columns {
    grid-template-columns: [left] 1fr [right] 0.7fr;
    grid-gap: 2.5rem;
    margin-top: 3rem;

    @include screen-small {
      //grid-template-columns: [left right] auto;
      display: block;
      .right { margin-top: 1.5rem; }
    }

    #patents {
      .number {
        font-size: 0.7rem;
        text-transform: uppercase;
        margin-top: 0.25em;
      }

      .title { display: block; }

      li + li { margin-top: 1rem; }
    }
  }

  #about ul {
    list-style: none;
    margin: 0;
  }

  .news, .awards {

    .more-link {
      margin-top: 2rem;
      display: block;
    }

    p { margin-bottom: 2rem; }

    strong { font-weight: 600; }
  }

  #contact {
    margin-bottom: 4rem;
    .content { text-align: center; }
  }

</style>
