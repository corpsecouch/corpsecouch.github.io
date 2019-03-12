<template>
  <Page>

    <Section>
      <header class="company">Amazon</header>
      <ul class="project-list">

        <li>
          <PortfolioListItem route="alexacortana">
            <template v-slot:title>Introducing Alexa to Cortana</template>
            <template v-slot:description>Connecting AIs from two of the world's largest companies; a world-first.</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="alexapersonalskills">
            <template v-slot:title>Personalizing Alexa Skills</template>
            <template v-slot:description>Transforming the experience of Alexa Skills.</template>
          </PortfolioListItem>
        </li>

      </ul>
    </Section>

    <Section>
      <header class="company">Walt Disney Studios</header>
      <ul class="project-list">

        <li>
          <PortfolioListItem route="disneydesignsystem">
            <template v-slot:title>Studio Design System</template>
            <template v-slot:description>Creating an award-winning enterprise design system.</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="disneygreenlight">
            <template v-slot:title>Movie Greenlight</template>
            <template v-slot:description>Innovating how Disney greenlights movies.</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="disneyinnovationprogram">
            <template v-slot:title>Innovation Incubator</template>
            <template v-slot:description>Transforming how Disney Studios innovates.</template>
          </PortfolioListItem>
        </li>

        <li>
          <PortfolioListItem route="disneymovieslate">
            <template v-slot:title>Movie Slate</template>
            <template v-slot:description>Innovating how Disney plans and tracks their slate of upcoming movies.</template>
          </PortfolioListItem>
        </li>

      </ul>
    </Section>

    <Section>
      <header class="company">Ace Metrix</header>
      <ul class="project-list">

        <li>
          <PortfolioListItem route="aceanalyticsdashbaord">
            <template v-slot:title>Analytics Dashboard</template>
            <template v-slot:description>Blah blah blah blah blah</template>
          </PortfolioListItem>
        </li>

      </ul>
    </Section>

  </Page>
</template>

<script>
  import Page from 'components/PageTemplate'
  import Section from 'components/SectionTemplate'
  import PortfolioListItem from 'components/PortfolioListItem'

  export default {
    name: 'Portfolio',

    components: {
      Page,
      Section,
      PortfolioListItem
    }

  }
</script>

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
