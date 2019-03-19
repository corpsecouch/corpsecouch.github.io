<template>
  <PortfolioPage>
    <template v-slot:title>Filmmaking for Virtual Reality</template>
    <template v-slot:content>
      <h2>What is it?</h2>
      <p>In 2014, virtual reality (VR) was at an inflection point. The technology was mature enough and had gained enough attention from a-list filmmakers to consider it a serious storytelling medium. Disney Studios created VR technology and experiences to showcase the potential of VR for theatrical-level storytelling.</p>
      <h2>Why do it?</h2>
      <p>Being a filmmaking innovator nearly century, Disney Studios was leading the theatrical VR conversation amongts filmmakers.</p>
      <h2>What was my role?</h2>
      <p>I was the UX director driving R&amp;D, design and managing a small of senior designers.</p>
      <h2>What did I do?</h2>
      <p>I worked closely with filmmakers, VR experts, studio executives, engineers and my design team to deliver a groundbreaking, fully immersive, multi-platform VR experience across. I also got hands-on with research and interaction design.</p>
      <h2>What was the outcome?</h2>
      <p>Our team hosted a VR conference at the Disney Studio Lot where we debuted our VR experience along with showcases from VR technology companies and other major film studios. Our experience was hand delivered to a-list filmmakers, creatives and executives across multiple film studios.</p>
      <h2>What did the process look like?</h2>
      <p>This project is covered under an NDA. Please <router-link :to="{ name: 'contact' }">contact me</router-link> if you'd like to do a portfolio review.</p>
    </template>
  </PortfolioPage>
</template>

<script>
  import PortfolioPage from 'components/PortfolioPage'

  export default {
    name: 'DisneyMovieSlate',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="scss">

</style>
