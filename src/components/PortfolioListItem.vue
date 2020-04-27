<template>
  <article v-on:click="readMore">
    <img :src="imageUrl">
    <div class="contents">
      <span class="title"><slot name="title">Title</slot></span>
      <span class="description"><slot name="description">Description</slot></span>
      <!--<span class="company"><slot name="company">Company</slot></span>-->
      <!--<a>Read more</a>-->
    </div>
  </article>
</template>

<script>
  export default {
    name: 'PortfolioListItem',
    props: ['routeName', 'imageUrl'],
    methods: {
      readMore: function() {
        this.$router.push({ name: this.routeName });
      }//,
      //loadImage: function(url) {
        //console.log(url);
        //console.log(import(/* webpackMode: "eager" */ `${url}`));
        //return require(url);
      //}
    }
  }
</script>

<style scoped lang="scss">

  article {
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.29);
    cursor: pointer;
    background-color: white;

    > img {
      width: 100%;
      background-color: grey;
      opacity: 1;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }

    > .contents {
      margin: 0;
      padding: 1rem 1rem 1.8rem 1rem;

      > span {
        display: block;
        width: 100%;
        text-align: center;
      }

      * + * {
        margin-top: 1rem;
      }

      *:first-child {
        margin-top: 0;
      }

      a {
        display: inline-block;
        margin-top: 0.6rem;
        font-size: 0.8rem;
        text-transform: uppercase;
      }

      .company {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: $color-grey;
        margin-bottom: 0.5rem;
      }

      .title {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.2;
      }

      .description {
        line-height: 1.3;
        font-size: 0.9rem;
        font-weight: 300;
      }
    }
  }
</style>
