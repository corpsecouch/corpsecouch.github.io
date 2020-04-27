<template>
  <Page>

    <section>
      <header>Let's talk.</header>
      <p>Is it work related?<br><a href="http://linkedin.com/in/jasonbejot" target="_blank">Message me on LinkedIn</a></p>
      <p>Something other than work?<br><a href="http://twitter.com/jasonbejot" target="_blank">DM me on Twitter</a></p>
      <p>If all else fails...<br><a href="https://calendly.com/jasonbejot" target="_blank">Book a meeting</a></p>
    </section>

  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Page from 'components/PageTemplate'

  export default {
    name: 'Contact',

    components: {
      Page
    }

  }
</script>

<style scoped lang="scss">

  section {
    grid-column: colLeft / mainRight;
    grid-row: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /*min-height: 80vh;*/
  }

</style>
