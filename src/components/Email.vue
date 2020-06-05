<template>
  <p><a :href="e1 + e2">{{ e2 }}</a></p>
</template>

<script>

  import Encryption from 'globals/encryption';

  export default {
    name: 'Email',
    computed: {
      e1: function () {
        return Encryption.process(_.join(
          //>2:=E@i
          ['>','2',':','=','E','@','i'],
          ''
        ));
      },
      e2: function() {
        return Encryption.process(_.join(
          //;2D@?36;@Eo8>2:=]4@>
          //[';','2','D','@','?','3','6',';','@','E','o','8','>','2',':','=',']','4','@','>'],
          //96==@o;2D@?36;@E]4@>
          ['9','6','=','=','@','o',';','2','D','@','?','3','6',';','@','E',']','4','@','>'],
          ''
        ));
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
