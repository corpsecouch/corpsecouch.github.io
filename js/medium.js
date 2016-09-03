define(['jquery-ui'], function(){
  $.widget('jb.medium', {
    // default options
    options: {
      position: 0,
      endpoint: 'https://api-skullnbones.rhcloud.com/medium/posts',
      userUrl: 'http://medium.com/@jasonbejot'
    },

    // constructor
    _create: function(){
      $.ajax({
        url: this.options.endpoint,
        cache: false,
        method: 'GET',
        context: this
      })
      .fail(function(err){
        console.error(err);
      })
      .done(function(data){
        // create the posts container
        $('<div></div>').addClass('posts').appendTo(this.element);

        // populate the container with posts
        data.posts.forEach(function(post, itr){
          $('.posts', this.element).append(
            $('<div></div>').addClass('post')
            //.data('position', itr)
            //.data('url', this.options.userUrl + '/' + post.uniqueSlug)
            .append(
              $('<div></div>').addClass('previewImage')
              .append(function(){
                return post.virtuals.previewImage.imageId ? '<img src="https://cdn-images-1.medium.com/max/2000/' + post.virtuals.previewImage.imageId + '">' : false;
              })
            )
            .append('<a class="title" href="' + this.options.userUrl + '/' + post.uniqueSlug + '" target="_blank">' + post.title + '</a>')
            .append(
              $('<div></div>').addClass('date')
              .text(post.virtuals.updatedAtRelative)
            )
            .append(
              $('<div></div>').addClass('subtitle')
              .text(post.content.subtitle)
            )
            /*.click((evt) => {
              var elem = $(evt.currentTarget);
              var pos = elem.data('position');

              if(pos == this.options.position){
                window.open(elem.data('url'), '_blank');
                return;
              }

              this.options.position = pos;
              $(evt.currentTarget.parentElement).animate({
                marginLeft: -pos * elem.outerWidth(true)
              }, 300);

              evt.preventDefault();
            })*/
          );
        }, this);
      });
    }
  });
});
