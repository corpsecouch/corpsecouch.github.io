<template>
  <Page class="widthConstrained">

    <header>
      <router-link :to="{ name: 'index', hash: '#about' }" alt="About">About</router-link>
      <router-link :to="{ name: 'portfolio' }" alt="Portfolio">Portfolio</router-link>
      <span class="name"><router-link :to="{ name: 'index' }">Jason<br />Bejot</router-link></span>
      <router-link :to="{ name: 'news' }" alt="News">News</router-link>
      <router-link :to="{ name: 'index', hash: '#contact' }" alt="Contact">Contact</router-link>
    </header>

    <h1 id="page-title" v-if="!!this.$slots.title"><slot name="title">Title</slot></h1>
    <slot></slot>
    
  </Page>
</template>

<script>
  import Page from 'components/PageTemplate'

  export default {
    name: 'Subpage',

    components: {
      Page
    }
  }
</script>

<style scoped lang="scss">
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

    @include screen-xsmall {
      justify-content: space-evenly;
      column-gap: 0;
    }

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
</style>
