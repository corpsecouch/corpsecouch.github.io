<template>

  <div class="pageContent">
    <p>Having so many years of experience and a background across industries and careers, I've been involved with too many projects to list. Here I've provided a curated list of work that's either highly impactful, important, or I'm simply proud of. I hope you enjoy reading about them as much as I did bringing them to life.</p>
    <!-- <p>Reach out to me at <Email></Email> if you'd like to discuss some of my work or how we might work together.</p> -->

    <EmailMe>
      <template v-slot:bottom>Let's make something amazing together.</template>
    </EmailMe>

    <div class="allProjects">

      <div class="featured">
        <h3>Featured Case Studies</h3>
        <ul>
          <li class="caseStudy boxed" v-for="p in featured" @click="gotoProject(p.url)" :style="'hero' in p.frontmatter ? {'background-color': p.frontmatter.hero.color} : false">
            <div :class="p.frontmatter.hero.type + '-image'" class="image">
                <img :src="p.frontmatter.hero.image" class="rounded">
              </div>

              <div class="preview">
                <div class="top">
                  <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
                  <span class="year text-small">{{ p.frontmatter.company }} &mdash; {{ p.frontmatter.year }}</span>
                  <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
                  <a :href="p.url" class="text-small">Read the case study</a>
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

      <!-- Rocket -->
      <div class="company">
        <h3>Rocket Companies</h3>
        <!-- <p>As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.</p> -->

        <!-- <Callouts
          :pressTotal="portfolioData.rocket.news.total"
          pressURL="/press/#rocket"
          :awardsTotal="portfolioData.rocket.awards.length"
          awardsURL="/awards/#rocket" /> -->

        <div v-if="'caseStudy' in portfolioData.rocket" class="caseStudies">
          <ul>
            <!-- <li class="caseStudy" v-for="(p, index) in portfolioData.rocket.caseStudy" @click="gotoProject(p.url)" :style="index == 0 && 'hero' in p.frontmatter ? {'background-color': p.frontmatter.hero.color} : false"> -->
              <li class="caseStudy" v-for="p in portfolioData.rocket.caseStudy" @click="gotoProject(p.url)">
              <div :class="p.frontmatter.hero.type + '-image'" class="image">
                <img :src="p.frontmatter.hero.image" class="rounded">
              </div>

              <div class="preview">
                <div class="top">
                  <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
                  <span class="year text-small">{{ p.frontmatter.year }}</span>
                  <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
                  <a :href="p.url" class="text-small">Read the case study</a>
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

        <div v-if="'project' in portfolioData.rocket"  class="projects">
          <span class="text-small">The following projects don't yet have an available case study.</span>
          <span class="text-small"><a href="#contact">Contact Me</a> if you'd like to learn more.</span>
          <ul>
            <li class="project boxed" v-for="(p, index) in portfolioData.rocket.project">
              <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
              <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
            </li>
          </ul>
        </div>
        
      </div>

      <!-- Amazon -->
      <div class="company">
        <h3>Amazon</h3>
        <!-- <p>At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.</p> -->
        
        <!-- <Callouts
          :pressTotal="portfolioData.amazon.news.total"
          pressURL="/press/#amazon"
          :awardsTotal="portfolioData.amazon.awards.length"
          awardsURL="/awards/#amazon" /> -->

        <div v-if="'caseStudy' in portfolioData.amazon" class="caseStudies">
          <ul>
            <!-- <li class="caseStudy" v-for="(p, index) in portfolioData.amazon.caseStudy" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false"> -->
            <li class="caseStudy" v-for="p in portfolioData.amazon.caseStudy" @click="gotoProject(p.url)">
              <div :class="p.frontmatter.hero.type + '-image'" class="image">
                <img :src="p.frontmatter.hero.image" class="rounded">
              </div>
              <div class="preview">
                <div class="top">
                  <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
                  <span class="year text-small">{{ p.frontmatter.year }}</span>
                  <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
                  <a :href="p.url" class="text-small">Read the case study</a>
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

        <div v-if="'project' in portfolioData.amazon" class="projects">
          <span class="text-small">The following projects don't yet have an available case study.</span>
          <span class="text-small"><a href="#contact">Contact Me</a> if you'd like to learn more.</span>
          <ul>
            <li class="project boxed" v-for="(p, index) in portfolioData.amazon.project">
              <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
              <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Disney -->
      <div class="company">
        <h3>Walt Disney Studios</h3>
        <!-- <p>At Disney, I was leading the UX design of the Studio's digital transformation of it's enterprise tools and processes. I also went deep into emerging technologies and R&D, especially design-driven innovation.</p> -->
        
        <!-- <Callouts
          :pressTotal="portfolioData.disney.news.total"
          pressURL="/press/#disney"
          :awardsTotal="portfolioData.disney.awards.length"
          awardsURL="/awards/#disney" /> -->

        <div v-if="'caseStudy' in portfolioData.disney" class="caseStudies">
          <ul>
            <!-- <li class="caseStudy" v-for="(p, index) in portfolioData.disney.caseStudy" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false"> -->
            <li class="caseStudy" v-for="p in portfolioData.disney.caseStudy" @click="gotoProject(p.url)">
              <div :class="p.frontmatter.hero.type + '-image'" class="image">
                <img :src="p.frontmatter.hero.image" class="rounded">
              </div>
              <div class="preview">
                <div class="top">
                  <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
                  <span class="year text-small">{{ p.frontmatter.year }}</span>
                  <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
                  <a :href="p.url" class="text-small">Read the case study</a>
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

        <div v-if="'project' in portfolioData.disney" class="projects">
          <span class="text-small">The following projects don't yet have an available case study.</span>
          <span class="text-small"><a href="#contact">Contact Me</a> if you'd like to learn more.</span>
          <ul>
            <li class="project boxed" v-for="(p, index) in portfolioData.disney.project">
              <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
              <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Phenomblue -->
      <div class="company">
        <h3>Phenomblue</h3>
        <!-- <p>Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.</p> -->
        
        <!-- <Callouts
          :pressTotal="portfolioData.phenomblue.news.total"
          pressURL="/press/#phenomblue"
          :awardsTotal="portfolioData.phenomblue.awards.length"
          awardsURL="/awards/#phenomblue" /> -->

        <div v-if="'caseStudy' in portfolioData.phenomblue" class="caseStudies">
          <ul>
            <!-- <li class="caseStudy" v-for="(p,index) in portfolioData.phenomblue.caseStudy" @click="gotoProject(p.url)" :style="index == 0 ? {'background-color': p.frontmatter.hero.color} : false"> -->
            <li class="caseStudy" v-for="(p,index) in portfolioData.phenomblue.caseStudy" @click="gotoProject(p.url)">
              <div :class="p.frontmatter.hero.type + '-image'" class="image">
                <img :src="p.frontmatter.hero.image" class="rounded">
              </div>
              <div class="preview">
                <div class="top">
                  <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
                  <span class="year text-small">{{ p.frontmatter.year }}</span>
                  <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
                  <a :href="p.url" class="text-small">Read the case study</a>
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

        <div v-if="'project' in portfolioData.phenomblue" class="projects">
          <span class="text-small">The following projects don't yet have an available case study.</span>
          <span class="text-small"><a href="#contact">Contact Me</a> if you'd like to learn more.</span>
          <ul>
            <li class="project boxed" v-for="(p, index) in portfolioData.phenomblue.project">
              <span class="title text-large">{{ p.frontmatter.preview.title }}</span>
              <span class="description text-small">{{ p.frontmatter.preview.description }}</span>
            </li>
          </ul>
        </div>

      </div>

    </div>

    <EmailMe>
      <template v-slot:bottom>We could be working together right now.</template>
    </EmailMe>

  </div>

