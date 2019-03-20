<template>
  <Page>

    <Section>
      <header><slot name="title"></slot></header>
      <span class="subhead"><slot name="subhead">A Case Study</slot></span>
      <div class="content"><slot name="content"></slot></div>
    </Section>

  </Page>
</template>

<script>
  import Page from 'components/PageTemplate'
  import Section from 'components/SectionTemplate'

  export default {
    name: 'PortfolioPage',

    components: {
      Page,
      Section
    }
  }
</script>

<style scoped lang="scss">
  section {
    width: 100%;
    padding-top: 10rem;
    padding-bottom: 0;
  }

  header {
    font-size: 2.4em;
    font-weight: 300;
    line-height: 1.2em;
    padding-bottom: 1em;
    text-align: center;
  }

  .subhead {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: $color-grey;
    display: block;
    text-align: center;
    margin-bottom: 2.5rem;
  }

  /deep/ h2 {
    font-weight: 600;
    margin-top: 2em;

    &:first-of-type, + * {
      margin-top: 0;
    }
  }

  .content {
    @include screen-xl { width: 70%; }
    @include screen-lg { width: 70%; }
    @include screen-md { width: 90%; }
    @include screen-sm { width: 100%; }
    margin: auto;
  }
</style>
