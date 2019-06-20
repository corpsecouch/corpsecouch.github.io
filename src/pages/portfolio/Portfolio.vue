<template>
  <Page>
    <Section id="intro">
      <header>Welcome to my portfolio.</header>
      <p>Here are some notable samples of my work. If you're interested in digging into the details, please <router-link :to="{ name: 'contact' }">contact me</router-link>.</p>
    </Section>

    <Section id="projects">
      <ul>

        <li>
          <!--<img src="./amazon/alexa-cortana/peek.png">-->
          <span class="rightside">
            <span class="company">Amazon</span>
            <span class="title">Introducing Alexa to Cortana</span>
            <span class="description">Connecting AIs from two of the world's largest companies; a world-first.</span>
            <router-link :to="{ name: 'alexacortana' }">Read more</router-link>
          </span>
        </li>

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

        <li>
          <!--<img src="./disney/design-system/peek.png">-->
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Studio Design System</span>
            <span class="description">Creating an award-winning enterprise design system.</span>
            <router-link :to="{ name: 'disneydesignsystem' }">Read more</router-link>
          </span>
        </li>

        <li>
          <!--<img src="./disney/greenlight/peek.png">-->
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Movie Greenlight</span>
            <span class="description">Innovating how Disney greenlights movies.</span>
            <router-link :to="{ name: 'disneygreenlight' }">Read more</router-link>
          </span>
        </li>

        <li>
          <!--<img src="./disney/innovation-program/peek.png">-->
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Innovation Incubator</span>
            <span class="description">Transforming how Disney Studios innovates.</span>
            <router-link :to="{ name: 'disneyinnovationprogram' }">Read more</router-link>
          </span>
        </li>

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

        <li>
          <!--<img src="https://picsum.photos/260">-->
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Filmmaking for Virtual Reality</span>
            <span class="description">Leading the VR conversation.</span>
            <router-link :to="{ name: 'disneyvr' }">Read more</router-link>
          </span>
        </li>

        <li>
          <!--<img src="./disney/slate/peek.png">-->
          <span class="rightside">
            <span class="company">Walt Disney Studios</span>
            <span class="title">Movie Slate</span>
            <span class="description">Innovating how Disney plans and tracks their slate of upcoming movies.</span>
            <router-link :to="{ name: 'disneymovieslate' }">Read more</router-link>
          </span>
        </li>

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
            <span class="title">Dino Dig</span>
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

        <li>
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Microsoft Genesis</span>
            <span class="description">A 3D multi-person space simulator for the Surface 1.0.</span>
            <router-link :to="{ name: 'phenombluegenesis' }">Read more</router-link>
          </span>
        </li>

        <li>
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Operation: Dino Dig</span>
            <span class="description">TK</span>
            <router-link :to="{ name: 'phenombluedinodig' }">Read more</router-link>
          </span>
        </li>

        <li>
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Movie Lotto</span>
            <span class="description">TK</span>
            <router-link :to="{ name: 'phenombluemovielotto' }">Read more</router-link>
          </span>
        </li>

        <li>
          <span class="rightside">
            <span class="company">Phenomblue</span>
            <span class="title">Fantastic Future Me</span>
            <span class="description">TK</span>
            <router-link :to="{ name: 'phenombluefantasticfutureme' }">Read more</router-link>
          </span>
        </li>

      </ul>

      <p>More to come.</p>

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

  #projects {
    ul {
      list-style: none;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      margin: 0;

      > li {
        display: flex;
        flex-flow: column nowrap;
        width: 260px;
        margin: 0 0.5rem 4rem 0.5rem;

        .rightside {
          /*margin: 1rem 0 0 0;*/
          margin: 0;
          padding: 1rem 0 0 0;
          border-top: rgba(46, 139, 87, 0.28) 1rem solid;

          > span {
            display: block;
            width: 100%;
          }

          a {
            display: inline-block;
            margin-top: 0.6rem;
          }

          .company {
            font-size: 0.7rem;
            text-transform: uppercase;
            color: $color-grey;
          }

          .title {
            font-size: 1.2rem;
            font-weight: 500;
          }

          .description {
            padding-top: 0.5rem;
          }
        }
      }

      + p {
        text-align: center;
      }
    }

  }
</style>
