<template>
  <Page>

    <!--<p>Experience design that looks around corners.</p>-->

    <BigMasthead>
      Some really cool quote goes here
    </BigMasthead>

    <ContentNavs />

    <section id="content" class="content">

      <section id="left-column">
        <p>I always knew I wanted to positively impact people's lives. Even my motivation for getting a Computer Science degree was to entertain and enrich lives by making games.</p>
        <p>Growing up on a large family farm, I filled my days with immersive storytelling by playing RPGs and running D&amp;D campaigns. Once I was in college, I realized I had a talent for understanding how people expected things to work and gravitated towards HCI.</p>
        <p>After spending a few years as an engineering lead I made the switch to experience design. I've been able to create things that delight millions of people and drive business (of course). Combined with my science and technical background, I've found a passion for driving innovation and invention through the lens of the experience. As a result I was elected to the innovation council at Phenomblue, received three Disney Inventor Awards, a patent, launched a product incubator within Disney Studios and was handpicked by the Disney Studios CTO to spearhead a Studio-wide innovation initiative.</p>
        <p>In a previous life I was musician writing and playing spacy guitar riffs in The Answer Team, touring and recording two albums. Then I was a biker tempting fate on the treacherous, twisty Southern California canyon roads.</p>
        <p>I currently live in Seattle with my wife and daughter.</p>
      </section>

      <section id="right-column">
        <h2>Patents</h2>
        <ul id="patents">
          <li>Patent #1</li>
          <li>Patent #2</li>
          <li>Patent #3</li>
        </ul>

        <h2>Recognition</h2>
        <ul id="awards">
          <li>Webby</li>
          <li>FWA</li>
          <li>W3</li>
          <li>Disney Inventor</li>
          <li>Best of Disney</li>
          <li>Microsoft PhizzPop Challenge</li>
        </ul>

        <h2>News Coverage</h2>
        <ul id="news">
          <li>TechCrunch</li>
          <li>Venturebeat</li>
          <li>The Verge</li>
          <li>Ars Technica</li>
          <li>Lifehacker</li>
          <li>CNet</li>
          <li>PCMag</li>
          <li>Slate</li>
          <li>CNBC</li>
          <li>Washington Post</li>
          <li>TechRadar</li>
        </ul>
      </section>

    </section>
  </Page>
</template>

<script>
  // https://www.bestfolios.com/portfolio/dougseidman

  import Page from 'components/PageTemplate';
  import BigMasthead from 'components/BigMasthead';
  import ContentNavs from 'components/ContentNavs';

  export default {
    name: 'About',

    components: {
      Page,
      BigMasthead,
      ContentNavs
    }

  }
</script>

<style scoped lang="scss">

  #content {
    display: grid;
    grid-template-columns: [left] 1fr [right] 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 3rem;

    //width: 80%;
    //margin: auto;
    padding: 3rem 0;
    @include screen-small {
      //width: 95%;
      grid-template-columns: auto;
    }
  }

  #left-column {
    grid-column: left;
  }

  #right-column {
    grid-column: right;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  h2 {
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;

    /*&:nth-of-type(1n+2) {
      margin-top: 1.5rem;
    }*/
  }

  * + h2 {
    margin-top: 1.5rem;
  }

  #news {
    li {
      display: inline-block;
      margin-right: 0.3rem;

      &:nth-of-type(1n+2)::before {
        content: '|';
        padding-right: 0.5rem;
      }
    }
  }

</style>
