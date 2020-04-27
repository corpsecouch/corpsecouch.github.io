<template>
  <footer>&copy; Jason Bejot</footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  footer {
    grid-column: mainStart / mainEnd;
    grid-row: rowFooter;
    padding: 3em 0;
    text-align: center;
  }
</style>
