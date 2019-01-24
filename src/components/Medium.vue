<template>
  <div>
    <h3>medium</h3>
    <MediumArticle
      v-for="article in articles"
      v-bind:key="article.id"
      v-bind:article="article"></MediumArticle>
  </div>
</template>

<script>
  import MediumArticle from 'components/MediumArticle'

  export default {
    name: 'Medium',

    components: {
      MediumArticle
    },

    mounted () {
      const url = 'http://jb-api-jasonbejot.7e14.starter-us-west-2.openshiftapps.com/medium/posts';
      const max = 3;

      this.$http.get(url).then(
        res => {
          this.articles = _.map(
            _.take(res.body.posts, max),
            function(post){
              return {
                slug: post.uniqueSlug,
                imageId: post.virtuals.previewImage.imageId,
                title: post.title,
                subtitle: post.content.subtitle
              }
            }
          );
        },
        err => {
          console.error(err);
        }
      )
    },

    data () {
      return {
        articles: []
      }
    }
  }
</script>

<style lang="css">

</style>
