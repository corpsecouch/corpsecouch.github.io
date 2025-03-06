<template>

    <section :class="$style.title" :style="{'background-color': $props.color}">
      <div class="widthConstrained">
        <!-- <div :class="$style.hero" v-if="!!$slots.hero"> -->
        <!-- <slot name="hero"></slot> -->
        <div :class="$style.hero">
          <img :src="$props.hero">
        </div>
        <div class="wrapper">
          <h1>{{ $props.title }}</h1>
          <p :class="$style.subtitle" v-if="$props.subtitle">{{ $props.subtitle }}</p>
          <span :class="$style.company">{{ company }}</span>
          <span :class="$style.year">{{ $props.year }}</span>
        </div>
      </div>
    </section>

    <div class="container">

      <NDA v-if="nda" v-bind:company="company" />

      <section :class="$style.content">
        <Content />
      </section>

      <section :class="$style.awards" v-if="awards.length">
        <h2>Awards</h2>
        <AwardList :data="awards"></AwardList>
      </section>

      <section :class="$style.news" v-if="press.length">
        <h2>Press</h2>
        <PressList :data="press"></PressList>
      </section>

      <section :class="$style.contact">
        <p>Want to talk about this project?</p>
        <p><Email /></p>
      </section>

    </div>

</template>

<script>
  import NDA from '@components/NDA'
  import Email from '@components/Email'
  import { data as companies } from '@globals/companies.data'
  import PressList from '@components/NewsList'
  import { data as pressData } from '@press/press.data'
  import AwardList from '@components/AwardList.vue'
  import { data as awardData } from '@awards/awards.data'
  import _ from 'lodash';

  export default {
    name: 'Portfolio',

    components: {
      NDA,
      Email,
      PressList,
      AwardList
    },

    props:[
      'keyProject',
      'nda',
      'color',
      'keyCompany',
      'hero',
      'title',
      'year',
      'subtitle'
    ],

    data() {
      return {
        company: companies[this.$props.keyCompany].name.long,
        press: _.filter(pressData, ['project', this.$props.keyProject]),
        awards: _.filter(awardData, ['project', this.$props.keyProject])
      }
    }
  }

</script>

<style module lang="css">
  
  .news, .awards, .content {
    h2 {
      font-family: 'Afacad Flux';
      letter-spacing: normal;
      font-weight: 500;
      text-transform: none;
      text-align: left;
      font-size: 1.4rem;
      line-height: normal;
      margin: 4rem 0 1rem 0;
      border-bottom: dashed grey 1px;

      & + p { margin-top: 0; }
    }
  }

  .content {
    h3 {
      font-weight: 600;
      margin: 1.5rem 0 0 0;
      text-transform: none;

      & + * {
        margin-top: 0;
      }
    }

    img {
      width: 100%;
      max-height: 440px;
    }

    * + p { margin-bottom: 1.3rem; }

    ul {
      li + li {
        margin-top: 1rem;
      }
    }

    strong { font-weight: bold; }

    /* figure {
      margin: 3rem 0;

      img {
        width: inherit;
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }

      figcaption {
        text-align: center;
        margin-top: 1rem;
        font-size: 0.8rem;
      }
    } */

    figure {
      margin-top: 1rem;
      background-color: whitesmoke;
      margin-bottom: 3rem;
      padding: 2rem 2rem 1.5rem 2rem;

      /* max-width: xsmall screen */
      @media all and (max-width: 600px) { padding: 1rem; }

      img { width: 100% }

      &:deep(img) {
        width: 100%;
        filter: drop-shadow(0px 2px 0.5rem rgba(0, 0, 0, 0.2));
      }

      figcaption {
        margin: 0.6rem 0 0 0;
        color: grey;
        font-size: 0.8rem;
        font-style: italic;
        text-align: center;
        line-height: 1.5em;
      }
    }
  }

  /* .hero :slotted(img) { */
  .hero img {
    width: 100%;
    padding: 0 3rem;
  }

  .contact {
    text-align: center;
    margin: 8rem 0;
  }

  .title {
    margin: 0;
    padding: 6rem 0 6rem 0;
    background-color: whitesmoke;
    background-image: linear-gradient(0deg, var(--color-background-light) 5%, transparent 120%);

    .subtitle {
      text-align: center;
    }

    .year, .company {
      font-size: 0.9rem;
      display: block;
      padding-top: 1rem;
      text-align: center;
    }
  }

</style>
