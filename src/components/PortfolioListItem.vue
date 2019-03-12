<template>
  <router-link :to="{ name: route }">
    <img src="https://picsum.photos/120">
    <span class="container">
      <span class="title"><slot name="title">Project Title</slot></span>
      <span class="description"><slot name="description">Project description</slot></span>
    </span>
  </router-link>
</template>

<script>
  export default {
    name: 'PortfolioListItem',

    props: ['route']
  }
</script>

<style scoped lang="scss">
  a {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: flex-end;
    color: black;
    text-decoration: none;
  }
  .container {
    padding-left: 1rem;

    > span {
      display: block;
      width: 100%;
    }
  }

  .title {
    font-size: 1.2rem;
  }

  .description {
    padding-top: 0.5rem;
  }
</style>
