<template>
  <div>
    <img :src="imageUrl" />
    <p>{{article.title}}</p>
    <p>{{article.subtitle}}</p>
    <p><a :href="articleUrl">Read on Medium</a></p>
  </div>
</template>

<script>
  export default {
    name: 'MediumArticle',

    props: ['article'],

    computed: {
      imageUrl: function(){
        return "https://cdn-images-1.medium.com/max/2000/" + this.article.imageId;
      },
      articleUrl: function(){
        return "http://medium.com/@jasonbejot/" + this.article.slug;
      }
    }
  }
</script>

<style lang="css">

</style>
