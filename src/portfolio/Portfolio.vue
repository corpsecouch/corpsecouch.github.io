<template>
  <div class="widthConstrained">
    <Subpage>

      <template v-slot:title>P<span class="o">o</span>rtfolio</template>

      <!-- <section id="menu">
        <a href="#rocket" alt="Rocket" class="rocket"><img src="@assets/rocket.png"></a>
        <a href="#amazon" alt="Amazon" class="amazon"><img src="@assets/amazon.png"></a>
        <a href="#disney" alt="Disney" class="disney"><img src="@assets/disney.png"></a>
        <a href="#phenomblue" alt="Phenomblue" class="phenomblue"><img src="@assets/phenomblue.png"></a>
      </section> -->

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
          <li class="project" v-for="p in portfolioData.rocket.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
            <div :class="p.frontmatter.preview.type + '-image'">
              <img :src="p.frontmatter.preview.image" class="rounded">
            </div>

            <span class="title">{{ p.frontmatter.preview.title }}</span>

            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>

            <ul class="tags" v-if="p.frontmatter.preview.tags">
              <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>

            <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a>
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
          <li class="project" v-for="p in portfolioData.amazon.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
            <div :class="p.frontmatter.preview.type + '-image'">
              <img :src="p.frontmatter.preview.image" class="rounded">
            </div>

            <span class="title">{{ p.frontmatter.preview.title }}</span>

            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>

            <ul class="tags" v-if="p.frontmatter.preview.tags">
              <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>

            <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a>
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
          <li class="project" v-for="p in portfolioData.disney.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
            <div :class="p.frontmatter.preview.type + '-image'">
              <img :src="p.frontmatter.preview.image" class="rounded">
            </div>

            <span class="title">{{ p.frontmatter.preview.title }}</span>

            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>

            <ul class="tags" v-if="p.frontmatter.preview.tags">
              <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>

            <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Read the case study</a>
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
          <li class="project" v-for="p in portfolioData.phenomblue.projects" @click="gotoProject(p.url)" :style="{'background-color': p.frontmatter.preview.color}">
            <div :class="p.frontmatter.preview.type + '-image'">
              <img :src="p.frontmatter.preview.image" class="rounded">
            </div>

            <span class="title">{{ p.frontmatter.preview.title }}</span>

            <span class="description">{{ p.frontmatter.preview.year }} &mdash; {{ p.frontmatter.preview.description }}</span>

            <ul class="tags" v-if="p.frontmatter.preview.tags">
              <li class="tag" v-for="tag in p.frontmatter.preview.tags">{{ tag }}</li>
            </ul>

            <a :href="p.url" :title="p.frontmatter.preview.title" class="link">Check out this project</a>
          </li>
        </ul>

      </div>

    </Subpage>
  </div>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Subpage from '@components/Subpage';
  import { data as projectData } from '@portfolio/portfolio.data';
  import { data as newsData } from '@press/press.data';
  import { data as companies } from '@globals/companies.data';
  import { data as awardsData } from '@awards/awards.data';
  import Callouts from '@components/Callouts.vue';

  import _ from 'lodash';

  export default {
    name: 'Portfolio',

    components: {
      Subpage,
      Callouts
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
        [ 'frontmatter.preview.year' ],
        [ 'desc' ]);

      let portfolioData = {};
      _.each(companies, (value, key) => {
        portfolioData[value.slug] = {

          projects: _.filter(projects, o => { return o.frontmatter.preview.company == value.slug; }),

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

<style scoped lang="css">

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

    > h3 {
      background-repeat: no-repeat;
      background-position-x: center;
      text-indent: 100%;
      overflow: hidden;
      white-space: nowrap;
      background-size: contain;
      height: 84px;
    }
  }

  .awards { margin-top: 4rem; }
  .news { margin-top: 6rem; }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0;
    /* + p { padding: 1rem 0 4rem 0; } */
  }

  .o { letter-spacing: -0.55rem; }

  .projects {
    margin: 0;
    list-style: none;

    .project {
      padding: 3rem;
      background-color: whitesmoke;
      background-image: linear-gradient(0deg, var(--color-background-light) 5%, transparent 120%);

      &:hover { cursor: pointer; }

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) { padding: 1.5rem; }

      /* + .project { margin-top: 3.5rem; } */
      + .project { margin-top: 4rem; }

      .product-image, .title-image {
        img {
          width: 100%;
        }
      }

      .product-image img {
        padding: 3rem;
        /* background-image: linear-gradient(10deg, rgba(255, 255, 255, 1) 10%, transparent 50%, transparent); */
        /* background-image: linear-gradient(6deg, var(--color-background-light), transparent 120%); */

        /* max-width: xsmall screen */
        @media all and (max-width: 600px) { padding: 0; }
      }

      .title {
        display: block;
        /* font-size: 1.2rem; */
        font-size: 1.4rem;
        font-weight: 500;
        margin-top: 1rem;
        /* &:hover { cursor: pointer; } */
      }

      .year {
        display: block;
        font-style: italic;
        margin: 0;
        font-size: 0.7rem;
      }

      .description {
        margin-top: 1rem;
        display: block;
      }

      .tags {
        list-style: none;
        margin-left: 0;
        display: flex;
        flex-flow: row wrap;
        gap: 0.2rem 0.5rem;
        .tag {
          /* //background-color: #9ec4ce; */
          background-color: var(--color-background-dark);
          color: var(--color-text-light);
          padding: 0 0.7rem;
          border-radius: 1rem;
          font-size: 0.8rem;
        }
      }

      .link {
        margin-top: 1rem;
        display: inline-block;
      }
    }
  }

  /* .news, .awards {
    .more-link {
      margin-top: 2rem;
      display: block;
    }

    p { margin-bottom: 2rem; }

    strong { font-weight: 600; }
  } */

</style>
