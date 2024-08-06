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

    /*data () {
      return {
        menuHidden: true
      }
    }*/

    /*methods: {
      readMore: function() {
        this.$router.push({ name: this.routeName });
      }
    }*/

  }
</script>

<style lang="scss">
  @import "styles/_global";

  header {
    /*width: 100vw;
    position: absolute;
    z-index: $z-menu-button;
    display: flex;
    justify-content: center;*/
    /*position: fixed;
    top: 0;*/
    //background-color: $color-background-dark;

    /*&.transparent {
      background-color: transparent;
    }*/
  }

  /*main {
    background-color: $color-background-light;
  }*/

  #menu-button {
    display: block;
    width: 64px;
    height: 64px;
    //color: $color-text-light;
    cursor: pointer;
    //border: solid 1px $color-text-dark;
    * {
      padding: 0.8rem;
    }

    .open {
      fill: $color-text-light;
      width: 100%;
      height: 100%;
    }

    .close {
      stroke: $color-text-dark;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-miterlimit: 10;
      width: 100%;
      height: 100%;
    }
  }

  #menu-screen {
    position: fixed;
    z-index: $z-menu;
    width: 100vw;
    height: 100vh;
    background-color: $color-background-light;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease;

    &.hidden {
      opacity: 1;
      visibility: visible;
    }
  }

  /*#page {
    margin: 0 auto;
    width: 100%;
  }*/

  main {
    width: 100%;
    display: block;
  }

  footer {
    width: 100%;
    display: block;
    //background-color: $color-background-dark;
    padding: 3rem 0;
    font-size: 0.9rem;
    text-align: center;

    /*.links,
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
    }*/

    #copyright {
      //color: $color-text-light;
      //margin-top: 3rem;
      text-transform: uppercase;
      display: block;
      margin-top: 1.5rem;
      //@include font-raleway;
      //letter-spacing: 0.2em;
    }
  }
</style>
