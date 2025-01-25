<template>

  <section :class="$style.callouts" v-if="pressTotal || awardsTotal">
    
    <div :class="$style.press" v-if="pressTotal">
      <span :class="$style.count">{{ pressTotal }}</span>
      <a :class="$style.description" :href="pressURL">Article{{ pressTotal > 1 ? 's' : '' }}</a>
    </div>
    
    <div :class="$style.awards" v-if="awardsTotal">
      <span :class="$style.count">{{ awardsTotal }}</span>
      <a :class="$style.description" :href="awardsURL">Award{{ awardsTotal > 1 ? 's' : '' }}</a>
    </div>

  </section>

</template>

<script>
  export default {
    name: 'Callouts',

    props: [
      'pressTotal',
      'pressURL',
      'awardsTotal',
      'awardsURL'
    ]
  }
</script>

<style module lang="css">
  .callouts {
    margin-top: 1.3rem;
    display: flex;
    margin-bottom: 4rem;
    justify-content: space-around;
  }

  .awards, .press {
    margin: 0;

    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 1rem;
    justify-items: center;
  }

  .count {
    font-size: 2rem;
    font-weight: 500;
  }
</style>
