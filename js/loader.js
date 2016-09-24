define(['jquery-ui'], function(){
  $.widget('jb.loader', {
    // constructor
    _create: function(){
      this.loader = $('<div></div>').addClass('loader')
        .append(
          $('<div></div>').addClass('container')
            .append($('<div></div>').addClass('figure'))
            .append($('<p></p>').addClass('label').html('Loading'))
        )
        .appendTo(this.element);
    },

    // destructor
    _destroy: function(){
      this.loader.remove();
    }
  });
});
