<template>
  <Page>

    <SmallMasthead>
      Contact
    </SmallMasthead>

    <section class="content">
      <span class="left">Is it work related?<br><a href="http://linkedin.com/in/jasonbejot" target="_blank">Message me on LinkedIn</a></span>
      <span class="center">Something other than work?<br><a href="http://twitter.com/jasonbejot" target="_blank">DM me on Twitter</a></span>
      <span class="right">If all else fails...<br><a href="https://calendly.com/jasonbejot" target="_blank">Book a meeting</a></span>
    </section>
  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Page from 'components/PageTemplate'
  import SmallMasthead from 'components/SmallMasthead'

  export default {
    name: 'Contact',

    components: {
      Page,
      SmallMasthead
    }

  }
</script>

<style scoped lang="scss">
  section {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: [left] 1fr [center] 1fr [right] 1fr;
    //grid-auto-rows: 1fr;
    grid-gap: 3rem;

    .left {
      grid-column: left;
    }

    .center {
      grid-column: center;
    }

    .right {
      grid-column: right;
    }
  }
</style>
