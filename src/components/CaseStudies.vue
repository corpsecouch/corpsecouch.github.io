<template>
  <section id="hero">

    <span class="case-study">
      <span>
        <img src="static/photo.jpg">
      </span>
      <span>
        <h3>Case Study</h3>
        <p>Stuff and things.</p>
        <a>Link</a>
      </span>
    </span>

    <span class="case-study">
      <span>
        <img src="static/photo.jpg">
      </span>
      <span>
        <h3>Case Study</h3>
        <p>Stuff and things.</p>
        <a>Link</a>
      </span>
    </span>

  </section>
</template>

<script>
  export default {
    name: 'CaseStudies'
  }
</script>

<style scoped lang="css">
  section {
    display: grid;
    grid-template-columns: 240px auto;
    grid-gap: 1em;
    padding: 2em;
    align-items: center;
    max-width: 1024px;
    box-sizing: border-box;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 240px;
  }

  .case-study {
    grid-row-start: auto;
    grid-row-end: auto;
  }
</style>
