<template>
  <div class="widthConstrained">

    <section :class="$style.title">
      <div :class="$style.me"><img src="/assets/photos/photo1-circle.jpg"></div>
      <div :class="$style.words">
        <h1><slot name="role">Role Title</slot></h1>
        <h2><slot name="company">Company Name</slot></h2>    
      </div>
    </section>

    <section :class="$style.video">
      <Video :src="$props.video"></Video>
    </section>

    <section :class="$style.content">
      <Content />
    </section>

  </div>
</template>

<script>
  export default {
    name: 'Application',
    props:['video']
  }
</script>

<style module lang="css">

  .title {
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 0.1fr 1fr 1.5fr 0.1fr;
    column-gap: 3rem;
    align-content: center;
    justify-content: center;

    img {
      width: 100%;
      border: dashed grey 1px;
      border-radius: 100%;
      padding: 0.3rem;
    }

    .me {
      grid-column-start: 2;
    }

    .words {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      row-gap: 2rem;

      h1, h2 {
        text-align: left;
        margin: 0;
      }
    }
  }

  .content {
    margin-top: 3rem;

    h2 {
      text-align: left;
      margin: 3rem 0 0 0;
      line-height: 1.5em;
      font-weight: 500;
      font-size: 1.3rem;
    }

    img { width: 100%; }

    p { margin: 1.3rem 0; }

    em { font-style: italic; }

    strong { font-weight: bold; }

    ol { margin-left: 1.8rem; }

    li { margin: 1.3rem 0; }

    hr {
      border-top: solid 1px #c9d0d9;
      width: 70%;
      margin: 2rem auto;
    }

    blockquote {
      font-style: italic;
      font-weight: 300;
      margin: 2rem 0;
      padding: 0.5rem 2rem;
      border-left: solid 2px var(--color-background-dark);

      p { margin: 0; }
    }

    figure {
      margin: 3rem 0;

      img {
        width: inherit;
        max-width: 100%;
        display: block;
        margin: 0 auto;
      }

      figcaption {
        text-align: center;
        margin-top: 1rem;
        font-size: 0.8rem;
      }
    }
  }
  
</style>
