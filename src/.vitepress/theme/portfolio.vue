<template>
  <!-- <div :class="$style.project"> -->

    <section :class="$style.title" :style="{'background-color': $props.color}">
      <div class="widthConstrained">
        <div class="wrapper">
          <h1><slot name="title"></slot></h1>
          <p :class="$style.subtitle" v-if="!!$slots.subtitle"><slot name="subtitle"></slot></p>
          <span :class="$style.company"><slot name="company"></slot></span>
          <span :class="$style.year"><slot name="year"></slot></span>
        </div>
      </div>
    </section>

    <div :class="$style.nda" v-if="nda">
      <div :class="$style.icon"><SVGHidden /></div>
      <p>I've limited the details of this public case study due to the sensitive nature of the project and the confidentiality of <slot name="company"></slot>.</p>
    </div>

    <section>
      <Content />
    </section>

  <!-- </div> -->
</template>

<script>
  export default {
    name: 'Portfolio',
    props:[
      'nda',
      'color'
    ]
  }
</script>

<style module lang="css">

  .nda {
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
