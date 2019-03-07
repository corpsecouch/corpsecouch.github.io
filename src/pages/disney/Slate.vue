<template>
  <main>
    <section>
      <div class="container">
        <div class="content">
          <router-link to="/">Back</router-link>
          <header>Disney Studios Slate</header>
          
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'DisneySlate',
  }
</script>

<style lang="scss">
  @import "styles/_global";
</style>

<style scoped lang="scss">
  p, ul {
    padding-top: 1.8em;
    line-height: 1.5em;
  }

  ul {
    margin-left: 1em;
  }

  header {
    font-size: 2.4em;
    font-weight: 300;
    line-height: 1.2;
    padding-bottom: 1em;

    + p {
      padding: 0;
    }
  }

  main {
    padding: 10em 0;
  }

  section {
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    max-width: 990px;
    margin: 0 auto;

    @include screen-xl { width: 940px; }
    @include screen-lg { width: 720px; }
    @include screen-md { width: 86%; }
    @include screen-sm { width: 90%; }
  }

  .content {
    margin: 0 auto;
    @include screen-xl { width: 70%; }
    @include screen-lg { width: 70%; }
    @include screen-md { width: 90%; }
    @include screen-sm { width: 100%; }
  }
</style>
