<template>
  <div id="page">
    <header>Jason Bejot</header>

    <main>
      <slot></slot>
    </main>

    <footer>
      <div class="container">
        <div class="links">
          <span class="site">
            <router-link :to="{ name: 'about' }" alt="About">About</router-link>
            <router-link :to="{ name: 'work' }" alt="Work">Work</router-link>
            <router-link :to="{ name: 'contact' }" alt="Contact">Contact</router-link>
          </span>
          <span class="social">
            <router-link :to="{ name: 'about' }" alt="Twitter">twitter</router-link>
            <router-link :to="{ name: 'work' }" alt="LinkedIn">linkedin</router-link>
            <router-link :to="{ name: 'contact' }" alt="Medium">medium</router-link>
          </span>
        </div>
        <div class="copyright">
          &copy; Jason Bejot
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

  export default {
    name: 'PageTemplate',

    components: { }

  }
</script>

<style lang="scss">
  @import "styles/_global";

  #page {
    margin: 0 auto;
    width: 100%;
  }

  header {
    width: 100%;
    display: block;
    background-color: $color-background-dark;
    padding: 2rem 0;
    text-align: center;
    color: $color-text-light;
    font-size: 1.3rem;//1.625rem;
    @include font-raleway;
    font-size: 200;
    letter-spacing: 0.2em; // 20%-ish?
    text-transform: uppercase;
  }

  main {
    width: 100%;
    display: block;
  }

  footer {
    width: 100%;
    display: block;
    background-color: $color-background-dark;
    padding: 3rem 0;

    .container {
      box-sizing: border-box;
      margin: 0 auto;
      /*@include screen-xl { width: 50%; }
      @include screen-lg { width: 50%; }
      @include screen-md { width: 86%; }
      @include screen-sm { width: 90%; }*/
      width: 80%;
    }

    .links,
    .site,
    .social {
      display: flex;
      flex-wrap: no-wrap;
    }

    .links {
      justify-content: space-between;
      text-transform: uppercase;
    }

    .site > *,
    .social > * {
      display: inline-block;
      margin-right: 2rem;
      color: $color-text-link;

      &:last-child {
        margin: 0;
      }
    }

    .copyright {
      text-align: center;
      color: $color-text-light;
      margin-top: 3rem;
      text-transform: uppercase;
      @include font-raleway;
      letter-spacing: 0.2em;
    }
  }
</style>
