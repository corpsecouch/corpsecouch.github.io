<template>
  <ExperienceTemplate src="https://picsum.photos/800/400/?random">
    <template v-slot:role>
      UX Lead
    </template>
    <template v-slot:title>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis.
    </template>
    <template v-slot:details>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis, fringilla posuere risus. Mauris ornare mattis arcu, bibendum sodales libero elementum et. Nam mattis varius tortor ac imperdiet. Aliquam egestas, sem at consequat vestibulum, urna diam fermentum odio.
    </template>
  </ExperienceTemplate>
</template>

<script>
  import ExperienceTemplate from 'components/ExperienceTemplate'

  export default {
    name: 'AmazonExperience',
    components: {
      ExperienceTemplate
    }
  }
</script>

<style scoped lang="css">

</style>
