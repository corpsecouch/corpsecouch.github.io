define(['jquery-ui'], function(){
  $.widget('jb.grCurrent', {

    options: {
      server: 'https://api-skullnbones.rhcloud.com',
      endpoint: '/goodreads/current',
      health: '/health'
    },

    _create: function(){
      $.ajax({
        url: this.options.server + this.options.endpoint,
        cache: false,
        method: 'GET',
        context: this
      })
      .fail(function(err){
        console.error();
      })
      .done(function(data){
        $(this.element).append('<a title="' + data.data.title + '" href="' + data.data.href + '"><img src="' + data.data.src + '" alt="' + data.data.title + '"></a>');
      });
    }

  })
})
