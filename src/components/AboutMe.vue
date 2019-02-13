<template>
  <SectionTemplate>
    <div>
      <header>About Me</header>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc enim est, porttitor ac nunc quis, fringilla posuere risus. Mauris ornare mattis arcu, bibendum sodales libero elementum et.</p>
      <p>Nam mattis varius tortor ac imperdiet. Aliquam egestas, sem at consequat vestibulum, urna diam fermentum odio, eget congue tellus sem nec enim. Suspendisse finibus turpis arcu, ac porta ante cursus id. Ut aliquam lobortis dictum. Curabitur commodo aliquam elit sit amet viverra. Sed tristique dui in tincidunt malesuada.</p>
      <p>Mauris vehicula fringilla neque, eu porta risus venenatis ac. Pellentesque ultricies maximus sagittis. Morbi tortor ante, fermentum eu vehicula in, pretium non leo. Cras ornare urna eu arcu dignissim finibus.</p>
    </div>
  </SectionTemplate>
</template>

<script>
  import SectionTemplate from 'components/SectionTemplate'

  export default {
    name: 'AboutMe',
    components: {
      SectionTemplate
    }
  }
</script>

<style scoped lang="scss">
  div {
    @include screen-xl {
      width: 50%;
      margin: 0 auto;
    }

    @include screen-lg {
      width: 70%;
      margin: 0 auto;
    }

    @include screen-md { width: 90%; }

    @include screen-sm { width: 100%; }
  }

  header {
    @include font-raleway;
    font-weight: 500;
    text-transform: uppercase;

    + p {
      margin-top: 0.6em;
    }
  }

  p {
    @include font-raleway;
    line-height: 1.3;
    font-size: 0.9em;

     + p {
       margin-top: 1em;
     }
  }
</style>
