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
        // shuffle the books
        this.shuffle(data.data);

        // display the books
        data.data.forEach(function(val){
          $(this.element).append(`<a title="${val.title}" href="${val.href}"><img src="${val.src}" alt="${val.title}"></a>`);
        }, this);
      });
    },

    // randomize an array
    shuffle: function(a){
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
    }

  })
})
