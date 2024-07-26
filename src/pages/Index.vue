<template>
  <Page class="widthConstrained">

    <section id="name">
      <h1>Jason Bejot</h1>
      <!--<p>Experience design that looks around corners.</p>-->
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
      <div class="columns">
        <section class="left">
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

        <section class="right">
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

          <h3>Recognition</h3>
          <ul id="awards">
            <li>Webby</li>
            <li>FWA</li>
            <li>W3</li>
            <li>Disney Inventor</li>
            <li>Best of Disney</li>
            <li>Microsoft PhizzPop Challenge</li>
          </ul>

          <!--<h3>News Coverage</h3>
          <ul id="news">
            <li v-for="n in newsOrgs">{{n}}</li>
          </ul>-->
        </section>
      </div>
    </section>

    <!-- ----------------- -->
    <!-- PORTFOLIO SECTION -->
    <!-- ----------------- -->

    <section id="portfolio">
      <h2>Portfolio</h2>
      <div id="featured" class="columns">
        <router-link
          class="project"
          :to="{ name: 'alexaprofile' }"
          title="Alexa Profile">
          <span class="wrapper">
            <img src="./portfolio/alexa/profile/thumb.png" class="work">
            <span class="title">Alexa Profile</span>
            <span class="company">Alexa 2019</span>
          </span>
        </router-link>

        <router-link
          class="project"
          :to="{ name: 'alexacortana' }"
          title="Alexa + Cortana">
          <span class="wrapper">
            <img src="./portfolio/alexa/alexa-cortana/thumb.png" class="work">
            <span class="title">Alexa + Cortana</span>
            <span class="company">Alexa 2017</span>
          </span>
        </router-link>

        <router-link
          class="project"
          :to="{ name: 'disneyvr' }"
          title="Filmmaking for VR">
          <span class="wrapper">
            <img src="./portfolio/disney/vr/thumb.png" class="work">
            <span class="title">Filmmaking for VR</span>
            <span class="company">Disney 2014</span>
          </span>
        </router-link>
      </div>

      <div id="archive" class="columns">
        <router-link
          class="project"
          v-for="p in projectsArchived"
          :data="p"
          :key="p.route.name"
          :to="p.route"
          :title="p.title">
            <span class="title">{{p.title}}</span>
            <span class="company">{{p.company.name.short}} {{p.year}}</span>
        </router-link>
      </div>

    </section>

    <!-- ------------ -->
    <!-- NEWS SECTION -->
    <!-- ------------ -->

    <section id="news">
      <h2>In The News</h2>
      <div class="content">
        <p>My work has been featured or mentioned in at least <strong>{{ newsCount }} articles</strong> (that I know of).</p>
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
      <h2>Contact Me</h2>
      <div class="content">
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
    </section>

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Page from 'components/PageTemplate';
  import portfolioData from 'data/portfolio';
  import SVGTwitter from 'components/SVGTwitter';
  import SVGMedium from 'components/SVGMedium';
  import SVGLinkedIn from 'components/SVGLinkedIn';
  import Email from 'components/Email';
  import newsData from 'data/news-coverage';
  import NewsLink from 'components/NewsLink';

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

    data () {

      // remove all hidden projects and sort the rest
      let projects = _.orderBy(
        _.filter(
          portfolioData,
          o => { return !o.hidden; }),
        [ 'year' ],
        [ 'desc' ]);

      return {

        //projectsAll: portfolioData,
        
        projectsArchived: _.filter(projects, o => { return !o.featured; }), // only return non-featured projects
        //newsOrgs: _.uniq(_.map(newsData, 'pub')),  // get all the unique names of the publications
        newsCount: newsData.length,
        newsData: newsData

      }
    }

  }
</script>

<style scoped lang="scss">

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
    .columns {
      display: grid;
      //grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      //grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
      grid-auto-rows: 1fr;
      grid-gap: 1.5rem;

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

  #about .columns {
    display: grid;
    grid-template-columns: [left] 1fr [right] 0.7fr;
    grid-auto-rows: 1fr;
    grid-gap: 2.5rem;

    @include screen-small {
      //grid-template-columns: [left right] auto;
      display: block;
      .right { margin-top: 1.5rem; }
    }

    .left { grid-column: left; }
    .right { grid-column: right; }

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

  #news ul, #about ul {
    list-style: none;
    margin: 0;
  }

  #news {
    p {
      margin-bottom: 2rem;
      text-align: center;
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
