<template>
  <div id="contact">
    <h1>Contact Me</h1>
    <form v-on:submit.prevent="onSubmit">
        <label>What's your name?</label>
        <span v-if="errors.first('name')" class="error">{{errors.first('name')}}</span>
        <input v-validate="'required|max:140'" v-bind:value="formname" v-on:input="formname = $event.target.value" type="text" name="name" placeholder="your name goes here"></input>

        <label>What's your email address?</label>
        <span v-if="errors.first('email')" class="error">{{errors.first('email')}}</span>
        <input v-validate="'required|email'" type="email" name="email" placeholder="your@email.com"></input>

        <label>What's your message for me?</label>
        <span v-if="errors.first('message')" class="error">{{errors.first('message')}}</span>
        <textarea v-validate="'required|max:1400'" name="message" maxlength="1400" spellcheck placeholder="put your message here..."></textarea>

        <button name="cancel">Cancel</button>
        <button name="submit" v-bind:disabled="errors.any()">Submit</button>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'ContactMe',

    /*data () {
      return {
        formdata: {
          name: '',
          email: '',
          message: ''
        }
      }
    },*/

    //props: ['formname', 'formemail', 'formmessage'],

    formname: '',

    methods: {
      onSubmit: function(m, e) {
        console.log(this.formname);
      }
    }
  }
</script>

<style scoped lang="scss">
  #contact {
    background-color: white;
    padding: 3em;
    width: 30%;
    @include font-raleway;
    filter: drop-shadow(0 0 30px #333);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .error {
    color: $color-link;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.4em;
    margin-bottom: 2em;
    font-weight: 500;
  }

  form {
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.8);

    label, input, textarea, span {
      display: block;
      width: 100%;
    }

    span {
      margin: 0.4em 0;
    }

    label, span{
      + input, + textarea {
       margin-top: 0.4em;
     }
    }

    input, textarea {
      line-height: 1.8em;
      border-bottom: rgba(0, 0, 0, 0.8) 1px dashed;

      + label {
        margin-top: 3em;
      }
    }

    textarea {
      height: 140px;

      + button {
        margin-top: 2em;
      }
    }

    button {
      padding: 0.5em;
      background: none;
      text-transform: uppercase;
      cursor: pointer;
      color: rgba(0, 0, 0, 0.6);

      &[name="submit"] {
        color: blue;
      }
    }
  }
</style>
