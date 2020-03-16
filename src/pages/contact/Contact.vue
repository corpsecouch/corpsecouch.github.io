<template>
  <Page>

    <Section>
      <header>Let's talk.</header>
      <p>Is it work related?<br><a href="http://linkedin.com/in/jasonbejot" target="_blank">Message me on LinkedIn</a></p>
      <p>Something other than work?<br><a href="http://twitter.com/jasonbejot" target="_blank">DM me on Twitter</a></p>
      <p>If all else fails...<br><a href="https://calendly.com/jasonbejot" target="_blank">Book a meeting</a></p>
    </Section>

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Section from 'components/SectionTemplate'
  import Page from 'components/PageTemplate'

  export default {
    name: 'Contact',

    components: {
      Section,
      Page
    }

  }
</script>

<style scoped lang="scss">

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;

    /deep/ .container {

      > * {
        margin: 0 auto;

        @include screen-xl { width: 70%; }
        @include screen-lg { width: 70%; }
        @include screen-md { width: 90%; }
        @include screen-sm { width: 100%; }
      }

      header {
        font-size: 2.4em;
        font-weight: 300;
        line-height: 1.2;
      }

      p {
        padding-top: 1em;
        font-size: 1.2em;
        line-height: 1.6;
        padding-bottom: 2em;
      }
    }
  }

</style>
