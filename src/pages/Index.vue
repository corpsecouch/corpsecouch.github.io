<template>
  <Page class="widthConstrained">

    <section id="name">
      <h1>Jason<br />Bejot</h1>
      <img src="@assets/photo1-circle.jpg">
    </section>

    <section id="intro">
      <p>Award-winning design leader, technologist, inventor, and founder. Passionate about the intersection of people &amp; technology, design-driven innovation, and the creative application of emerging technology.</p>
      <p>I'm currently open to new work: <Email></Email></p>
    </section>

    <section id="experience">
      <h2>Experience</h2>
      <p>Rocket Mortgage, Amazon, Disney, Ace Metrix, Phenomblue, IndieBooker, SongGrab (founder), Make Believe Studios (co-founder), Orajen, SAIC, USACE</p>
      <p>Connect with me on <a href="https://linkedin.com/in/jasonbejot" title="LinkedIn" target="_blank">LinkedIn</a>.</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <p>I've worked on and led hundreds of projects over my 19 year career. This is just a short list in no particular order:</p>
      <p>Rocket Mortgage Generative AI IVR, Rocket Companies Personalization Strategic Initiative, Rocket Companies AI-powered lead generation, Rocket Mortgage AI Vision &amp; Strategic Initiative, Alexa Profile, Alexa Personalization Program, Alexa & Cortana Integration, Disney Enterprise Design System, Alexa Voice PIN, Alexa Voice ID, Alexa Face ID, Disney Filmmaking with Virtual Reality, Disney Non-Linear Storytelling with Augmented Reality</p>
      <p>Dive into some of these projects on my <a href="/portfolio/">portfolio</a>.</p>
    </section>

    <section id="about">
      <h2>Bio</h2>
      <!--<p>I'm an experience design and product leader with a background in computer science, innovation, and entreprenuership with 19 years of professional leadership experience envisioning the future, crafting strategies, and delivering experiences.</p>-->
      <p>I'm an executive-level tech innovator with 19 years of professional experience, having worked at Disney, Amazon, and Rocket Companies, and more.</p>
      
      <p>Growing up on a large family farm, I filled my days with immersive storytelling playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work, which led me to gravitate toward HCI.</p>

      <p>After spending a few years as an engineering lead I made the switch to experience design. I found a real talent for invention and innovation combining my technical background with the focus on the human experience. As a result I've been elected to innovation councils, received patents and awards, launched innovation programs, and worked directly with C-suite executives at Fortune 500 companies on strategic projects.</p>

      <img src="@assets/guitar.jpg">

      <p>At some point I became a musician, playing spacey guitar riffs in The Answer Team. We were based out of Omaha, Nebraska and, when we were active, we toured and recorded two albums. You can check out The Answer Team's music on <a href="https://open.spotify.com/artist/3mMaoKi4PaOLhYFdAknELD?si=mci-mk0ASMiM1bro9ey0NA" target="_blank">Spotify</a>.</p>

      <p>I currently live in Atlanta with my partner, <a href="https://www.ktmcbratney.com/" target="_blank">Kt McBratney</a>, and kiddo.</p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <p>Leadership, Innovation, Vision Crafting, Strategy, Direction, Storytelling, Research &amp; Development, Design Thinking, 0-to-1 Delivery, UX Design, Product Design, Conversational Design, Voice Design, Rapid Prototyping</p>
    </section>

    <section id="press">
      <h2>Press</h2>
      <p>I know of at least <a href="/press/">{{ news.total }} articles</a> that cover my work. Here's a random sample:</p>
      <NewsList :data="news.data"></NewsList>
      <p><a class="more-link" href="/press/" alt="See all the articles">See all the articles</a></p>
    </section>

    <section id="awards">
      <h2>Awards</h2>
      <!-- <p>I've received {{ awards.total }} awards for my work. Here's a big list of them:</p> -->
      <p>I've received <a href="/awards/">{{ awards.total }} awards</a> for my work. Here's a few random ones.:</p>
      <AwardList :data="awards.data"></AwardList>
      <p><a class="more-link" href="/awards/" alt="See all my awards">See all my awards</a></p>
    </section>

    <section id="mentorship">
      <h2>Mentorship</h2>
      <section style="height: 598px; box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px; border-radius: 12px; overflow: hidden; width: 100%;"><iframe src="https://adplist.org/widgets/booking?src=jason-bejot" title="Mentorship Session" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>
      <section style="padding: 16px; height: 496px; box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px; border-radius: 12px; overflow: hidden; width: 100%;"><iframe src="https://adplist.org/widgets/reviews?src=jason-bejot" title="All Reviews" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>
    </section>

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

  import Page from '@components/PageTemplate';
  import Email from '@components/Email';
  import SVGTwitter from '@components/SVGTwitter';
  import SVGMedium from '@components/SVGMedium';
  import SVGLinkedIn from '@components/SVGLinkedIn';
  import SVGEmail from '@components/SVGEmail';
  import SVGADPList from '@components/SVGADPList';
  import SVGGithub from '@components/SVGGithub';
  import AwardList from '@components/AwardList';
  import awardsData from '@data/awards';
  import NewsList from '@components/NewsList';
  import newsData from '@data/news-coverage';

  import _ from 'lodash';

  export default {
    name: 'Index',

    components: {
      Page,
      Email,
      SVGTwitter,
      SVGMedium,
      SVGLinkedIn,
      SVGEmail,
      SVGADPList,
      SVGGithub,
      AwardList,
      NewsList
    },

data () {
  return {
    awards: {
      total: awardsData.length,
      // data: _.orderBy(awardsData, o => { return o.date.year; }, ['desc'])
      data: _.sampleSize(_.orderBy(awardsData, o => { return o.date.year; }, ['desc']), 3)
    },
    news: {
      total: newsData.length,
      data: _.sampleSize(newsData, 6)
    }
  }
}
  }
