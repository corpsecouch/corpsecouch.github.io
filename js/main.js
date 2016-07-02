$(function(){

  $.get({
    url:'https://www.goodreads.com/review/list?v=2&id=37984300&key=bMQakmDgjvTY0R6mtWaBBg',
    success: function(){
      console.log(arguments);
    }
  })
});
