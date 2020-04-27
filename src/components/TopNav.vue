<template>
  <!--<header>
      <div class="container">
        <router-link :to="{ name : 'index' }" alt="Jason Bejot">Jason&nbsp;Bejot</router-link>
        <span class="deadspace"></span>
        <span class="navs">
          <router-link to="/#about" alt="about">About</router-link>
          <router-link :to="{ name : 'portfolio' }" alt="portfolio">Portfolio</router-link>
          <router-link :to="{ name : 'contact' }" alt="contact">Contact</router-link>
        </span>
      </div>
  </header>-->
  <header>
    <span class="name">Jason Bejot</span>
    <span class="links">
      <a>About</a>
      <a>Work</a>
      <a>Contact</a>
    </span>
  </header>
</template>

<script>
  export default {
    name: 'TopNav'
  }
</script>

<style scoped lang="scss">
  header {
    grid-column: mainStart / mainEnd;
    grid-row: rowHeader;
    padding: 6rem 0 3rem 0;
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
</style>
