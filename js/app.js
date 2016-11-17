$(document).ready(function() {
  // var digg="https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json";
  var mashable = "https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json";
  $.ajax({
      url: mashable,
      type: 'GET',
      dataType: 'JSON',
      success: whenDone,
      error: function(xhr) {
          console.log(xhr);

      }
  }); //end of ajax

  function whenDone(res) {
      console.log('res', res);

      var source = $('#article-template').html();
      var buildHtmlFunction = Handlebars.compile(source);

      res.new.forEach(function(article, index){
        console.log('article #'+index, article);
        var articleObj = {
          image_url: article.responsive_images[0].image,
          title: article.title,
          channel: article.channel,
          share_count: article.shares.total
        };
        var articleHtmlElements = buildHtmlFunction(articleObj);

        $('section#main').append(articleHtmlElements);
      });
    }
  }); //end document. ready function
