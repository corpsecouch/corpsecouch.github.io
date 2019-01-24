<template>
  <div>
    <img src="static/Oval@1x.png">
    <SocialIcons id="icons"></SocialIcons>
  </div>
</template>

<script>
  import SocialIcons from 'components/SocialIcons';

  export default {
    name: 'Index',

    components: {
      SocialIcons
    }

  }
</script>

<style lang="css">
  html{
    background-color: #131312;
  }
</style>

<style scoped lang="css">
  img, #icons{
    display: block;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #icons{
    margin-top: 140px;
    width: 250px;
  }
</style>
