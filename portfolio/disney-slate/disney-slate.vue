<template>
  <PortfolioPage nda="true">
    <template v-slot:title>Movie Slate</template>
    <template v-slot:company>Walt Disney Studios</template>
    <template v-slot:year>2016</template>
    <template v-slot:hero>
      <img src="@assets/portfolio/disney/slate/preview.png">
    </template>

    <!--<template v-slot:hero>
      <img src="./full.png">
    </template>-->

    <!--<template v-slot:content>
      <h2>What is it?</h2>
      <p>The Disney Movie Slate is a new tool that studio executives use to plan the release of movies and track their production.</p>
      <h2>Why do it?</h2>
      <p>Planning movie releases is a highly guarded secret and is critical to success of the studio. If the wrong release date is chosen it can cost millions of dollars at the box office. At the scale of Disney, that can mean one hundred million dollars on opening weekend and hundreds of millions more over the long-tail of the movie. Disney Studios decided to innovate their tools and processes to ensure they made the best planning decisions for their releases over the forseeable future.</p>
      <h2>What was my role?</h2>
      <p>I was the UX director with a small team of senior UX designers.</p>
      <h2>What did I do?</h2>
      <p>I worked closely with executives from Studio Technology, Theatrical Production, my design team and product to drive the creation of a new product and physical technology solution for planning movie releases across the entire family of Disney Studios including Marvel Studios, Lucasfilm, Pixar, Disney Animation and Disney Live Action.</p>
      <h2>What did the process look like?</h2>
      <p>This project is covered under an NDA. Please <router-link :to="{ name: 'contact' }">contact me</router-link> if you'd like to do a portfolio review.</p>
    </template>-->

    <template v-slot:challenge>
      <p>Planning movie releases is a highly guarded secret and is critical to success of the studio. If the wrong release date is chosen it can cost millions of dollars at the box office. At the scale of Disney, that can mean one hundred million dollars on opening weekend and hundreds of millions more over the long-tail of the movie. Disney Studios decided to innovate their tools and processes to ensure they made the best planning decisions for their releases over the forseeable future.</p>
    </template>

    <template v-slot:process>
      <p>I worked closely with studio executives and product team to lead my design team to dive deep into the needs, the process, the expections, and the technology needed to plan the release and production of mulitple movies simultaneously.</p>
    </template>

    <template v-slot:outcome>
      <p>We launched a new tool that studio executives use to plan the release of movies and track their production. This replaced the legacy movie slate that had been used for decades.</p>
    </template>

    <template v-slot:role>
      <p>I owned the experience design, leading a small team of senior designers.</p>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage'

  export default {
    name: 'DisneyMovieSlate',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="css">

</style>
