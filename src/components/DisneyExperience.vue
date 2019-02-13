<template>
  <ExperienceTemplate src="https://picsum.photos/800/400/?random">
    <template v-slot:role>
      Sr. UX Architect + Lead
    </template>
    <template v-slot:title>
      From October 2013 to July 2017, I led UX design for Walt Disney Studios Technology.
    </template>
    <template v-slot:details>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis, fringilla posuere risus. Mauris ornare mattis arcu, bibendum sodales libero elementum et. Nam mattis varius tortor ac imperdiet. Aliquam egestas, sem at consequat vestibulum, urna diam fermentum odio.
    </template>
  </ExperienceTemplate>
</template>

<script>
  import ExperienceTemplate from 'components/ExperienceTemplate'

  export default {
    name: 'DisneyExperience',
    components: {
      ExperienceTemplate
    }
  }
</script>

<style scoped lang="scss">
  & {
    background-color: $color-backgroundgrey;
  }
</style>