</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import { data as projectData } from '@portfolio/portfolio.data';
  import Callouts from '@components/Callouts.vue';
  // import Email from '@components/Email';
  import EmailMe from '@components/EmailMe';

  import _ from 'lodash'

  export default {
    name: 'Portfolio',

    components: {
      Callouts,
      // Email,
      EmailMe
    },

    methods: {
      gotoProject(url) {
        window.location.href = url
      }
    },

    data () {

      // flatten the projects array
      let projects = []
      _.each(projectData, company => {
        projects.push(_.flatten(_.values(company)))
      })
      projects = _.flatten(projects);

      // filter and sort the featured projects
      let featured = _.orderBy(
        _.filter(projects, ['frontmatter.featured', true]),
        ['frontmatter.year'],
        ['desc'])

      return {
        featured: featured,
        portfolioData: projectData
      }
    }

  }
</script>

<style scoped lang="scss">

/* https://css-irl.info/css-halftone-patterns/ */
/* https://leanrada.com/notes/pure-css-halftone/ */

  .pageContent {
    display: flex;
    flex-flow: column;
    row-gap: 7rem;
  }

  h3 {
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    margin: 0;
    padding: 0 0 1.5rem 0;
  }

  h3::after{
    content:'';
    display: block;
    border-bottom: dashed 1px var(--color-text-dark);
    // height: 50%;
    margin: auto 0;
  }

  .allProjects {
    --project-padding: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 7rem;
  }

  .company {
    display: flex;
    flex-flow: column nowrap;
    row-gap: var(--project-padding);
  }

  .rounded {
    border-radius: 0.32rem;
  }

  .boxed {
    overflow: hidden;
    background-color: whitesmoke;
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
  }
  
  /* ******************** */
  /* *** project list *** */
  /* ******************** */

  .projects {
    display: flex;
    flex-flow: column nowrap;
    row-gap: var(--project-padding);
    padding-top: calc(var(--project-padding) * 2);
  }

  .projects ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--project-padding);
  }

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    .projects ul {
      display: flex;
      flex-flow: column nowrap;
    }
  }

  /* ********************** */
  /* *** sinlge project *** */
  /* ********************** */

  .projects .project {
    grid-column-end: span 2;
    display: flex;
    flex-flow: column nowrap;
    row-gap: var(--project-padding);
    padding: var(--project-padding);
  }

  /* *********************** */
  /* *** case study list *** */
  /* *********************** */

  .caseStudies {
    display: flex;
    flex-flow: column nowrap;
    row-gap: var(--project-padding);
  }

  .caseStudies ul {
    margin: 0;
    list-style: none;
    display: flex;
    flex-flow: column nowrap;
    // row-gap: var(--project-padding);
    row-gap: calc(var(--project-padding) * 2);
  }

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    .caseStudies ul {
      row-gap: calc(var(--project-padding) * 3);
    }
  }

  /* ******************************** */
  /* *** featured case study list *** */
  /* ******************************** */

  .featured ul {
    margin: 0;
    list-style: none;
    gap: var(--project-padding);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    .featured ul {
      grid-template-columns: 1fr;
    }
  }

  /* *************************** */
  /* *** a sinlge case study *** */
  /* *************************** */

  .caseStudy {
    display: grid;
    // grid-auto-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: var(--project-padding);

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) { display: block; }
  }

  /*.caseStudies .caseStudy:first-child,*/ .featured .caseStudy {
    display: block;
    padding: calc(var(--project-padding) * 2);
    background-image: linear-gradient(0deg, var(--color-background-light) 5%, transparent 120%);

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) { padding: 1.5rem; }
    
    .product-image img {
      /* max-width: xsmall screen */
      @media all and (max-width: 600px) { padding: 0; }
    }

    .preview {
      padding: var(--project-padding) 0 0 0;
      row-gap: var(--project-padding);
    }
  }

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    .featured .caseStudy {
      padding-top: calc(var(--project-padding) * 2);
    }
  }

  // .caseStudy:first-child:hover {
  //   background-image: linear-gradient(0deg, #fdfdfdde 5%, transparent 120%);
  // }

  .caseStudy:hover {
    cursor: pointer;
  }

  .featured .caseStudy:hover {
    // background-image: linear-gradient(0deg, #e7e7e766 5%, transparent 120%);
    background-image: linear-gradient(0deg, #fdfdfdde 5%, transparent 120%);
  }

  .caseStudy img {
    width: 100%;
    // height: 100%;
    object-position: center;
    object-fit: cover;
  }

  .caseStudy .product-image {
    // padding: var(--project-padding);
    margin: auto 0;
  }

  .caseStudy .title-image {
    width: 100%;
    // height: 100%;
    margin: auto 0;
  }

  .caseStudy .title-image img {
    // height: 100%;
  }

  .caseStudy .preview {
    padding: var(--project-padding);
    padding-left: 0;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 1rem;
    justify-content: space-between;
  }

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    .caseStudy img {
      padding: 0;
    }

    .caseStudy .preview {
      padding: var(--project-padding);
    }
  }

  .caseStudy .preview .top {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 0.5rem;
  }

  .caseStudies .year {
    display: none;
  }

  /* *********************** */
  /* *** case study tags *** */
  /* *********************** */

  .caseStudy .tags {
    list-style: none;
    margin: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 0.2rem 0.5rem;
  }

  .caseStudy .tags .tag {
    // background-color: #e7e7e7;
    background-color: rgba(231, 231, 231, .2);
    box-shadow:
      inset -1px -1px 1px 0 rgb(255, 255, 255),
      inset 1px 1px 1px 0 rgba(0, 0, 0, .15);
    color: var(--color-text-dark);
    padding: 0 0.7rem;
    border-radius: 1rem;
    font-size: 0.8rem;
  }

</style>
