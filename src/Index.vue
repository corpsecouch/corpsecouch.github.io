<template>
  <section id="name">
    <h1>Jason<br />Bejot</h1>
    <img src="/assets/photos/photo1-circle.jpg">
  </section>

  <section id="intro">
    <!-- <p>Award-winning design leader, technologist, inventor, and founder. Passionate about the intersection of people &amp; technology, design-driven innovation, and the creative application of emerging technology.</p> -->
    <p>I’m an award-winning design and technology leader with nearly two decades of experience driving innovation at world-renowned companies like Disney, Amazon, and Rocket Companies. As a passionate technologist and inventor, I specialize in crafting visionary strategies that merge emerging technologies with human-centered design to solve complex challenges and create impactful solutions.</p>
    <!-- <p>I'm currently open to new work: <Email></Email></p> -->
  </section>

  <section id="experience" class="half-margin">
    <ul>
      <li><img src="/assets/logo-amazon.png" title="Amazon"></li>
      <li><img src="/assets/logo-disney.png" title="Disney"></li>
      <li><img src="/assets/logo-microsoft.png" title="Microsoft"></li>
      <li><img src="/assets/logo-rocket.png" title="Rocket Companies"></li>
      <li><img src="/assets/logo-gsk.png" title="GSK"></li>
      <li><img src="/assets/logo-samsung.png" title="Samsung"></li>
      <li><img src="/assets/logo-playtex.png" title="Playtex"></li>
      <li><img src="/assets/logo-statefarm.png" title="State Farm"></li>
      <li><img src="/assets/logo-lilly.png" title="Eli Lilly"></li>
      <li><img src="/assets/logo-gatorade.png" title="Gatorade"></li>
      <li><img src="/assets/logo-saic.png" title="SAIC"></li>
      <li><img src="/assets/logo-usace.png" title="USACE"></li>
    </ul>
  </section>

  <EmailMe class="half-margin">
    <template v-slot:bottom>Let's do something amazing together.</template>
  </EmailMe>

  <!-- <section id="projects">
    <h2>Projects</h2>
    <p>I've worked on and led hundreds of projects over my 19 year career. This is just a short list in no particular order:</p>
    <p>Rocket Mortgage Generative AI IVR, Rocket Companies Personalization Strategic Initiative, Rocket Companies AI-powered lead generation, Rocket Mortgage AI Vision &amp; Strategic Initiative, Alexa Profile, Alexa Personalization Program, Alexa & Cortana Integration, Disney Enterprise Design System, Alexa Voice PIN, Alexa Voice ID, Alexa Face ID, Disney Filmmaking with Virtual Reality, Disney Non-Linear Storytelling with Augmented Reality</p>
    <p>Dive into some of these projects on my <a href="/portfolio/">portfolio</a>.</p>
  </section> -->

  <section class="quotes">
    <div class="quote">
      <span class="verbatim">Jason is a visionary leader</span>
      <span class="name text-small">Brooke K.</span>
      <span class="title text-small">Head of Design @ Venmo</span>
    </div>
  </section>

  <section id="projects">
    <p>From leading groundbreaking AI initiatives to designing enterprise systems that redefine workflows, my work consistently focuses on delivering value through thoughtful innovation. Whether you’re looking to transform your business with cutting-edge technology or explore new creative possibilities, I’m here to help you navigate the intersection of people, design, and technology.</p>
    <ul>
      <li>
        <div class="image">
          <img src="/portfolio/rocket-vision/sizzle.png">
        </div>
        <div class="desc">
          <span class="title text-large">Revolutionizing the Home Buying Journey</span>
          <span class="company">Rocket Companies</span>
          <span class="text text-small">Buying a home is complex, difficult to understand, and involves a lot of people. I established Rocket Mortgage's vision to revolutionize the entire home buying journey &mdash; from getting rates, to closing, and beyond. Powered with AI, it decomplexifies the process and sets every homebuyer up for success.</span>
        </div>
      </li>

      <li>
        <div class="image">
          <img src="/portfolio/amazon-personalization/sizzle.png">
        </div>
        <div class="desc">
          <span class="title text-large">Personalizing Alexa</span>
          <span class="company">Amazon</span>
          <span class="text text-small">Everyone expects a voice assistant to be personal and I literally wrote the book on how to achieve that at scale &mdash; from technical components, guidelines, patterns, and best practices. Since 2019, every personalized Alexa experience has been influenced by my work.</span>
          <a class="text-small" href="/portfolio/amazon-personalization/">Read the case study</a>
        </div>
      </li>

      <li>
        <div class="image">
          <img src="/portfolio/amazon-alexa-cortana/sizzle.png">
        </div>
        <div class="desc">
          <span class="title text-large">Pioneering AI Interoperability</span>
          <span class="company">Amazon</span>
          <span class="text text-small">Getting Alexa with Cortana to work together was no small feat. The bigger feat was shaping Amazon's vision on how to seamlessly connect all the voice assistants.</span>
          <a class="text-small" href="/portfolio/amazon-alexa-cortana">Read the case study</a>
        </div>
      </li>
    </ul>
  </section>

  <section class="quotes">
    <div class="quote">
      <span class="verbatim">Jason is an incredible talent. Any company would be lucky to have him.</span>
      <span class="name text-small">Jenn S.</span>
      <span class="title text-small">Chief Experience Officer @ Rocket Companies</span>
    </div>
  </section>

  <section id="case-studies">
    <ul>
      <li v-for="p in getProjects(['amazon-profile', 'rocket-ironbear', 'disney-vr'])">
        <div class="image" :class="p.frontmatter.type + '-image'">
          <img :src="p.frontmatter.hero.image">
        </div>
        <div class="desc">
          <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
          <span class="company">{{ getCompany(p.frontmatter.keys.company) }}</span>
          <span class="text text-small">{{ p.frontmatter.preview.sizzle }}</span>
          <a class="text-small" :href="p.url">Read the case study</a>
        </div>
      </li>
    </ul>
  </section>

  <!-- <section class="hello half-margin">
    <div>
      <p class="text-large">I'm available for new work.</p>
      <p class="text-small">There's no telling what we could accomplish together.</p>
    </div>
    <div class="email-me">
      <a href="mailto:hello@jasonbejot.com">Email Me</a>
    </div>
  </section> -->

  <EmailMe class="half-margin">
    <template v-slot:bottom>There's no telling what we could accomplish together.</template>
  </EmailMe>

  <section id="metrics">
    <span class="number">3</span>
    <span class="label text-small">patents</span>
    <span class="number">15</span>
    <span class="label text-small">awards</span>
    <span class="number">39</span>
    <span class="label text-small">articles</span>
    <span class="number">100+</span>
    <span class="label text-small">products</span>
  </section>

  <section id="offerings">
    <ul>
      <li>
        <p class="text-large">Evolve Your Design Practice</p>
        <p class="text-small">Great products don't get remembered for the elegance of their tech stack or the efficiency of their agile ceremonies, they get remembered for how they make people feel. <strong>I can help you build a world-class design practice</strong>.</p>
      </li>
      <li>
        <p class="text-large">Visioneering</p>
        <p class="text-small">A vision is more than just few words in a deck, it's a story of the future you want to make real. It determines what you work backwards from, guiding every decision. Whether it's a product, line of business, or for your company <strong>I can help define your vision</strong>.</p>
      </li>
      <li>
        <p class="text-large">Going 0-to-1</p>
        <p class="text-small">Getting off the ground is sometimes the hardest step. Having launched 100's of products and led multiple R&amp;D initiatives, <strong>I can help you quickly launch, learn, and iterate</strong> your next project.</p>
      </li>
      <li>
        <p class="text-large">Conversational AI</p>
        <p class="text-small">LLM's are like a lump of clay, they need to be molded into shape so they can offer durable, measurable value. As a recognized conversational AI expert <strong>I can help create innovative conversational experiences</strong>.</p>
      </li>
      <li>
        <p class="text-large">Holistic Experiences</p>
        <p class="text-small">The companies that get repeat business are the ones that design the experience even when someone isn't actively using their app or site. <strong>I can help craft industry-defining holistic user experiences</strong>.</p>
      </li>
      <li>
        <p class="text-large">Emerging Technologies</p>
        <p class="text-small">New tech is really exciting but few companies know how to effectively experiment with it or derive value. With my proven track record of doing just that, <strong>I can help apply emerging tech to your business</strong>.</p>
      </li>
      <li>
        <p class="text-large">Clarity From Ambiguity</p>
        <p class="text-small">Big problems are hard. Ambiguity is uncomfortable. Are you stuck in endless churn? Maybe you're spending more effort debating than you are shipping. <strong>I can help your business find clarity from ambiguity</strong>.</p>
      </li>
      <li>
        <p class="text-large">And much more</p>
      </li>
    </ul>
  </section>

  <EmailMe class="half-margin">
    <template v-slot:bottom>The future is just waiting to be discovered.</template>
  </EmailMe>

  <!-- <section id="awards">
    <h2>Recognition</h2>
    <p>I've received <a href="/awards/">{{ awards.total }} awards</a> for my work. Here's a few random ones:</p>
    <AwardList :data="awards.data"></AwardList>
    <p><a class="more-link" href="/awards/" alt="See all my awards">See all my awards</a></p>
  </section> -->

  <!-- <section id="about"> -->
    <!-- <h2>Bio</h2> -->
    <!--<p>I'm an experience design and product leader with a background in computer science, innovation, and entreprenuership with 19 years of professional leadership experience envisioning the future, crafting strategies, and delivering experiences.</p>-->
    <!-- <p>I'm an executive-level tech innovator with 19 years of professional experience, having worked at Disney, Amazon, and Rocket Companies, and more.</p> -->
    
    <!-- <p>Growing up on a large family farm, I filled my days with immersive storytelling playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work, which led me to gravitate toward HCI.</p> -->

    <!-- <p>After spending a few years as an engineering lead I made the switch to experience design. I found a real talent for invention and innovation combining my technical background with the focus on the human experience. As a result I've been elected to innovation councils, received patents and awards, launched innovation programs, and worked directly with C-suite executives at Fortune 500 companies on strategic projects.</p> -->

    <!-- <img src="/assets/photos/guitar.jpg"> -->

    <!-- <p>At some point I became a musician, playing spacey guitar riffs in The Answer Team. We were based out of Omaha, Nebraska and, when we were active, we toured and recorded two albums. You can check out The Answer Team's music on <a href="https://open.spotify.com/artist/3mMaoKi4PaOLhYFdAknELD?si=mci-mk0ASMiM1bro9ey0NA" target="_blank">Spotify</a>.</p> -->

    <!-- <p>I currently live in Atlanta with my partner, <a href="https://www.ktmcbratney.com/" target="_blank">Kt McBratney</a>, and kiddo.</p> -->
  <!-- </section> -->

  <!-- <section id="skills">
    <h2>Skills</h2>
    <p>Leadership, Innovation, Vision Crafting, Strategy, Direction, Storytelling, Research &amp; Development, Design Thinking, 0-to-1 Delivery, UX Design, Product Design, Conversational Design, Voice Design, Rapid Prototyping</p>
  </section> -->

  <!-- <section id="press">
    <h2>Press</h2>
    <p>I know of at least <a href="/press/">{{ news.total }} articles</a> that cover my work. Here's a random sample:</p>
    <NewsList :data="news.data"></NewsList>
    <p><a class="more-link" href="/press/" alt="See all the articles">See all the articles</a></p>
  </section> -->

  <!-- <section id="mentorship">
    <h2>Mentorship</h2>
    <section style="height: 598px; box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px; border-radius: 12px; overflow: hidden; width: 100%;"><iframe src="https://adplist.org/widgets/booking?src=jason-bejot" title="Mentorship Session" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>
    <section style="padding: 16px; height: 496px; box-shadow: rgba(142, 151, 158, 0.15) 0px 4px 19px 0px; border-radius: 12px; overflow: hidden; width: 100%;"><iframe src="https://adplist.org/widgets/reviews?src=jason-bejot" title="All Reviews" width="100%" height="100%" loading="lazy" style="border: 0px;"></iframe></section>
  </section> -->

  <!-- <section id="contact">
    <div class="columns">
      <div class="left">
        <h2>Contact<br />Me</h2>
      </div>
      <div class="right content">
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
  </section> -->
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  // import Email from '@components/Email';

  import EmailMe from '@components/EmailMe.vue';

  import { data as awardsData } from '@awards/awards.data';
  import { data as newsData } from '@press/press.data';
  import { data as projectData } from '@portfolio/portfolio.data';
  import { data as companies } from '@globals/companies.data'

  import _ from 'lodash';

  export default {
    name: 'Index',

    components: {
      EmailMe
    },

    data () {
      return {
        awards: {
          total: awardsData.length,
          data: _.sampleSize(_.orderBy(awardsData, o => { return o.date.year; }, ['desc']), 3)
        },
        news: {
          total: newsData.length,
          data: _.sampleSize(newsData, 6)
        }
      }
    },

    methods: {
      getCompany(key) {
        return companies[key].name.long;
      },
      
      getProjects(filter) {
        // TODO: do something if there is no filter, or it's empty

        let rval = _.filter(projectData, (project) => {
          let end = project.url.match(/^\/.*\/(.*)\/$/i)[1]
          return end ? _.includes(filter, end) : false
        })

        // remove 'projects' from the url
        rval = _.forEach(rval, (val) => {
          let match = val.url.match(/^(.*)\/projects\/(.*)$/i)
          if(match) val.url = _.join(_.slice(match, 1), '/')
        });
        
        return rval;
      }
    }
  }
