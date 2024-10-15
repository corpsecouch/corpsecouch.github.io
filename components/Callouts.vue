<template>

  <section id="callouts" v-if="pressTotal || awardsTotal">
    
    <div class="press" v-if="pressTotal">
      <span class="count">{{ pressTotal }}</span>
      <a class="description" :href="pressURL">Article{{ pressTotal > 1 ? 's' : '' }}</a>
    </div>
    
    <div class="awards" v-if="awardsTotal">
      <span class="count">{{ awardsTotal }}</span>
      <a class="description" :href="awardsURL">Award{{ awardsTotal > 1 ? 's' : '' }}</a>
    </div>

    <!-- <div class="press" v-if="pressTotal">
      <div class="content">
        <div class="left">
          <div class="icon"><SVGNews /></div>
        </div>
        <div class="right">
          <span class="count">{{ pressTotal }}</span>
          <a class="description" :href="pressURL">Article{{ pressTotal > 1 ? 's' : '' }}</a>
        </div>
      </div>
    </div>
    
    <div class="awards" v-if="awardsTotal">
      <div class="content">
        <div class="left">
          <div class="icon"><SVGAwardOriginal /></div>
        </div>
        <div class="right">
          <span class="count">{{ awardsTotal }}</span>
          <span class="description">Award{{ awardsTotal > 1 ? 's' : '' }}</span>
        </div>
      </div>
    </div> -->

  </section>

</template>

<script>
  export default {
    name: 'Callouts',

    components: {},

    props: [
      'pressTotal',
      'pressURL',
      'awardsTotal',
      'awardsURL'
    ]
  }
</script>

<style scoped lang="css">
  #callouts {
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
