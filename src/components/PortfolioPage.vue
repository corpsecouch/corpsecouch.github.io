<template>
  <Page>

    <Section>
      <slot></slot>
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
  }

  /*.container {
    box-sizing: border-box;
    max-width: 990px;
    margin: 0 auto;

    @include screen-xl { width: 940px; }
    @include screen-lg { width: 720px; }
    @include screen-md { width: 86%; }
    @include screen-sm { width: 90%; }
  }*/
</style>
