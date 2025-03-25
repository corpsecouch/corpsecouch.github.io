<template>


  <p>Having so many years of experience and a background across industries and careers, I've been involved with too many projects to list. Here I've provided a curated list of work that's either highly impactful, important, or I'm simply proud of. I hope you enjoy reading about them as much as I did bringing them to life.</p>
  <!-- <p>Reach out to me at <Email></Email> if you'd like to discuss some of my work or how we might work together.</p> -->

  <EmailMe>
    <template v-slot:bottom>Whatever.</template>
  </EmailMe>

  <!-- Rocket -->

  <div class="company" id="rocket">

    <h3>Rocket Companies</h3>
    <p>As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.</p>

    <Callouts
      :pressTotal="portfolioData.rocket.news.total"
      pressURL="/press/#rocket"
      :awardsTotal="portfolioData.rocket.awards.length"
      awardsURL="/awards/#rocket" />

    <ul class="projects">
      <li class="project" v-for="(p, index) in portfolioData.rocket.projects" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false">
        <div :class="p.frontmatter.hero.type + '-image'">
          <img :src="p.frontmatter.hero.image" class="rounded">
        </div>

        <div class="content">
          <div class="top">
            <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
            <span class="year text-small">{{ p.frontmatter.year }}</span>
            <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
          </div>
          <div class="bottom">
            <ul class="tags" v-if="p.frontmatter.tags">
              <li class="tag text-small" v-for="tag in p.frontmatter.tags">{{ tag }}</li>
            </ul>
          </div>
          <!-- <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a> -->
        </div>
      </li>
    </ul>
    
  </div>

  <!-- Amazon -->

  <div class="company" id="amazon">

    <h3>Amazon</h3>
    <p>At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.</p>
    
    <Callouts
      :pressTotal="portfolioData.amazon.news.total"
      pressURL="/press/#amazon"
      :awardsTotal="portfolioData.amazon.awards.length"
      awardsURL="/awards/#amazon" />

    <ul class="projects">
      <li class="project" v-for="(p, index) in portfolioData.amazon.projects" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false">
        <div :class="p.frontmatter.hero.type + '-image'">
          <img :src="p.frontmatter.hero.image" class="rounded">
        </div>
        <div class="content">
          <div class="top">
            <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
            <span class="year text-small">{{ p.frontmatter.year }}</span>
            <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
          </div>
          <div class="bottom">
            <ul class="tags" v-if="p.frontmatter.tags">
              <li class="tag text-small" v-for="tag in p.frontmatter.tags">{{ tag }}</li>
            </ul>
          </div>
          <!-- <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a> -->
        </div>
      </li>
    </ul>

  </div>

  <!-- Disney -->

  <div class="company" id="disney">

    <h3>Walt Disney Studios</h3>
    <p>At Disney, I was leading the UX design of the Studio's digital transformation of it's enterprise tools and processes. I also went deep into emerging technologies and R&D, especially design-driven innovation.</p>
    
    <Callouts
      :pressTotal="portfolioData.disney.news.total"
      pressURL="/press/#disney"
      :awardsTotal="portfolioData.disney.awards.length"
      awardsURL="/awards/#disney" />

    <ul class="projects">
      <li class="project" v-for="(p, index) in portfolioData.disney.projects" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false">
        <div :class="p.frontmatter.hero.type + '-image'">
          <img :src="p.frontmatter.hero.image" class="rounded">
        </div>
        <div class="content">
          <div class="top">
            <span class="title text-large">{{ p.frontmatter.preview.title }}</span>

            <span class="year text-small">{{ p.frontmatter.year }}</span>

            <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
          </div>
          <div class="bottom">
            <ul class="tags" v-if="p.frontmatter.tags">
              <li class="tag text-small" v-for="tag in p.frontmatter.tags">{{ tag }}</li>
            </ul>
          </div>

          <!-- <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a> -->
        </div>
      </li>
    </ul>

  </div>

  <!-- Phenomblue -->

  <div class="company" id="phenomblue">

    <h3>Phenomblue</h3>
    <p>Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.</p>
    
    <Callouts
      :pressTotal="portfolioData.phenomblue.news.total"
      pressURL="/press/#phenomblue"
      :awardsTotal="portfolioData.phenomblue.awards.length"
      awardsURL="/awards/#phenomblue" />

    <ul class="projects">
      <li class="project" v-for="(p,index) in portfolioData.phenomblue.projects" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false">
        <div :class="p.frontmatter.hero.type + '-image'">
          <img :src="p.frontmatter.hero.image" class="rounded">
        </div>
        <div class="content">
          <div class="top">
            <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
            <span class="year text-small">{{ p.frontmatter.year }}</span>
            <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
          </div>
          <div class="bottom">
            <ul class="tags" v-if="p.frontmatter.tags">
              <li class="tag text-small" v-for="tag in p.frontmatter.tags">{{ tag }}</li>
            </ul>
          </div>
        </div>
      </li>
    </ul>

  </div>

