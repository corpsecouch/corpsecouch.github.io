define(function(require) {
  var $ = require('jquery');
  require('medium');
  require('goodreads/current');
  require('goodreads/read');

  $(function(){
    $('#books .read .books').grRead();

    $('#books .current').grCurrent();

    $('#writing .medium').medium({postsToDisplay: 3});
  });
});
