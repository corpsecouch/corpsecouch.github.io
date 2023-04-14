<template>
  <Page class="widthConstrained">

    <!--<p>Experience design that looks around corners.</p>-->

    <section id="name">
      <h1>Jason Bejot</h1>
      <!--<p>Experience design that looks around corners.</p>-->
    </section>

    <section id="social">
      <router-link :to="{ path: '/', hash: '#portfolio' }" alt="Portfolio">Portfolio</router-link>
      <router-link :to="{ path: '/', hash: '#about' }" alt="About">About</router-link>
      <router-link :to="{ path: '/', hash: '#contact' }" alt="Contact">Contact</router-link>
    </section>

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

    <section id="about">
      <h2>About</h2>
      <div class="columns">
        <section class="left">
          <!--<p>I always knew I wanted to positively impact people's lives. Even my motivation for getting a Computer Science degree was to entertain and enrich lives by making games.</p>
          <p>Growing up on a large family farm, I filled my days with immersive storytelling by playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and gravitated towards HCI.</p>
          <p>After spending a few years as an engineering lead I made the switch to experience design. I've been able to create things that delight millions of people and drive business (of course). Combined with my science and technical background, I've found a passion for driving innovation and invention through the lens of the experience. As a result I was elected to the innovation council at Phenomblue, received three Disney Inventor Awards, a patent, launched a product incubator within Disney Studios and was handpicked by the Disney Studios CTO to spearhead a Studio-wide innovation initiative.</p>
          <p>In a previous life I was musician writing and playing spacy guitar riffs in The Answer Team, touring and recording two albums. Then I was a biker tempting fate on the treacherous, twisty Southern California canyon roads.</p>
          <p>I currently live in Seattle with my partner and child.</p>-->

          <p>I'm an experience design and product leader with a background in computer science, innovation, and entreprenuership with 15+ years of professional leadership experience envisioning the future, crafting strategies, and delivering experiences.</p>
          <p>Growing up on a large family farm, I filled my days with immersive storytelling playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and I gravitated towards HCI.</p>
          <p>After spending a few years as an engineering lead I made the switch to experience design. I found a real talent for invention and innovation combining my technical background with the focus on the human experience. As a result I've been elected to innovation councils, received patents and awards, launched innovation programs, and worked directly with C-suite executives at Fortune 500 companies on strategic projects.</p>
          <p>Along the way I became a musician, playing spacy guitar riffs in The Answer Team, touring and recording two albums.</p>
          <p>I currently live in Atlanta with my partner and kiddo.</p>

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

          <h3>News Coverage</h3>
          <ul id="news">
            <li>TechCrunch</li>
            <li>Venturebeat</li>
            <li>The Verge</li>
            <li>Ars Technica</li>
            <li>Lifehacker</li>
            <li>CNet</li>
            <li>PCMag</li>
            <li>Slate</li>
            <li>CNBC</li>
            <li>Washington Post</li>
            <li>TechRadar</li>
          </ul>
        </section>
      </div>
    </section>

    <section id="contact">
      <!-- https://www.ionos.com/digitalguide/e-mail/e-mail-security/protecting-your-email-address-how-to-do-it/ -->
      <h2>Contact</h2>
      <div class="content">
        <p>Let's shoot the shit.</p>
        <p><Email /></p>
        <div id="social">
          <a href="https://twitter.com/jasonbejot" title="Twitter" target="_blank"><SVGTwitter /></a>
          <a href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank"><SVGLinkedIn /></a>
          <a href="https://medium.com/@jasonbejot" title="Medium" target="_blank"><SVGMedium /></a>
        </div>
      </div>
    </section>

    <!--<section id="intro">
      <div class="container">
        <p class="title separator">I'm not just another designer</p>
        <p>I'm a technologist who designs experiences addressing the human side of innovation, how behavior and technology together can create a brighter future.</p>
        <p>I work at the intersection of psychology, technology, and business.</p>
      </div>
    </section>

    <section id="alexa" class="work dark">
      <div class="container">
        <p class="company separator">amazon alexa</p>
        <p class="role">sr. ux design lead</p>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nec in eget elit orci consectetur nullam. Fringilla massa nisi erat elementum eu mauris. Quis sed tristique a adipiscing vitae quam tortor egestas fames. Proin dolor quis sit ultricies. Hendrerit mauris at gravida lectus viverra eu. Consectetur morbi.</p>
        <a class="case-study">case studies</a>
      </div>
    </section>

    <section id="disney" class="work">
      <div class="container">
        <p class="company separator">walt disney studios</p>
        <p class="role">principal ux architect</p>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nec in eget elit orci consectetur nullam. Fringilla massa nisi erat elementum eu mauris. Quis sed tristique a adipiscing vitae quam tortor egestas fames. Proin dolor quis sit ultricies. Hendrerit mauris at gravida lectus viverra eu. Consectetur morbi.</p>
        <a class="case-study">case studies</a>
      </div>
    </section>

    <section id="ace-metrix" class="work dark">
      <div class="container">
        <p class="company separator">ace metrix</p>
        <p class="role">creative director</p>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nec in eget elit orci consectetur nullam. Fringilla massa nisi erat elementum eu mauris. Quis sed tristique a adipiscing vitae quam tortor egestas fames. Proin dolor quis sit ultricies. Hendrerit mauris at gravida lectus viverra eu. Consectetur morbi.</p>
        <a class="case-study">case studies</a>
      </div>
    </section>

    <section id="phenomblue" class="work">
      <div class="container">
        <p class="company separator">phenomblue</p>
        <p class="role">sr. ux designer</p>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nec in eget elit orci consectetur nullam. Fringilla massa nisi erat elementum eu mauris. Quis sed tristique a adipiscing vitae quam tortor egestas fames. Proin dolor quis sit ultricies. Hendrerit mauris at gravida lectus viverra eu. Consectetur morbi.</p>
        <a class="case-study">case studies</a>
      </div>
    </section>-->

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

  export default {
    name: 'Index',

    components: {
      Page,
      SVGTwitter,
      SVGMedium,
      SVGLinkedIn,
      Email
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

        /*projectsFeatured: _.filter(
          portfolioData,
          o => { return o.feature; }),*/

        // only return non-featured projects
        projectsArchived: _.filter(
          projects,
          o => { return !o.featured; })

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

    ul {
      list-style: none;
      margin: 0;
    }

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

  #contact {
    margin-bottom: 4rem;

    .content {
      text-align: center;
    }
  }

</style>