</script>

<style scoped lang="scss">

  /* ***************** */
  /* *** offerings *** */
  /* ***************** */

  #offerings ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media all and (max-width: 680px) {
      #offerings ul {
        grid-template-columns: 1fr;
      }
    }

  #offerings li {
    display: block;
    margin: 0;
    background-color: #f4f4f4;
    padding: 1rem;
    border-radius: 0.32rem;
    box-shadow:
      inset 1px 1px 1px 0 rgb(255, 255, 255),
      inset -1px -1px 1px 0 rgba(0, 0, 0, .15),
      .444584px .444584px .628737px -1px rgba(0, 0, 0, .26),
      1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247),
      2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23),
      5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192),
      10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056),
      -.5px -.5px 0 0 rgb(0 0 0 / 5%);
  }

  #offerings li:last-child {
    background-color: #aaa;
    color: var(--color-text-light);
    box-shadow: 
      inset 1px 1px 1px #ffffffc2,
      inset -1px -1px 1px #0000003b,
      .444584px .444584px .628737px -1px #00000042,
      1.21072px 1.21072px 1.71222px -1.5px #0000003f,
      2.6583px 2.6583px 3.75941px -2.25px #0000003b,
      5.90083px 5.90083px 8.34503px -3px #00000031,
      10px 10px 21.2132px -3.75px #0000000e,
      -.5px -.5px #00000012;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: center;
  }

  #offerings strong {
    font-weight: 500;
  }

  /* ************************* */
  /* *** projects sections *** */
  /* ************************* */

  #case-studies, #projects {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 7rem;

    ul {
      list-style: none;
      margin: 0 ;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 7rem;

      li {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;

        .image, .desc {
          grid-row: 1;
        }

        .desc {
          display: flex;
          flex-flow: column nowrap;
          row-gap: 0.5rem;
        }

        &:nth-of-type(odd) {
          text-align: left;

          .desc {
            grid-column: 2 / span 2;
            justify-self: left;
            align-self: center;
          }
        }

        &:nth-of-type(even) {
          text-align: right;

          .desc {
            grid-column: 1 / span 2;
            justify-self: right;
            align-self: center;
          }

          .image {
            grid-column: 3;
          }
        }

        /* max-width: small screen */
        @media all and (max-width: 680px) {
          & {
            display: flex;
            flex-flow: column nowrap;
            row-gap: 1rem;
            column-gap: 0;
          }

          .desc {
              text-align: left;
          }
        }

        img { width: 100%; }
      }
    }
  }

  /* ********************** */
  /* *** quote sections *** */
  /* ********************** */

  .quotes {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 7rem;
    align-items: center;

    .quote {
      display: flex;
      flex-flow: column nowrap;
      text-align: center;
      width: 35rem;
      max-width: 100%;
    }

    .verbatim {
      font-size: 1.9rem;
      font-weight: 300;
      margin-bottom: 1.4rem;
      line-height: 2.6rem;

      &::before, &::after {
        content: '"';
        font-size: 2rem;
      }
    }

    .name { margin-bottom: 0.5rem; }
  }

  /* *********************** */
  /* *** metrics section *** */
  /* *********************** */

  #metrics {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    text-align: center;
    row-gap: 1rem;
    column-gap: 1rem;

    .number { font-size: 5rem; }

    span:nth-of-type(even) { grid-row-start: 2; }

    @media all and (max-width: 680px) {
      & {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        align-items: center;
      }

      span:nth-of-type(odd) { text-align: right; }

      span:nth-of-type(even) {
        grid-row-start: auto;
        text-align: left;
      }
    }
  }

  /* ***************** */
  /* *** logo wall *** */
  /* ***************** */

  #experience {
    ul {
      list-style: none;
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      gap: 1.5rem 3rem;
      justify-content: space-evenly;
      align-items: center;
    }

    li {
      display: flex;
      justify-content: center;
    }

    img {
      max-height: 1.6rem;
      width: auto;
    }
  }

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

  /* main > section { */
  section {
    margin: 0;
    // & + section { margin-top: 7rem; }
    & + section { margin-top: 14rem; }
    &.half-margin { margin-top: 7rem; }
  }

  p + ul { margin-top: 1.3rem; }


  // TODO: can i delete this? contact section was using it
  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    .left { grid-column: left; }
    .right { grid-column: right; }
  }



  /* ************** */
  /* *** #about *** */
  /* ************** */

  #about {
    img {
      width: 35%;
      float: right;
      border-radius: 10px;
      margin-left: 1rem;

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) {
        float: none;
        width: 100%;
        margin-top: 1rem;
        margin-left: 0;
      }
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

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) {
      margin-bottom: 0;
    }

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
        margin-bottom: 2rem;
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
        /* right: 0;
        width: 10rem;
        top: auto;
        bottom: -2rem; */
        position: relative;
        display: block;
        margin: auto;
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
