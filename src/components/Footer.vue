<template>
  <footer class="divider">
    Built from scratch with care.
    <span id="copyright">&copy; Jason Bejot</span>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="css">
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
