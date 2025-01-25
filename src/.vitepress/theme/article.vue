<template>
  <div class="widthConstrained">
    
    <section :class="$style.hero">
      <h1 v-if="!!$slots.title"><slot name="title">Title</slot></h1>
      <p v-if="!!$slots.subtitle" :class="$style.subtitle"><slot name="subtitle">Subtitle</slot></p>
      <p v-if="!!$slots.date" :class="$style.date"><slot name="date">Date</slot></p>
    </section>

    <section :class="$style.content">
      <Content />
    </section>

    <section :class="$style.author">
      <h2>About the author</h2>
      <p>Jason Bejot is a leader of product design and strategy specializing in conversational AI. He’s a UX designer with a computer science degree with 19 years of experience having worked at Disney, Amazon, and Rocket Companies. Jason has received three patents in AR and VR and has received 15 awards for his engineering and design work.</p>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'Article'
  }
</script>

<style module lang="css">
  
  .hero {
    margin-top: 3rem;

    h1 {
      text-align: left;
      font-weight: 400;
      letter-spacing: normal;
      font-size: 2rem;
      text-transform: none;
      margin: 0;
    }
  }

  .content, .author {
    margin-top: 3rem;

    h2 {
      text-align: left;
      margin: 3rem 0 0 0;
      line-height: 1.5em;
      font-weight: 500;
      font-size: 1.3rem;
    }
  }

  .content {

    img { width: 100%; }

    p { margin: 1.3rem 0; }

    ol { margin-left: 1.8rem; }

    li { margin: 1.3rem 0; }

    hr {
      border-top: solid 1px #c9d0d9;
      width: 70%;
      margin: 2rem auto;
    }

    blockquote {
      text-align: center;
      font-style: italic;
      padding: 0 2rem;

      p { margin: 1.3rem 0; }
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

  .author {
    border-top: dashed 1px #c9d0d9;
  }
  
</style>
