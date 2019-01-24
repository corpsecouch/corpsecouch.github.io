<template>
  <img :src="iconSrc" v-on:click="navigateTo">
</template>

<script>
  export default {
    name: 'SocialIcon',

    props: ['iconType'],

    computed: {
      iconSrc: function() {
        return "static/icon_" + this.iconType + ".svg";
      }
    },

    methods: {
      navigateTo: function(event) {
        console.log('navigateTo:' + this.iconType);
        var url;
        switch(this.iconType){
          case 'twitter':
            url = 'http://twitter.com/jasonbejot';
            break;
          case 'goodreads':
            url = 'https://www.goodreads.com/user/show/37984300-jason';
            break;
          case 'medium':
            url = 'https://medium.com/@jasonbejot';
            break;
          case 'linkedin':
            url = 'https://www.linkedin.com/in/jasonbejot/';
            break;
        }
        window.open(url);
      }
    }
  }
</script>

<style scoped>
  img{
    width: 32px;
    /*filter: grayscale(100%);
  -webkit-filter: grayscale(100%);*/
  }

  img:hover{
    cursor: pointer;
  }
</style>
