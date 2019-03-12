<template>
    <Section>
      <slot name="masthead"></slot>
      <!--<img :src="src" id="masthead">-->
      <div class="description">
        <span id="role"><slot name="role">role</slot></span>
        <header><slot name="title">title</slot></header>
        <p id="details"><slot name="details">details</slot></p>
      </div>
    </Section>
</template>

<script>
  import Section from 'components/SectionTemplate'

  export default {
    name: 'ExperienceTemplate',

    props: ['src'],

    components: {
      Section
    }
  }
</script>

<style scoped lang="scss">
  .description {
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

    > span {
      display: block;
    }
  }

  .masthead {
    width: 100%;
  }

  #description {
    margin-top: 3em;
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
    font-weight: 300;
    font-size: 1.8em;
    line-height: 1.2;

    + #details {
      margin-top: 0.6em;
    }
  }
</style>
