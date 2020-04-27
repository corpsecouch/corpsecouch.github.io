<template>
  <section>
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionTemplate'
  }
</script>

<style scoped lang="scss">
  section {
    /*padding: 6em 0;*/
    padding: 6em 0 6em 6em;
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    /*margin: 0 auto;*/

    /*max-width: 990px;
    @include screen-xl { width: 940px; }
    @include screen-lg { width: 720px; }
    @include screen-md { width: 86%; }
    @include screen-sm { width: 90%; }*/

    @include screen-xl { width: 50%; }
    @include screen-lg { width: 50%; }
    @include screen-md { width: 86%; }
    @include screen-sm { width: 90%; }
  }
</style>
