<template>
  <Page>
    <Section id="intro">
      <header>Welcome to my portfolio.</header>
      <p>Here are some notable samples of my work. If you're interested in digging into the details, please <router-link :to="{ name: 'contact' }">contact me</router-link>.</p>
    </Section>

    <Section id="projects">
      <ul>

        <PortfolioListItem
          v-for="project in projects"
          v-bind:data="projects"
          v-bind:key="project.routeName"
          v-bind:class="{highlight: project.highlight}"
          v-bind:routeName="project.routeName"
          v-bind:imageUrl="project.imageUrl">
            <template v-slot:company>{{project.company}}</template>
            <template v-slot:title>{{project.title}}</template>
            <template v-slot:description>{{project.description}}</template>
        </PortfolioListItem>

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Amazon</span>
            <span class="title">Personalizing Alexa Skills</span>
            <span class="description">Transforming the experience of Alexa Skills.</span>
            <router-link :to="{ name: 'alexapersonalskills' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Building An Enterprise UX Org</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Patent 1</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Patent 2</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Patent 3</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Braintrust</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Ignite</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Disney Movies Anywhere</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneymovieslate' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Ace Metrix</span>
            <span class="title">Building A Start-up Design Org</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="./ace-metrix/analytics-dashboard/peek.png">
          <span class="rightside">
            <span class="company">Ace Metrix</span>
            <span class="title">Analytics Dashboard</span>
            <span class="description">Blah blah blah blah blah</span>
            <router-link :to="{ name: 'aceanalyticsdashbaord' }">Learn more</router-link>
          </span>
        </li>-->

        <!--<li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">AR Engine</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>

        <li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Signature Reserve</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>

        <li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Wild Kingdom</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>

        <li>
          <img src="https://picsum.photos/260">
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Building An Agency UX Org</span>
            <span class="description">Blah blah blah.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>-->

      </ul>

      <p>More to come.</p>

    </Section>

  </Page>
</template>

<script>
  import data from 'data/portfolio'
  import Page from 'components/PageTemplate'
  import Section from 'components/SectionTemplate'
  import PortfolioListItem from 'components/PortfolioListItem'

  export default {
    name: 'Portfolio',

    components: {
      Page,
      Section,
      PortfolioListItem
    },

    data () {
      return {
        projects: data
      }
    }

  }
</script>

<style scoped lang="scss">
  #intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 60vh;

    header {
      font-size: 2.4em;
      font-weight: 300;
      line-height: 1.2;
    }

    p {
      font-size: 1.2em;
      line-height: 1.6;
    }
  }

  #projects {
    ul {
      list-style: none;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      margin: 0;

      > li {
        margin: 0 0.5rem 4rem 0.5rem;
      }

      + p {
        text-align: center;
      }
    }

  }
</style>
