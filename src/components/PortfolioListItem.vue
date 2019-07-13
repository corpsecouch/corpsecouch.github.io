<template>
  <li v-on:click="readMore">
    <img :src="imageUrl">
    <span class="contents">
      <span class="company"><slot name="company">Company</slot></span>
      <span class="title"><slot name="title">Title</slot></span>
      <span class="description"><slot name="description">Description</slot></span>
      <a>Read more</a>
    </span>
  </li>
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
  li {
    width: 260px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;

    > img {
      width: 100%;
      height: 10rem;
      background-color: grey;
    }

    > .contents {
      margin: 0;
      padding: 1rem;

      > span {
        display: block;
        width: 100%;
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
      }

      .title {
        font-size: 1.2rem;
        font-weight: 500;
      }

      .description {
        padding-top: 0.5rem;
      }
    }
  }
</style>
