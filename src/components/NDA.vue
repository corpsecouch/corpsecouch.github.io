<template>
  <div :class="$style.nda">
    <div :class="$style.icon"><SVGHidden /></div>
    <p>I've limited the details of this public case study due to the sensitive nature of the project and the confidentiality of {{ $props.company }}.</p>
  </div>
</template>

<script>
  import SVGHidden from '@components/SVGHidden'

  export default {
    name: 'NDA',
    components: { SVGHidden },
    props: [ 'company' ]
  }
</script>

<style module lang="css">
  .nda {
    background-color: var(--color-background-dark);
    /* border-radius: 8px; */

    background-image: linear-gradient(0deg, #646464 5%, transparent 120%);
    border-radius: 0.32rem;
    box-shadow:
      inset 1px 1px 1px 0 rgb(255, 255, 255),
      inset -1px -1px 1px 0 rgba(0, 0, 0, .15),
      .444584px .444584px .628737px -1px rgba(0, 0, 0, .26),
      1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247),
      2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23),
      5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192),
      10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056),
      -.5px -.5px 0 0 rgb(0 0 0 / 5%);

    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: auto auto;
    padding: 1rem 1.5rem;
    margin: 6rem;
    text-align: left;
  }

  .nda .icon {
    width: 2.5rem;
    display: flex;
  }

  .nda p {
    color: var(--color-lighttext);
    margin: 0;
  }

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    .nda {
      display: block;
      margin: 3rem 0;
    }

    .nda .icon {
      /* margin: auto;
      padding-bottom: 1rem; */
      display: none;
    }
  }
</style>
