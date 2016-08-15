define(['jquery-ui'], function(){
  $.widget('jb.grCurrent', {

    options: {
      endpoint: 'https://api-skullnbones.rhcloud.com/goodreads/current',
    },

    _create: function(){
      $.ajax({
        url: this.options.endpoint,
        cache: false,
        method: 'GET'
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
