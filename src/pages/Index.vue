<template>
  <Page class="widthConstrained">

    <section id="name">
      <h1>Jason<br />Bejot</h1>
      <img src="../assets/photo1-circle.jpg">
    </section>

    <section class="menu">
      <router-link :to="{ path: '/', hash: '#about' }" alt="About">About</router-link>
      <router-link :to="{ name: 'portfolio' }" alt="Portfolio">Portfolio</router-link>
      <router-link :to="{ name: 'news' }" alt="News">News</router-link>
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
        <div id="music" class="columns">
          <div class="left">
            <p>Along the way I became a musician, playing spacy guitar riffs in The Answer Team, touring and recording two albums.</p>
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2oFXTgnIh7MmeadK8482zc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div class="right">
            <img src="../assets/guitar.jpg">
          </div>
        </div>
        <p>I currently live in Atlanta with my partner and kiddo.</p>

        <!-- <p>I'm a cross-functional leader with 19 years of experience specializing in working on large scale, complex, and ambiguous projects.</p>
        <p>I have experience across multiple industries including big tech, entertainment, b2b, advertising, and fintec most recently having worked for The Walt Disney Studios, Amazon, and Rocket Companies.</p>
        <p>I have extensive experience going from 0-to-1 and transforming emerging technologies and ambiguity into effective, delightful experiences.</p> -->
      </section>

      <!--
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
      -->
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
          <!-- ADPlist widget -->
          <!--
            <section style="height: 496px; box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px; border-radius: 16px; overflow: hidden; width: 100%; max-width: 650px;"><iframe src="https://adplist.org/widgets/booking?src=jason-bejot" title="" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>
          -->
          <div id="social">
            <span><Email class="email"><template v-slot:icon><SVGEmail /></template></Email></span>
            <span><a class="linkedin" href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank"><SVGLinkedIn />LinkedIn</a></span>
            <span><a class="adplist" href="https://adplist.org/mentors/jason-bejot" title="ADPList" target="_blank"><SVGADPList />ADPList</a></span>
            <span><a class="medium" href="https://medium.com/@jasonbejot" title="Medium" target="_blank"><SVGMedium />Medium</a></span>
            <span><a class="twitter" href="https://twitter.com/jasonbejot" title="X (Twitter)" target="_blank"><SVGTwitter />X (Twitter)</a></span>
            <span><a class="github" href="https://github.com/corpsecouch" title="Github" target="_blank"><SVGGithub />Github</a></span>
          </div>
        </div>
      </div>
    </section>

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Page from 'components/PageTemplate';
  import SVGTwitter from 'components/SVGTwitter';
  import SVGMedium from 'components/SVGMedium';
  import SVGLinkedIn from 'components/SVGLinkedIn';
  import SVGEmail from 'components/SVGEmail';
  import SVGADPList from 'components/SVGADPList';
  import SVGGithub from 'components/SVGGithub';
  import Email from 'components/Email';

  export default {
    name: 'Index',

    components: {
      Page,
      SVGTwitter,
      SVGMedium,
      SVGLinkedIn,
      SVGEmail,
      SVGADPList,
      SVGGithub,
      Email
    }
  }
</script>

<style scoped lang="scss">

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

  #contact {
    //border: dotted black 3px;
    //border-radius: 16px;
    //padding: 2rem 4rem;

    .columns {
      grid-template-columns: [left] 1fr [right] 1fr;
      @include screen-small { grid-template-columns: [left right] auto; }
      grid-gap: 1.5rem;

      .left {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      .right {
        display: flex;
        flex-flow: row;
        justify-content: space-around;
      }
    }

    h2 {
      transform: rotate(-18deg);
      text-align: center;
      margin: 0;

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
    display: flex;
    flex-flow: column nowrap;
    row-gap: 1rem;

    a {
      display: inline-flex;
      flex-flow: row nowrap;
      align-items: center;
      column-gap: 0.6rem;
    }

    /*svg {
      width: 2rem;
      height: 2rem;
      fill: $color-text-dark;
    }*/
  }

  #name {
    position: relative;

    h1 {
      position: relative;
      left: -6rem;
      font-family: 'Mainstay';
      text-transform: none;
      letter-spacing: normal;
      font-size: 6rem;
      transform: rotate(-18deg);
      @include screen-xsmall {
        left: 0;
        top: -4rem;
      }
    }

    img {
      width: 19rem;
      position: absolute;
      top: -3rem;
      right: 6rem;
      z-index: -1;
      border: dashed grey 1px;
      border-radius: 100%;
      padding: 0.3rem;
      @include screen-regular { right: 10%; }
      @include screen-small { right: 0; }
      @include screen-xsmall {
        right: 0;
        width: 10rem;
        top: auto;
        //bottom: -5rem;
        bottom: -2rem;
      }
    }
  }

  #about .columns {
    grid-template-columns: [left] 1fr [right] 0.7fr;
    grid-gap: 2.5rem;
    //margin-top: 3rem;

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

  #music {
    &.columns {
      margin-top: 1.3rem;
    }

    img {
      width: 19rem;
    }

    p {
      margin-bottom: 1.3rem;
    }
  }

</style>
