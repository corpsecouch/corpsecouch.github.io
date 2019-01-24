<template>
  <div>
    <ul>
      <li><SocialIcon iconType="twitter"></SocialIcon></li>
      <li><SocialIcon iconType="medium"></SocialIcon></li>
      <li><SocialIcon iconType="goodreads"></SocialIcon></li>
      <li><SocialIcon iconType="linkedin"></SocialIcon></li>
    </ul>
  </div>
</template>

<script>
  import SocialIcon from 'components/SocialIcon';

  export default {
    name: 'SocialIcons',

    components: {
      SocialIcon
    }

  }
</script>

<style scoped lang="css">
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
