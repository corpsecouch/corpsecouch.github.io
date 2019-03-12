<template>
  <main>

    <TopNav></TopNav>

    <SectionTemplate>
      <header class="company">Amazon</header>
      <ul class="project-list">

        <li>
          <PortfolioListItem route="alexacortana">
            <template v-slot:title>Introducting Alexa to Cortana</template>
            <template v-slot:description>Amazon Project 1 description</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="alexapersonalskills">
            <template v-slot:title>Personalizing Alexa Skills</template>
            <template v-slot:description>Amazon Project 2 description</template>
          </PortfolioListItem>
        </li>

      </ul>
    </SectionTemplate>

    <SectionTemplate>
      <header class="company">Walt Disney Studios</header>
      <ul class="project-list">

        <li>
          <PortfolioListItem route="disneydesignsystem">
            <template v-slot:title>Disney Design System</template>
            <template v-slot:description>Disney Project 1 description</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="disneygreenlight">
            <template v-slot:title>Movie Greenlight</template>
            <template v-slot:description>Disney Project 2 description</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="disneyinnovationprogram">
            <template v-slot:title>Innovation Program</template>
            <template v-slot:description>Disney Project 2 description</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="/portfolio/disney2">
            <template v-slot:title>Movie Slate</template>
            <template v-slot:description>Disney Project 2 description</template>
          </PortfolioListItem>
        </li>

      </ul>
    </SectionTemplate>

    <Footer></Footer>

  </main>
</template>

<script>

  import TopNav from 'components/TopNav'
  import Footer from 'components/Footer'
  import SectionTemplate from 'components/SectionTemplate'
  import PortfolioListItem from 'components/PortfolioListItem'

  export default {
    name: 'Portfolio',

    components: {
      TopNav,
      Footer,
      SectionTemplate,
      PortfolioListItem
    },

    methods: {
      track() {
        this.$ga.page('/portfolio');
      }
    }

  }
</script>

<style lang="scss">
  @import "styles/_global";
</style>

<style scoped lang="scss">
  .company {
    font-size: 1.6rem;
    text-align: center;
  }

  .company + .project-list {
    padding-top: 3rem;
  }

  .project-list {
    list-style: none;

    > li + li {
      padding-top: 1rem;
      margin-top: 1rem;
      border-top: lightgrey solid 1px;
    }
  }
</style>
