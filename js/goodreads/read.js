define(['jquery-ui'], function(){
  $.widget('jb.grRead', {

    options: {
      server: 'https://api-skullnbones.rhcloud.com',
      endpoint: '/goodreads/read',
      health: '/health'
    },

    _create: function(){
      $.ajax({
        url: this.options.server + this.options.endpoint,
        cache: false,
        method: 'GET'
      })
      .fail((err) => {
        console.error();
      })
      .done((data) => {
        data.data.forEach(function(val){
          $(this.element).append(`<a title="${val.title}" href="${val.href}"><img src="${val.src}" alt="${val.title}"></a>`);
        }, this);
      });
    }

  })
})
