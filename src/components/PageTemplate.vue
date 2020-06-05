<template>
  <div id="page">

    <!--<header>

      <span id="menu-button" v-on:click="menuHidden = !menuHidden">
        <svg class="open" v-if="menuHidden" viewBox="0 0 100 80">
          <rect y="0"   width="100"   height="10" rx="6"></rect>
          <rect y="30"  width="100"   height="10" rx="6"></rect>
          <rect y="60"  width="100"   height="10" rx="6"></rect>
        </svg>

        <svg class="close" v-if="!menuHidden" viewBox="0 0 40 40">
          <line x1="0" y1="0" x2="40" y2="40"></line>
          <line x1="40" y1="0" x2="0" y2="40"></line>
        </svg>
      </span>

    </header>

    <div id="menu-screen" :class="{ hidden: !menuHidden }">
      <router-link :to="{ name: 'index' }">Work</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>-->

    <main>
      <slot></slot>
    </main>

    <footer class="divider">
      <!--<div class="links">
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
      </div>-->
      <!--<div class="copyright">
        &copy; Jason Bejot
      </div>-->
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
