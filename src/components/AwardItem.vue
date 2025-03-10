<template>
  
  <div :class="$style.item">

    <div :class="$style.icon">
      <SVGAwardOriginal />
    </div>

    <div :class="$style.content">
      <span><slot name="award"></slot> – <slot name="for"></slot></span>
      
      <div :class="$style.context">
        <span :class="$style.org">
          <template v-if="url">
            <a v-bind:href="url" target="_blank"><slot name="org"></slot></a>
          </template>
          <template v-else-if="!url">
            <slot name="org"></slot>
          </template>
        </span>

        <span :class="$style.when"><slot name="when"></slot></span>
      </div>

    </div>

  </div>
</template>

<script>
  import SVGAwardOriginal from './SVGAwardOriginal.vue';

  export default {
    name: 'AwardItem',
    components: { SVGAwardOriginal },
    props: [ 'url' ]
  }
</script>

<style module lang="css">
  .item {
    display: inline-flex;
    flex-direction: row;
    column-gap: 1rem;
    background-image: linear-gradient(to top, #ffd700, #ffd918, #ffdc25, #ffde30, #ffe039);
    border-radius: 8px;
    padding: 6px 12px;
    box-shadow: 0 8px 12px -7px rgba(0, 0, 0, 0.2);
  }

  .item a {
    color: var(--color-darktext);
    text-decoration: underline;
  }

  .icon {
    width: 2.5rem;
    flex-shrink: 0;
  }

  .context {
    font-style: italic;
    font-size: 0.7rem;
    margin-top: 0;
    line-height: 1rem;
  }

  .when::before {
    content: ' – ';
  }
</style>
