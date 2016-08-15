define(['jquery-ui'], function(){
  $.widget('jb.grRead', {

    options: {
      endpoint: 'https://api-skullnbones.rhcloud.com/goodreads/read',
    },

    _create: function(){
      $.get({
        url: this.options.endpoint
      })
      .fail((err) => {
        console.error();
      })
      .done((data) => {
        $(this.element).append(data);
      });
    }

  })
})
