var api = {
  goodreads: {},
  medium: {}
};

api.goodreads.getCurrentBook = function(success, error){
  return $.get({
    url: 'https://api-skullnbones.c9users.io/goodreads/current',
    success: success,
    error: function(e){
      console.error(e);
      error.apply(this, arguments);
    }
  });
};

api.goodreads.getReadBooks = function(success, error){
  return $.get({
    url: 'https://api-skullnbones.c9users.io/goodreads/read',
    success: success,
    error: function(e){
      console.error(e);
      error.apply(this, arguments);
    }
  });
};

api.medium.getPosts = function(success, error){
  return $.get({
    url: 'https://api-skullnbones.c9users.io/medium/posts',
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
});
