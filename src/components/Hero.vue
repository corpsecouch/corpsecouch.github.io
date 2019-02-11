<template>
  <section id="hero">
    <span>
      <h1>Jason Bejot</h1>
      <p>Stuf and things.</p>
    </span>
    <span>
      <img src="static/photo.jpg">
    </span>
  </section>
</template>

<script>
  export default {
    name: 'Hero'
  }
</script>

<style scoped lang="css">
  section {
    display: grid;
    grid-template-columns: auto 240px;
    grid-gap: 1em;
    padding: 2em;
    height: 100vh;
    align-items: center;
    max-width: 1024px;
    box-sizing: border-box;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 240px;
  }
</style>
