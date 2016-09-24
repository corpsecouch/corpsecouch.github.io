define(['jquery-ui'], function(){
  $.widget('jb.medium', {
    // default options
    options: {
      endpoint: 'https://api-skullnbones.rhcloud.com/medium/posts',
      userUrl: 'http://medium.com/@jasonbejot',
      postsToDisplay: -1
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
        this.posts = $('<div></div>').addClass('posts').appendTo(this.element);

        // populate the container with all posts
        if(this.options.postsToDisplay < 0){
          data.posts.forEach(function(post, itr){
            this.posts.append(this.createPost(post));
          }, this);
        }
        // populate with a limited number of posts
        else if(this.options.postsToDisplay > 0){
          var numDisplayablePosts = Math.min(this.options.postsToDisplay, data.posts.length);
          for(var i = 0; i < numDisplayablePosts; i++) this.posts.append(this.createPost(data.posts[i]));
        }

        // add a read more link
        this.posts.append(
          $('<a></a>').addClass('more').attr('href', this.options.userUrl).html('Read more&#8230;')
        );
      });
    },

    createPost: function(post){
      return $('<div></div>').addClass('post')
      .data('url', this.options.userUrl + '/' + post.uniqueSlug)
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
      .click(function(evt){
        window.open($(evt.currentTarget).data('url'), '_blank');
        evt.preventDefault();
      });
    }
  });
});