</script>

<style scoped lang="css">
  h2 {
    font-family: 'Afacad Flux';
    letter-spacing: normal;
    font-weight: 500;
    text-transform: none;
    text-align: left;
    font-size: 1.8rem;
    line-height: normal;
    margin: 0 0 1rem 0;
    border-bottom: dashed grey 1px;

    & + p { margin-top: 0; }
  }

  main > section {
    margin: 0;
    & + section { margin-top: 7rem; }
  }

  p + ul { margin-top: 1.3rem; }

  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    .left { grid-column: left; }
    .right { grid-column: right; }
  }



  /* *************** */
  /* *** #about *** */
  /* *************** */

  #about {
    img {
      width: 35%;
      float: right;
      border-radius: 10px;
      margin-left: 1rem;
    }
  }



  /* **************** */
  /* *** #contact *** */
  /* **************** */

  #contact {
    margin-top: 12rem;
    margin-bottom: 6rem;

    h2 {
      font-size: 5rem;
      line-height: 4.5rem;
      font-family: 'Mainstay';
      font-weight: normal;
      border: none;
    }

    .columns {
      grid-template-columns: [left] 1fr [right] 1fr;
      grid-gap: 1.5rem;

      /* max-width: small screen */
      @media all and (max-width: 680px) { grid-template-columns: [left right] auto; }

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



  /* *************** */
  /* *** #social *** */
  /* *************** */

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
  }



  /* ************* */
  /* *** #name *** */
  /* ************* */

  #name {
    position: relative;
    margin: 12rem 0;
    /* p { text-align: center; } */

    h1 {
      position: relative;
      left: -6rem;
      font-family: 'Mainstay';
      text-transform: none;
      letter-spacing: normal;
      font-size: 6rem;
      transform: rotate(-18deg);

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) {
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

      /* max-width: regular screen */
      @media all and (max-width: 910px) { right: 10%; }

      /* max-width: small screen */
      @media all and (max-width: 680px) { right: 0; }

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) {
        right: 0;
        width: 10rem;
        top: auto;
        bottom: -2rem;
      }
    }
  }



  /* ******************* */
  /* *** #mentorship *** */
  /* ******************* */

  #mentorship {
    section + section {
      margin-top: 2rem;
    }
  }

</style>
