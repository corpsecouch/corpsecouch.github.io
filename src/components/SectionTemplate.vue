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
    padding: 6em 0;
    color: rgb(51, 51, 51);
    width: 100%;
  }

  .container {
    box-sizing: border-box;
    max-width: 990px;
    margin: 0 auto;

    @include screen-xl {
      width: 940px;
    }

    @include screen-lg {
      width: 720px;
    }

    @include screen-md {
      width: 86%;
    }

    @include screen-sm {
      width: 90%;
    }
  }
</style>
