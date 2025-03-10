<template>
  <div :class="$style.youtube">
    <iframe :src="src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'YouTubeVideo',
    props: ['src'],
  }
</script>

<style module lang="css">
  .youtube {
    position:relative;
    padding-top:56.25%;
    background-color: var(--color-text-dark);
    margin-top: 1rem;
  }

  .youtube:first-child { margin-top: 0; }

  .youtube iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
</style>
