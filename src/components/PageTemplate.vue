<template>
  <div id="page">

    <main>
      <slot></slot>
    </main>

    <footer class="divider">
      Built from scratch with care.
      <span id="copyright">&copy; Jason Bejot</span>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'PageTemplate',

    components: { },

  }
</script>

<style lang="css">
  @import "@styles/global-variables.css";
  @import "@styles/global-styles.css";

  main {
    width: 100%;
    display: block;
  }

  footer {
    width: 100%;
    display: block;
    padding: 3rem 0;
    font-size: 0.9rem;
    text-align: center;
  }

  #copyright {
    text-transform: uppercase;
    display: block;
    margin-top: 1.5rem;
  }
</style>
