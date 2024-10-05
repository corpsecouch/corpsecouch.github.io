<template>
  <!--<p><a :href="e1 + e2">{{ e2 }}</a></p>-->
  <a :href="e1 + e2"><slot name="icon"></slot>{{ e2 }}</a>
</template>

<script>

  import Encryption from '/src/globals/encryption';
  import _ from 'lodash';

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

<style scoped lang="css">
  a {
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 0.6rem;
  }
</style>