</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import { data as projectData } from '@portfolio/portfolio.data';
  import { data as newsData } from '@press/press.data';
  import { data as companies } from '@globals/companies.data';
  import { data as awardsData } from '@awards/awards.data';
  import Callouts from '@components/Callouts.vue';
  // import Email from '@components/Email';
  import EmailMe from '@components/EmailMe';

  import _ from 'lodash';

  export default {
    name: 'Portfolio',

    components: {
      Callouts,
      // Email,
      EmailMe
    },

    methods: {
      // https://stackoverflow.com/questions/61435070/scroll-down-when-clicked-with-vue-js
      /*goto(ref) {
        let el = this.$refs[ref];
        
        el.parentElement.scrollTo(
          el.offsetLeft - el.parentElement.offsetLeft,
          el.offsetTop
          );
      }*/

      gotoProject(url) {
        window.location.href = url
      }
    },

    data () {

      // remove all hidden projects and sort the rest
      let projects = _.orderBy(
        _.filter(projectData, o => { return o.frontmatter.preview; }),
        [ 'frontmatter.featured', 'frontmatter.year' ],
        [ 'asc', 'desc' ]);

      // fix the urls due to the route rewrites
      projects = _.map(projects, (project) => {
        project.url = `${project.url}`.replace(/projects\//, '')
        return project
      })

      let portfolioData = {};
      _.each(companies, (value, key) => {
        portfolioData[value.slug] = {

          projects: _.filter(projects, o => { return o.frontmatter.keys.company == value.slug; }),

          awards: _.orderBy(
            _.filter(awardsData, o => { return o.company.slug == value.slug }),
            o => { return o.date.year; },
            ['desc']),

          news: {
            total: _.filter(newsData, o => { return o.company.slug == value.slug }).length,
            data: _.take(_.filter(newsData, o => { return o.company.slug == value.slug }), 3)
          }
        }
      });

      return {
        portfolioData: portfolioData,
        newsData: newsData
      }
    }

  }
</script>

<style scoped lang="scss">

/* https://css-irl.info/css-halftone-patterns/ */
/* https://leanrada.com/notes/pure-css-halftone/ */

  #callouts {
    margin-top: 1.3rem;
  }

  h2 {
    font-family: 'Mainstay';
    letter-spacing: normal;
    font-size: 5rem;
    font-weight: normal;
    line-height: 4.5rem;
    text-transform: none;
  }

  #rocket {
    h3 {
      background-image: url('/assets/logos/rocket.png');
      /* height: 64px; */
    }
    .projects > p {
      display: inline-block;
      padding: 8px 16px;
      background-color: lightgray;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 8px;
    }
  }

  #amazon {
    h3 {
      background-image: url('/assets/logos/amazon.png');
      /* height: 64px; */
    }
  }

  #disney {
    h3 {
      background-image: url('/assets/logos/disney.png');
      /* height: 64px; */
    }
  }

  #phenomblue {
    h3 {
      background-image: url('/assets/logos/phenomblue.png');
      /* height: 64px; */
    }
  }

  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 3.5rem 1.5rem;

    /* @include screen-large { } */
    /* @include screen-regular { } */
    /* @include screen-small { grid-template-columns: auto; } */

    .left { grid-column: left; }
    .right { grid-column: right; }
  }

  /* max-width: small screen */
  @media all and (max-width: 680px) {
    .columns {
      grid-template-columns: [left right] auto;
    }
  }

  #menu {
    flex-flow: row wrap;
    column-gap: 4rem;
    row-gap: 2rem;

    margin-top: 3rem;
    display: flex;
    justify-content: center;

    a { margin: 0; }

    .rocket, .disney, .phenomblue, .amazon { img { height: 42px; } }
  }

  .company {
    padding-top: 2rem;
    margin-top: 7rem;

    &:first-child {
      padding-top: 0;
      margin-top: 0;
    }

    > h3 {
      background-repeat: no-repeat;
      background-position-x: center;
      text-indent: 100%;
      overflow: hidden;
      white-space: nowrap;
      background-size: contain;
      /* height: 84px; */
      height: 64px;
    }
  }

  .awards { margin-top: 4rem; }
  .news { margin-top: 6rem; }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .o { letter-spacing: -0.55rem; }

  .projects {
    margin: 0;
    list-style: none;

    .project {
      --project-padding: 1.5rem;

      overflow: hidden;
      // background-color: #f4f4f4;
      background-color: whitesmoke;
      // background-color: var(--color-background-light);
      background-image: linear-gradient(0deg, var(--color-background-light) 5%, transparent 120%);
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

      display: grid;
      grid-auto-rows: 1fr;
      grid-template-columns: 1fr 2fr;
      grid-column-gap: var(--project-padding);

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) { display: block; }

      /* max-width: xsmall screen */
      // @media all and (max-width: 600px) { padding: 1.5rem; }
    }

    .project + .project { margin-top: 1rem; }

    .project:first-child {
      display: block;
      padding: calc(var(--project-padding) * 2);
      background-image: linear-gradient(0deg, var(--color-background-light) 5%, transparent 120%);

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) { padding: 1.5rem; }
      
      .product-image img {
        // padding: calc(var(--project-padding) * 2);

        /* max-width: xsmall screen */
        @media all and (max-width: 600px) { padding: 0; }
      }

      // .title { margin-top: 1rem; }

      .content {
        padding: var(--project-padding) 0 0 0;
        row-gap: var(--project-padding);
      }
    }

    .project:first-child:hover {
      background-image: linear-gradient(0deg, #fdfdfdde 5%, transparent 120%);
    }

    .project:hover {
      cursor: pointer;
      // background-color: #e7e7e7;
      // transition: background-color 0.3s;
      // background-image: linear-gradient(0deg, #e7e7e7 -20%, transparent 100%);
      background-image: linear-gradient(0deg, #e7e7e766 5%, transparent 120%);
    }

    .project img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }

    .project .product-image {
      padding: var(--project-padding);
    }

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) {
      .project img {
        padding: 0;
      }
    }

    .project .content {
      padding: var(--project-padding);
      padding-left: 0;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.5rem;
      justify-content: space-between;
    }

    .project .content .top {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 0.5rem;
    }

    .project .content .year {
      display: none;
    }

    .project .content .tags {
      list-style: none;
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      gap: 0.2rem 0.5rem;
    }

    .project .content .tags .tag {
      background-color: #e7e7e7;
      box-shadow:
        inset -1px -1px 1px 0 rgb(255, 255, 255),
        inset 1px 1px 1px 0 rgba(0, 0, 0, .15);
      color: var(--color-text-dark);
      padding: 0 0.7rem;
      border-radius: 1rem;
      font-size: 0.8rem;
    }
  }

</style>
