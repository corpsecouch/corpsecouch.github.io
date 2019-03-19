<template>
  <header>
    <router-link :to="{ name : 'index' }" alt="Jason Bejot">Jason&nbsp;Bejot</router-link>
    <span class="deadspace"></span>
    <span class="navs">
      <router-link to="/#about" alt="about">About</router-link>
      <router-link :to="{ name : 'portfolio' }" alt="portfolio">Portfolio</router-link>
      <router-link :to="{ name : 'contact' }" alt="contact">Contact</router-link>
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
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: flex-end;
    font-weight: 500;
    margin: 1rem 1rem 0 1rem;
    border-bottom: lightgrey 1px solid;

    a {
      display: inline-block;
      text-decoration: none;
      color: black;
      cursor: pointer;
      margin-bottom: 1rem;
    }

    > .navs {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-content: flex-end;

      a {
        margin: 0 1rem;

        &:first-child, &:last-child {
          margin: 0;
        }
      }
    }

    > .deadspace {
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: 1rem;
    }
  }
</style>
