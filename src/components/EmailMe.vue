<template>
  <section :class="$style.hello">
    <div>
      <p class="text-large"><slot name="top">I'm available for new work.</slot></p>
      <p class="text-small"><slot name="bottom"></slot></p>
    </div>
    <div :class="$style.emailMe">
      <a href="mailto:hello@jasonbejot.com">Email Me</a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'EmailMe'
  }
</script>

<style module lang="css">
  .hello {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    column-gap: 4rem;
    text-align: right;
    row-gap: 1rem;
  }

  @media all and (max-width: 680px) {
    .hello {
      flex-flow: column nowrap;
      text-align: center;
    }
  }

  .hello p { margin: 0 }

  .hello .emailMe a {
    display: block;
    margin: 0;
    background-color: #f4f4f4;
    padding: 2rem;
    color: var(--color-text-dark);
    border-radius: 0.32rem;
    box-shadow:
      inset 1px 1px 1px 0 rgb(255, 255, 255),
      inset -1px -1px 1px 0 rgba(0, 0, 0, .15),
      .444584px .444584px .628737px -1px rgba(0, 0, 0, .26),
      1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, .247),
      2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, .23),
      5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, .192),
      10px 10px 21.2132px -3.75px rgba(0, 0, 0, .056),
      -.5px -.5px 0 0 rgb(0 0 0 / 5%);
  }

  .hello .emailMe a:hover {
    text-decoration: none;
    background-color: #e7e7e7;
    transition: background-color 0.3s;
  }
</style>