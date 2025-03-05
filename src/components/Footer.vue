<template>
  <footer :class="$style.footer" class="divider">
    <div :class="$style.links">
      <a href="/" alt="Home">Home</a>
      <a href="/portfolio/" alt="Portfolio">Portfolio</a>
      <a href="/articles/" alt="Articles">Articles</a>
      <a href="/awards/" alt="Awards">Awards</a>
      <a href="/press/" alt="Press">Press</a>
      <a href="/#contact" alt="Contact">Contact</a>
    </div>
    <span :class="$style.statement">Built from scratch with care.</span>
    <span :class="$style.copyright">&copy; Jason Bejot</span>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style module lang="css">
  .footer {
    width: 100%;
    display: block;
    padding: 3rem 0;
    font-size: 0.9rem;
    text-align: center;
  }

  .statement, .copyright, .links {
    display: block;
    margin-top: 1.5rem;
  }

  .links {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 1.4rem;
    a { color: var(--color-text-dark); }
  }

  .copyright {
    text-transform: uppercase;
  }
</style>
