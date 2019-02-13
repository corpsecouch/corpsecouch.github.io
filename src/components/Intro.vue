<template>
  <SectionTemplate id="section">
    <div>
      <header>Hi! My name is Jason and I'm currently leading design on Amazon's Alexa Identity team.</header>
      <p>Before taking a role in Amazon in July 2017, I led the UX design team at <a href="http://thewaltdisneycompany.com" target="_blank">Walt Disney Studios</a>. Check out my <a href="http://linkedin.com/in/jasonbejot" target="_blank">LinkedIn</a> profile to learn more. Follow me on <a href="http://twitte.com/jasonbejot" target="_blank">Twitter</a> for my random thoughts or read my articles on <a href="http://medium.com/@jasonbejot" target="_blank">Medium</a>.</p>
    </div>
  </SectionTemplate>
</template>

<script>
  import SectionTemplate from 'components/SectionTemplate'

  export default {
    name: 'Intro',
    components: {
      SectionTemplate
    }
  }
</script>

<style scoped lang="scss">
  #section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div {
    @include screen-xl {
      width: 70%;
      margin: 0 auto;
    }

    @include screen-lg {
      width: 70%;
      margin: 0 auto;
    }

    @include screen-md { width: 90%; }

    @include screen-sm { width: 100%; }

    header {
      @include font-raleway;
      font-size: 2.4em;
      font-weight: 300;
      line-height: 1.2;

      + p {
        margin-top: 1em;
      }
    }

    p {
      @include font-raleway
      font-size: 1.2em;
      line-height: 1.6;
    }

    a {
      color: rgb(247, 72, 82);
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;
    }
  }
</style>
