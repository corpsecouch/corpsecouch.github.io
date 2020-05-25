<template>
  <section>
    <div class="content">
      <router-link :to="{ name: 'index' }">Work</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContentNavs',

    components: { }
  }
</script>

<style scoped lang="scss">
  section {
    background-color: $color-background-grey;
    padding: 3rem 0;

    .content {
      display: flex;
      justify-content: center;
    }

    a {
      padding: 0 2rem;
      text-transform: uppercase;
      color: $color-text-dark;
      opacity: 0.7;
      font-weight: 400;

      &:hover {
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
</style>
