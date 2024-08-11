<template>
  <Subpage class="work widthConstrained">

      <section id="title">
        <div class="wrapper">
          <h1><slot name="title"></slot></h1>
          <p v-if="!!this.$slots.subtitle"><slot name="subtitle"></slot></p>
          <span id="company"><slot name="company"></slot></span>
          <span id="year"><slot name="year"></slot></span>
        </div>
      </section>

      <!-- might be ok to get rid of hero -->
      <section id="hero" v-if="!!this.$slots.hero">
        <slot name="hero"></slot>
      </section>

      <section id="nda" v-if="nda">
        <p>Due to an NDA I've limited the detail of this case study.</p>
      </section>

      <section id="content" v-if="!!this.$slots.content">
        <slot name="content"></slot>
      </section>

      <section id="challenge" class="columned" v-if="!this.$slots.content && !!this.$slots.challenge">
        <h3>The Challenge</h3>
        <div><slot name="challenge"></slot></div>
      </section>

      <section id="role" class="columned" v-if="!this.$slots.content && !!this.$slots.role">
        <h3>My role</h3>
        <div><slot name="role"></slot></div>
      </section>

      <section id="outcome" class="columned" v-if="!this.$slots.content && !!this.$slots.outcome">
        <h3>The Outcome</h3>
        <div><slot name="outcome"></slot></div>
      </section>

      <section id="process" class="columned" v-if="!this.$slots.content && !!this.$slots.process">
        <h3>My Process</h3>
        <div><slot name="process"></slot></div>
      </section>

      <section id="awards" class="columned left" v-if="!!this.$slots.awards">
        <h3>awards</h3>
        <slot name="awards"></slot>
      </section>

      <section id="news" class="columned right" v-if="!!this.$slots.news">
        <h3>in the news</h3>
        <slot name="news"></slot>
      </section>

      <section id="contact">
        <p>Want to talk about this project?</p>
        <p><Email /></p>
      </section>

  </Subpage>
</template>

<script>
  import Subpage from 'components/Subpage'
  import Caret from 'components/Caret'
  import Email from 'components/Email'

  export default {
    name: 'PortfolioPage',

    components: {
      Subpage,
      Caret,
      Email
    },

    props: ['nda'],

    computed: {
      columns: function() {
        if (!this.$slots.awards && !this.$slots.news) return false;
        else if (this.$slots.awards && this.$slots.news) return 'double';
        else return 'single';
      }
    }
  }
</script>

<style scoped lang="scss">
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  #contact {
    text-align: center;
    margin: 8rem;
  }

  #navs {
    position: fixed;
    width: 100%;
    height: 3rem;
    top: 0;
    left: 0;
    background-color: $color-background-light;
    padding: 1rem;
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    font-size: 0.9rem;
    box-shadow: 0 8px 12px -7px rgba(0, 0, 0, 0.1);

    .name {
      background-color: $color-background-light;
      padding: 2rem;
      border-radius: 100%;
      width: 7rem;
      height: 7rem;
      position: relative;
      top: -3rem;
      box-shadow: 0 8px 12px -7px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        color: $color-text-dark;
        text-decoration: none;
        display: block;
        font-family: 'Mainstay';
        transform: rotate(-18deg);
        letter-spacing: normal;
        margin-top: 1.4rem;
        font-size: 1.4rem;
      }
    }
  }

  #content {
    margin: 0 4rem 4rem 4rem;
  }

  #nda {
    text-align: center;
    margin: 6rem auto;
    p {
      background-color: $color-background-dark;
      border-radius: 8px;
      color: $color-lighttext;
      display: inline;
      padding: 0.5rem 1rem;
    }
  }

  #hero {
    margin: 12rem 0 4rem 0;
  }

  .columned {
    margin: 4rem 0;
  }

  /*.columned {
    margin: 4rem;
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1.5rem;
    grid-template-columns: [left] 8rem [right] auto;

    @include screen-small {
      display: block;
    }

    h3 {
      grid-column: left;
      text-align: right;

      @include screen-small {
        text-align: left;
      }
    }

    div {
      grid-column: right;
    }
  }*/

  #news-awards {
    margin: 0 0 8rem 0;

    &.double, &.single {
      display: grid;
      grid-auto-rows: 1fr;
      grid-gap: 1.5rem;
    }

    &.double {
      grid-template-columns: [left] 1fr [right] 1fr;

      @include screen-small {
        grid-template-columns: [left right] auto;
      }
    }

    &.single {
      grid-template-columns: [left right] auto;
    }

    .left { grid-column: left; }
    .right { grid-column: right; }

  }

  #title {
    display: flex;
    justify-content: space-between;

    .nav {
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      align-items: center;
    }

    .wrapper {
      flex-grow: 1;
    }

    #prev svg {
      transform: rotate(90deg);
    }
  }
</style>
