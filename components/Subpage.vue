<template>
  <!-- <Page class="widthConstrained"> -->
  <Page>

    <header>
      <a href="/portfolio/" alt="Portfolio">Portfolio</a>
      <a href="/awards/" alt="Awards">Awards</a>
      <span class="name"><a href="/">Jason<br />Bejot</a></span>
      <a href="/press/" alt="Press">Press</a>
      <a href="/#contact" alt="Contact">Contact</a>
    </header>

    <h1 id="page-title" v-if="!!this.$slots.title"><slot name="title">Title</slot></h1>
    <slot></slot>
    
  </Page>
</template>

<script>
  import Page from './PageTemplate'

  export default {
    name: 'Subpage',

    components: {
      Page
    }
  }
</script>

<style scoped lang="css">

  #page {
    padding-top: 6rem;
  }

  #page-title {
    font-family: 'Mainstay';
    letter-spacing: normal;
    font-size: 5rem;
    font-weight: normal;
    line-height: 4.5rem;
    text-transform: none;
  }

  header {
    position: fixed;
    z-index: var(--z-menu);
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

  /* max-width: xsmall screen */
  @media all and (max-width: 600px) {
    header {
      justify-content: space-evenly;
      column-gap: 0;
    }
  }
</style>
