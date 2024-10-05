<template>
  <Subpage>

    <template v-slot:title>P<span class="o">o</span>rtfolio</template>

    <section id="menu">
      <a href="#rocket" alt="Rocket" class="rocket"><img src="@assets/rocket.png"></a>
      <a href="#amazon" alt="Amazon" class="amazon"><img src="@assets/amazon.png"></a>
      <a href="#disney" alt="Disney" class="disney"><img src="@assets/disney.png"></a>
      <a href="#phenomblue" alt="Phenomblue" class="phenomblue"><img src="@assets/phenomblue.png"></a>
    </section>

    <!-- Rocket -->

    <div class="company" id="rocket">

      <h3>Rocket Companies</h3>
      <p>As the first Director of Conversational AI Design for Rocket Companies, I not only established the practice for the company I also cemented conversational AI as a company priority - a core part of it's business model and long term vision – ushering in it's investments into LLMs and generative AI.</p>

      <ul class="projects">
        <li class="project" v-for="p in portfolioData.rocket.projects">
          <div class="left" @click="gotoProject(p.route)">
            <!-- <img :src="require(`${p.image}`)" class="rounded"> -->
            <img :src="p.image" class="rounded">
          </div>
          <div class="right">
            <span class="title" @click="gotoProject(p.route)">{{ p.title }}</span>
            <span class="year">{{ p.year }}</span>
            <span class="description">{{ p.description }}</span>
            <ul class="tags">
              <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
            </ul>
            <!-- <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link> -->
             <a :href="p.url" :title="p.title" class="link">Read the case study</a>
          </div>
        </li>
      </ul>

      <div class="awards" v-if="portfolioData.rocket.awards.length">
        <p>I received {{ portfolioData.rocket.awards.length }} award{{ portfolioData.rocket.awards.length > 1 ? 's' : '' }} for my Rocket work:</p>
        <AwardList :data="portfolioData.rocket.awards"></AwardList>
      </div>

      <div class="news" v-if="portfolioData.rocket.news.total">
        <p>There are at least {{ portfolioData.rocket.news.total }} articles about my work at Rocket. These are the most recent:</p>
        <NewsList :data="portfolioData.rocket.news.data"></NewsList>
        <!-- <router-link class="more-link" :to="{ name: 'press', hash: '#rocket' }" alt="See all the articles">See all the articles</router-link> -->
         <a class="more-link" href="/press/#rocket" alt="See all the articles">See all the articles</a>
      </div>
      
    </div>

    <!-- Amazon -->

    <div class="company" id="amazon">

      <h3>Amazon</h3>
      <p>At Amazon, I was focused on all things Alexa identity, especially biometrics. I led the design of voice, modal, and device experiences for Alexa; starting with voice recognition then expanding to face recognition, authentication, authorization, profiles, and establishing the persoanlization guidelines. These are features used or available across every Echo device and has influenced every personalized experience.</p>
      
      <ul class="projects">
        <li class="project" v-for="p in portfolioData.amazon.projects">
          <div class="left" @click="gotoProject(p.route)">
            <!-- <img :src="require(`${p.image}`)"> -->
            <img :src="p.image">
          </div>
          <div class="right">
            <span class="title" @click="gotoProject(p.route)">{{ p.title }}</span>
            <span class="year">{{ p.year }}</span>
            <span class="description">{{ p.description }}</span>
            <ul class="tags">
              <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
            </ul>
            <!-- <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link> -->
            <a :href="p.url" :title="p.title" class="link">Read the case study</a>
          </div>
        </li>
      </ul>

      <div class="awards" v-if="portfolioData.amazon.awards.length">
        <p>I received {{ portfolioData.amazon.awards.length }} award{{ portfolioData.amazon.awards.length > 1 ? 's' : '' }} for my Amazon work:</p>
        <AwardList :data="portfolioData.amazon.awards"></AwardList>
      </div>

      <div class="news" v-if="portfolioData.amazon.news.total">
        <p>There are at least {{ portfolioData.amazon.news.total }} articles about my work at Amazon. These are the most recent:</p>
        <NewsList :data="portfolioData.amazon.news.data"></NewsList>
        <!-- <router-link class="more-link" :to="{ name: 'press', hash: '#amazon' }" alt="See all the articles">See all the articles</router-link> -->
        <a class="more-link" href="/press/#amazon" alt="See all the articles">See all the articles</a>
      </div>

    </div>

    <!-- Disney -->

    <div class="company" id="disney">

      <h3>Walt Disney Studios</h3>
      <p>At Disney, I was leading the UX design of the Studio's digital transformation of it's enterprise tools and processes. I also went deep into emerging technologies and R&D, especially design-driven innovation.</p>
      
      <ul class="projects">
        <li class="project" v-for="p in portfolioData.disney.projects">
          <div class="left" @click="gotoProject(p.route)">
            <!-- <img :src="require(`${p.image}`)" class="rounded"> -->
            <img :src="p.image" class="rounded">
          </div>
          <div class="right">
            <span class="title" @click="gotoProject(p.route)">{{ p.title }}</span>
            <span class="year">{{ p.year }}</span>
            <span class="description">{{ p.description }}</span>
            <ul class="tags">
              <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
            </ul>
            <!-- <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Read the case study</router-link> -->
            <a :href="p.url" :title="p.title" class="link">Read the case study</a>
          </div>
        </li>
      </ul>

      <div class="awards" v-if="portfolioData.disney.awards.length">
        <p>I received {{ portfolioData.disney.awards.length }} award{{ portfolioData.disney.awards.length > 1 ? 's' : '' }} for my Disney work:</p>
        <AwardList :data="portfolioData.disney.awards"></AwardList>
      </div>

      <div class="news" v-if="portfolioData.disney.news.total">
        <p>There are at least {{ portfolioData.disney.news.total }} articles about my work at Disney. These are the most recent:</p>
        <NewsList :data="portfolioData.disney.news.data"></NewsList>
        <!-- <router-link class="more-link" :to="{ name: 'press', hash: '#disney' }" alt="See all the articles">See all the articles</router-link> -->
        <a class="more-link" href="/press/#disney" alt="See all the articles">See all the articles</a>
      </div>

    </div>

    <!-- Phenomblue -->

    <div class="company" id="phenomblue">

      <h3>Phenomblue</h3>
      <p>Phenomblue was a digital brand experience agency. What does that even mean? It means I created digital experiences for brands including Microsoft, Gatorade, McDonalds, TUMS, and more.</p>
      
      <ul class="projects">
        <li class="project" v-for="p in portfolioData.phenomblue.projects">
          <div class="left" @click="gotoProject(p.route)">
            <!-- <img :src="require(`${p.image}`)" class="rounded"> -->
            <img :src="p.image" class="rounded">
          </div>
          <div class="right">
            <span class="title" @click="gotoProject(p.route)">{{ p.title }}</span>
            <span class="year">{{ p.year }}</span>
            <span class="description">{{ p.description }}</span>
            <ul class="tags">
              <li class="tag" v-for="tag in p.tags">{{ tag }}</li>
            </ul>
            <!-- <router-link class="link" :key="p.route.name" :to="p.route" :title="p.title">Check out this project</router-link> -->
            <a :href="p.url" :title="p.title" class="link">Check out this project</a>
          </div>
        </li>
      </ul>

      <div class="awards" v-if="portfolioData.phenomblue.awards.length">
        <p>I received {{ portfolioData.phenomblue.awards.length }} award{{ portfolioData.phenomblue.awards.length > 1 ? 's' : '' }} for my Phenomblue work:</p>
        <AwardList :data="portfolioData.phenomblue.awards"></AwardList>
      </div>

      <div class="news" v-if="portfolioData.phenomblue.news.total">
        <p>There are at least {{ portfolioData.phenomblue.news.total }} articles about my work at Phenomblue. These are the most recent:</p>
        <NewsList :data="portfolioData.phenomblue.news.data"></NewsList>
        <!-- <router-link class="more-link" :to="{ name: 'press', hash: '#phenomblue' }" alt="See all the articles">See all the articles</router-link> -->
        <a class="more-link" href="/press/#phenomblue" alt="See all the articles">See all the articles</a>
      </div>

    </div>

  </Subpage>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Subpage from '@components/Subpage';
  import projectData from '@data/portfolio';
  import newsData from '@data/news-coverage';
  import companies from '@data/companies';
  import NewsList from '@components/NewsList';
  import AwardList from '@components/AwardList';
  import awardsData from '@data/awards';

  import _ from 'lodash';

  export default {
    name: 'Portfolio',

    components: {
      Subpage,
      NewsList,
      AwardList
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

      gotoProject(route) {
        this.$router.push(route);
      }
    },

    data () {

      // remove all hidden projects and sort the rest
      let projects = _.orderBy(
        _.filter(projectData, o => { return !o.hidden; }),
        [ 'year' ],
        [ 'desc' ]);

      let portfolioData = {};
      _.each(companies, (value, key) => {
        portfolioData[value.slug] = {

          //projects: _.filter(projects, o => { return o.company.slug == value.slug; }),
          projects: _.filter(projects, o => { return o.company.slug == value.slug; }),

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
      background-image: url('@assets/rocket.png');
      height: 64px;
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
      background-image: url('@assets/amazon.png');
      height: 64px;
    }
  }

  #disney {
    h3 {
      background-image: url('@assets/disney.png');
      height: 64px;
    }
  }

  #phenomblue {
    h3 {
      background-image: url('@assets/phenomblue.png');
      height: 64px;
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

    /* //a { margin: 0 1.3rem; } */

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
    }
  }

  .news, .awards { margin-top: 4rem; }

  h3 {
    font-size: 1.5rem;
    + p { padding: 1rem 0 4rem 0; }
  }

  /*#portfolio {
    padding-top: 4rem;
    margin-top: 8rem; 
  }*/

  .o { letter-spacing: -0.55rem; }

  .projects {
    margin: 0;
    list-style: none;

    .project {
      display: grid;
      grid-template-columns: [left] 33% [right] 1fr;
      grid-column-gap: 2rem;

      + .project { margin-top: 3.5rem; }
      .left {
        grid-column: left;
        object-fit: contain;
        &:hover { cursor: pointer; }
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
        &:hover { cursor: pointer; }
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
          /* //background-color: #9ec4ce; */
          background-color: var(--color-background-dark);
          color: var(--color-text-light);
          padding: 0 0.7rem;
          border-radius: 1rem;
          font-size: 0.8rem;
        }
      }

      .link { display: inline-block; }
    }
  }

  .news, .awards {
    .more-link {
      margin-top: 2rem;
      display: block;
    }

    p { margin-bottom: 2rem; }

    strong { font-weight: 600; }
  }

</style>
