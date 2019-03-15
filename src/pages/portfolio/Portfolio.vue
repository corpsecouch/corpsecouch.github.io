<template>
  <Page>
    <Section id="intro">
      <header>Welcome to my portfolio.</header>
      <p>Here are some notable samples of my work. If you're interested in digging into the details, please <a href="#">contact me</a>.</p>
    </Section>

    <Section class="company">
      <header>Amazon</header>
      <p>I'm still at Amazon and everything I work on is under NDA. What's shown here are a sample of notable things that have publicly launched.</p>
      <ul class="project-list">

        <li>
          <img src="./amazon/alexa-cortana/peek.png">
          <span class="rightside">
            <span class="title">Introducing Alexa to Cortana</span>
            <span class="description">Connecting AIs from two of the world's largest companies; a world-first.</span>
            <router-link :to="{ name: 'alexacortana' }">Learn more</router-link>
          </span>
        </li>

        <!--<li>
          <img src="./amazon/alexa-personal-skills/peek.png">
          <span class="container">
            <span class="title">Personalizing Alexa Skills</span>
            <span class="description">Transforming the experience of Alexa Skills.</span>
            <router-link :to="{ name: 'alexapersonalskills' }">Learn more</router-link>
          </span>
        </li>-->

      </ul>
    </Section>

    <Section class="company">
      <header>Walt Disney Studios</header>
      <p>Myself, and the team I was leading, worked on a lot of stuff, hundreds of products and projects. From mobile to web to service design to Augmented Reality and Virtual Reality. This is a small sample of all that work.</p>
      <p>If it feels like something is missing from these case studies, you're right. Nearly everything I workd on at Disney Studios was under NDA.</p>
      <ul class="project-list">

        <li>
          <img src="./disney/design-system/peek.png">
          <span class="rightside">
            <span class="title">Studio Design System</span>
            <span class="description">Creating an award-winning enterprise design system.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Learn more</router-link>
          </span>
        </li>

        <li>
          <img src="./disney/greenlight/peek.png">
          <span class="rightside">
            <span class="title">Movie Greenlight</span>
            <span class="description">Innovating how Disney greenlights movies.</span>
            <router-link :to="{ name: 'disneygreenlight' }">Learn more</router-link>
          </span>
        </li>

        <li>
          <img src="./disney/innovation-program/peek.png">
          <span class="rightside">
            <span class="title">Innovation Incubator</span>
            <span class="description">Transforming how Disney Studios innovates.</span>
            <router-link :to="{ name: 'disneyinnovationprogram' }">Learn more</router-link>
          </span>
        </li>

        <li>
          <img src="./disney/slate/peek.png">
          <span class="rightside">
            <span class="title">Movie Slate</span>
            <span class="description">Innovating how Disney plans and tracks their slate of upcoming movies.</span>
            <router-link :to="{ name: 'disneymovieslate' }">Learn more</router-link>
          </span>
        </li>

      </ul>
    </Section>

    <Section class="company">
      <header>Ace Metrix</header>
      <p>You're probably wondering where all the case studies are for my time at Ace Metrix. The answer is really simple: they only had one product.</p>
      <ul class="project-list">

        <li>
          <img src="./ace-metrix/analytics-dashboard/peek.png">
          <span class="rightside">
            <span class="title">Analytics Dashboard</span>
            <span class="description">Blah blah blah blah blah</span>
            <router-link :to="{ name: 'aceanalyticsdashbaord' }">Learn more</router-link>
          </span>
        </li>

      </ul>
    </Section>

    <Section class="company">
      <header>Phenomblue</header>
      <p>Kind of weird that haven't included any projects from Phenomlbue here, huh? I was there for many years and worked on roughly 80 products, so surely I must have something to show for it? You would be totally right, if a certain hard drive didn't crash.</p>
    </Section>

  </Page>
</template>

<script>
  import Page from 'components/PageTemplate'
  import Section from 'components/SectionTemplate'

  export default {
    name: 'Portfolio',

    components: {
      Page,
      Section
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

  .company {
    header {
      font-size: 1.6rem;

      + .project-list {
        padding-top: 3rem;
      }
    }

    .project-list {
      list-style: none;
      margin-top: 3rem;

      > li + li {
        padding-top: 4rem;
      }

      > li {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-content: flex-end;

        img {
          flex-shrink: 0;

          height: 180px;

          + .rightside {
              padding-left: 2rem;
          }
        }

        .rightside {
          flex-grow: 1;

          > span {
            display: block;
            width: 100%;
          }

          a {
            display: inline-block;
            margin-top: 0.6rem;
          }

          .title {
            font-size: 1.2rem;
            padding-top: 2rem;
            font-weight: 500;
          }

          .description {
            padding-top: 0.5rem;
          }
        }
      }
    }

  }
</style>
