<template>
  <div id="page">
    <header>
      <span class="name">Jason Bejot</span>
      <span class="links">
        <router-link :to="{ name: 'about' }" alt="About">About</router-link>
        <router-link :to="{ name: 'work' }" alt="Work">Work</router-link>
        <router-link :to="{ name: 'contact' }" alt="Contact">Contact</router-link>
      </span>
    </header>

    <main>
      <slot></slot>
    </main>

    <footer>&copy; Jason Bejot</footer>
  </div>
</template>

<script>

  import TopNav from 'components/TopNav'
  import Footer from 'components/Footer'

  export default {
    name: 'PageTemplate',

    components: {
      TopNav,
      Footer
    }

  }
</script>

<style lang="scss">
  @import "styles/_global";

  #page {
    margin: 6rem auto 3rem auto;
    width: 80%;
  }

  header {
    /*padding: 6rem 0 3rem 0;*/
    padding: 0 0 3rem 0;
    border-bottom: dashed 1px #bfbfbf;
    display: flex;
    flex-flow: column;
    align-items: center;

    .name {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 2.4rem;
      letter-spacing: 0.5rem;
      @include font-josefin-slab;
    }

    .links {
      margin-top: 3rem;

      a {
        display: inline-block;
        padding: 0.5rem;
        margin-left: 1.5rem;

        &:hover {
          transition: background-color 0.2s;
          background-color: $color-link;
          border-radius: 0.2rem;
          color: white;
          text-decoration: none;
        }

        &:first-child {
          margin: 0;
        }
      }
    }
  }

  main {
    /*display: grid;
    grid-template-columns: 10% [mainStart] 1fr 1fr 1fr [mainEnd] 10%;
    grid-template-rows: [rowHeader] auto [rowContent] auto [rowFooter] auto;
    grid-gap: 4rem 2rem;*/

    display: grid;
    grid-template-columns: [colStart] auto auto auto [colEnd];
    grid-template-rows: auto;
    grid-gap: 4rem 2rem;
    margin: 4rem 0;
  }

  footer {
    text-align: center;
  }
</style>
