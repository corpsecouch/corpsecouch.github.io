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

<style module lang="scss">
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
</style>
