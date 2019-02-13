<template>
    <SectionTemplate>
      <img :src="src">
      <div id="description">
        <span id="role"><slot name="role">role</slot></span>
        <header><slot name="title">title</slot></header>
        <span id="details"><slot name="details">details</slot></span>
      </div>
    </SectionTemplate>
</template>

<script>
  import SectionTemplate from 'components/SectionTemplate'

  export default {
    name: 'ExperienceTemplate',
    props: ['src'],
    components: {
      SectionTemplate
    }
  }
</script>

<style scoped lang="scss">
  #description {
    @include screen-xl {
      width: 50%;
      margin: 0 auto;
    }

    @include screen-lg {
      width: 70%;
      margin: 0 auto;
    }

    @include screen-md { width: 90%; }

    @include screen-sm { width: 100%; }
  }

  #description > span {
    display: block;
  }

  img {
    width: 100%;

    + #description {
      margin-top: 3em;
    }
  }

  #role {
    @include font-raleway;
    font-size: 0.8em;
    font-weight: 500;
    text-transform: uppercase;

    + header {
      margin-top: 0.6em;
    }
  }

  header {
    @include font-raleway;
    font-weight: 300;
    font-size: 1.8em;
    line-height: 1.2;

    + #details {
      margin-top: 0.6em;
    }
  }

  #details {
    @include font-raleway;
    line-height: 1.3;
    font-size: 1em;
    line-height: 1.4;
  }
</style>
