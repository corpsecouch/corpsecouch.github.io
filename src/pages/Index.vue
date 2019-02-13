<template>
  <main>
    <Intro></Intro>
    <DisneyExperience class="text-light"></DisneyExperience>
    <AceMetrixExperience class="text-light"></AceMetrixExperience>
    <PhenomblueExperience class="text-light"></PhenomblueExperience>
    <AboutMe class="text-light"></AboutMe>
  </main>
</template>

<script>
  import Intro from 'components/Intro';
  import AboutMe from 'components/AboutMe';
  import DisneyExperience from 'components/DisneyExperience';
  import AceMetrixExperience from 'components/AceMetrixExperience';
  import PhenomblueExperience from 'components/PhenomblueExperience';

  export default {
    name: 'Index',

    components: {
      Intro,
      AboutMe,
      DisneyExperience,
      AceMetrixExperience,
      PhenomblueExperience,
    }

  }
</script>

<style lang="scss">
  @import "styles/_global";

  .text-light {
    section {
      color: rgba(255, 255, 255, 0.6);  
    }

    header {
      color: rgba(255, 255, 255, 1);
    }
  }

  main {
    /*> *:nth-child(2n) {

    }

    > *:nth-child(2n+2) {
      background-color: $color-backgroundgrey;
    }

    > *:nth-child(3) {
      background-color: $color-19-korea;
    }

    > *:nth-child(5) {
      background-color: $color-19-plasticpink;
    }

    */
  }


</style>
