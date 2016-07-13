var api = {
  goodreads: {}
};

api.goodreads.getCurrentBook = function(success, error){
  return $.get({
    url: 'https://api-skullnbones.rhcloud.com/goodreads/current',
    success: success,
    error: function(e){
      console.error(e);
      error.apply(this, arguments);
    }
  });
};

api.goodreads.getReadBooks = function(success, error){
  return $.get({
    url: 'https://api-skullnbones.rhcloud.com/goodreads/read',
    success: success,
    error: function(e){
      console.error(e);
      error.apply(this, arguments);
    }
  });
};

$(function(){
  api.goodreads.getReadBooks(function(data){
    $('#books .read .books').append(data);
  });

  api.goodreads.getCurrentBook(function(data){
    $('#books .current').append(data);
  })

  $('#writing .medium').medium();
});
