<template>
  <div class="work">
    <section id="title" :style="{'background-color': pcolor}">
      <div class="widthConstrained">
        <section id="hero" v-if="!!$slots.hero">
          <slot name="hero"></slot>
        </section>
        <div class="wrapper">
          <h1><slot name="title"></slot></h1>
          <p id="subtitle" v-if="!!$slots.subtitle"><slot name="subtitle"></slot></p>
          <span id="company"><slot name="company"></slot></span>
          <span id="year"><slot name="year"></slot></span>
        </div>
      </div>
    </section>

    <div class="container">
      <section id="nda" v-if="nda">
        <div class="icon">
          <SVGHidden />
        </div>
        <p>I've limited the details of this public case study due to the sensitive nature of the project and the confidentiality of <slot name="company"></slot>.</p>
      </section>

      <section id="content" v-if="!!$slots.content">
        <slot name="content"></slot>
      </section>

      <section id="challenge" v-if="!$slots.content && !!$slots.challenge">
        <!-- <h3>Challenge</h3> -->
        <div><slot name="challenge"></slot></div>
      </section>

      <section id="role" v-if="!$slots.content && !!$slots.role">
        <h3>My Role</h3>
        <div><slot name="role"></slot></div>
      </section>

      <section id="outcome" v-if="!$slots.content && !!$slots.outcome">
        <h3>Outcome</h3>
        <div><slot name="outcome"></slot></div>
      </section>

      <section id="process" v-if="!$slots.content && !!$slots.process">
        <h3>Process</h3>
        <div><slot name="process"></slot></div>
      </section>

      <section id="awards" v-if="!!$slots.awards">
        <h3>Awards</h3>
        <slot name="awards"></slot>
      </section>

      <section id="news" v-if="!!$slots.news">
        <h3>Press</h3>
        <slot name="news"></slot>
      </section>

      <section id="contact">
        <p>Want to talk about this project?</p>
        <p><Email /></p>
      </section>

    </div>

  </div>
</template>

<script>
  import Caret from '@components/Caret'
  import Email from '@components/Email'
  import SVGHidden from '@components/SVGHidden'

  export default {
    name: 'PortfolioPage',

    components: {
      Caret,
      Email,
      SVGHidden
    },

    props: ['nda', 'pcolor'],

    computed: {
      columns: function() {
        if (!this.$slots.awards && !this.$slots.news) return false;
        else if (this.$slots.awards && this.$slots.news) return 'double';
        else return 'single';
      }
    }
  }
</script>

<style scoped lang="css">
  /* imported */
  /* needs cleaned up! */

  h1 {
    word-wrap: break-word;
  }
  
  /* #page.work { */
  .work {
    padding-top: 0rem;

    #title {
      margin: 0;
      /* padding: 12rem 0 6rem 0; */
      padding: 6rem 0 6rem 0;
      background-color: whitesmoke;
      background-image: linear-gradient(0deg, var(--color-background-light) 5%, transparent 120%);

      /* * {
        text-align: center;

        &:last-child {
          margin-bottom: 0;
        }
      } */

      #subtitle {
        text-align: center;
      }

      #year, #company {
        font-size: 0.9rem;
        display: block;
        padding-top: 1rem;
        text-align: center;
      }
    }

    #content {
      img {
        width: 100%;
        max-height: 440px;
      }

      * + p {
        margin-bottom: 1.3rem;
      }
    }

    ul {
      margin: 0;
      list-style: none;

      li + li {
        margin-top: 1rem;
      }
    }
  }

  /* not imported */

  h3 {
    font-family: 'Afacad Flux';
    letter-spacing: normal;
    font-weight: 500;
    text-transform: none;
    text-align: left;
    font-size: 1.4rem;
    line-height: normal;
    margin: 0 0 1rem 0;
    border-bottom: dashed grey 1px;

    & + p { margin-top: 0; }
  }

  #contact {
    text-align: center;
    margin: 8rem 0;
  }

  #navs {
    position: fixed;
    width: 100%;
    height: 3rem;
    top: 0;
    left: 0;
    background-color: var(--color-background-light);
    padding: 1rem;
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    font-size: 0.9rem;
    box-shadow: 0 8px 12px -7px rgba(0, 0, 0, 0.1);

    .name {
      background-color: var(--color-background-light);
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
        color: var(--color-text-dark);
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

  /* #content {
    margin: 0 4rem 4rem 4rem;
  } */

  #nda {
    background-color: var(--color-background-dark);
    border-radius: 8px;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: auto auto;
    padding: 1rem 1.5rem;
    margin: 6rem;
    text-align: left;

    /* max-width: xsmall screen */
    @media all and (max-width: 600px) {
      display: block;
      margin: 3rem 0;
    }


    .icon {
      width: 2.5rem;
      display: flex;

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) {
        margin: auto;
        padding-bottom: 1rem;
      }
    }

    p {
      color: var(--color-lighttext);
      margin: 0;
    }
  }

  #hero :slotted(img) {
    width: 100%;
    padding: 0 3rem;
  }

  section {
    margin: 0;
    + section {
      margin: 4rem 0 0 0;
    }
  }

  #news-awards {
    margin: 0 0 8rem 0;

    &.double, &.single {
      display: grid;
      grid-auto-rows: 1fr;
      grid-gap: 1.5rem;
    }

    &.double {
      grid-template-columns: [left] 1fr [right] 1fr;
    }

    &.single {
      grid-template-columns: [left right] auto;
    }

    .left { grid-column: left; }
    .right { grid-column: right; }

  }

  #title {
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
