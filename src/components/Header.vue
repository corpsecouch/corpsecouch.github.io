<template>
  <header :class="$style.header">
    <div class="container">
      <span :class="$style.name"><a href="/" alt="Home">Jason</a></span>
      <a href="/portfolio/" alt="Portfolio">Portfolio</a>
      <a href="/articles/" alt="Articles">Articles</a>
      <a href="/awards/" alt="Awards">Awards</a>
      <a href="/press/" alt="Press">Press</a>
      <a href="/#contact" alt="Contact">Contact</a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style module lang="scss">
  .header {
    z-index: var(--z-menu);
    width: 100%;
    padding: 1.6rem 0;
    font-size: 0.9rem;
    position: absolute;
  }

  .header a {
    color: var(--color-text-dark);
  }

  .header > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 1.6rem;
    flex-wrap: wrap;
    row-gap: 1rem;
  }

  .name {
    flex-grow: 1;
    min-width: 30%;

    a {
      text-decoration: none;
      display: inline-block;
      font-family: 'Mainstay';
      transform: rotate(-18deg);
      letter-spacing: normal;
      font-size: 1.4rem;
    }
    a:hover {
      text-decoration:none;
    }
  }
</style>
