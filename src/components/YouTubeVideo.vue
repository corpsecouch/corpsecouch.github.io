<template>
  <div class="youtube">
    <iframe :src="src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'YouTubeVideo',
    props: ['src'],
  }
</script>

<style scoped lang="scss">
.youtube {
  position:relative;padding-top:56.25%;
  background-color: $color-text-dark;
}

iframe {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>
