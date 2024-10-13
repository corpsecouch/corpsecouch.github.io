<template>
  <PortfolioPage nda="true" pcolor="chartreuse">
    <template v-slot:title>Filmmaking for VR</template>
    <template v-slot:subtitle>Pushing the boundaries of theatrical storytelling</template>
    <template v-slot:year>2014</template>
    <template v-slot:company>Walt Disney Studios</template>
    <template v-slot:hero>
      <img src="@assets/portfolio/disney/vr/thumb.png">
    </template>

    <!--<template v-slot:content>
      <p>In 2014, virtual reality (VR) was at an inflection point. The technology was mature enough and had gained enough attention from a-list filmmakers to consider it a serious storytelling medium. Disney Studios created VR technology and experiences to showcase the potential of VR for theatrical-level storytelling.</p>
      <p>Being a filmmaking innovator nearly century, Disney Studios was leading the theatrical VR conversation amongts filmmakers.</p>
      <p>Our team hosted a VR conference at the Disney Studio Lot where we debuted our VR experience along with showcases from VR technology companies and other major film studios. Our experience was hand delivered to a-list filmmakers, creatives and executives across multiple film studios.</p>
      <p>I was the UX director driving R&amp;D, design and managing a small of senior designers.</p>
      <p>I worked closely with filmmakers, VR experts, studio executives, engineers and my design team to deliver a groundbreaking, fully immersive, multi-platform VR experience across. I also got hands-on with research and interaction design.</p>
    </template>-->

      <!-- <template v-slot:hero>
        <img src="@assets/portfolio/disney/vr/vr.png">
      </template> -->

    <template v-slot:challenge>
      <p>The challenge was to educate and inspire A-list filmmakers and studio executives on the potential of VR and how it could be used to tell theatrical-level stories.</p>
    </template>

    <template v-slot:process>
      <p>VR reached an inflection point &mdash; the tech was just entering the consumer space and it was mature enough that filmmakers started to consider it a serious storytelling medium.</p>
      <p>Disney Studios has been a filmmaking innovator for nearly a centry. I worked closely with filmmakers, studio executives, engineers, and my design team to keep Disney at the forefront of theatrical storytelling innovation.</p>
    </template>

    <template v-slot:outcome>
      <p>We delivered groundbreaking, multi-platform VR experiences that showcased VR's potential for theatrical-level filmmaking and storytelling along with an end-to-end product experience spanning physical, mobile, web, and of course, VR.</p>
      <p>We also hosted a VR conference on the Disney Studio Lot where we showcased our VR experiences along with VR from other major film studios.</p>
    </template>

    <template v-slot:role>
      <p>I owned the experience design, leading the cross-functional R&amp;D team and managing a team of senior designers.</p>
    </template>

  </PortfolioPage>
</template>

<script>
  import PortfolioPage from '@components/PortfolioPage'

  export default {
    name: 'DisneyVR',

    components: {
      PortfolioPage
    }
  }
</script>

<style scoped lang="css">

</style>
