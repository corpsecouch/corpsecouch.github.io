define(['jquery-ui'], function(){
  $.widget('jb.grCurrent', {

    options: {
      endpoint: 'https://api-skullnbones.rhcloud.com/goodreads/current',
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
