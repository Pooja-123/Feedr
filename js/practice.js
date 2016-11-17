<!doctype html>
<html class="no-js" lang="">

    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Feedr @ GA</title>
      <link rel="stylesheet" href="styles/normalize.css" media="screen" charset="utf-8">
      <link rel="stylesheet" href="styles/html5bp.css" media="screen" charset="utf-8">
      <link rel="stylesheet" href="styles/style.css" media="screen" charset="utf-8">
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body>
        <header>
          <section class="container">
            <a href="#"><h1>Feedr</h1></a>
            <nav>
              <ul>
                <li><a href="#">News Source: <span>Source Name</span></a>
                  <ul>
                      <li><a href="#">Mashable</a></li>
                      <li><a href="#">Reddit</a></li>
                      <li><a href="#">Digg</a></li>
                  </ul>
                </li>
              </ul>
              <section id="search">
                <input type="text" name="name" value="">
                <a href="#"><img src="images/search.png" alt="" /></a>
              </section>
            </nav>
            <div class="clearfix"></div>
          </section>
        </header>
        <div id="popUp" class="loader hidden">
          <a href="#" class="closePopUp">X</a>
          <div class="container">
            <h1>Article title here</h1>
            <p>
              Article description/content here.
            </p>
            <a href="http://mashable.com/stories.json" class="popUpAction" target="_blank">Read more from source</a>
          </div>
        </div>
        <section id="main" class="container">

          <!-- ARTICLE HANDLEBARS TEMPLATE -->
         <script id="title-template" type="text/x-handlebars-template">
          //CREATE A HANDLEBARS TEMPLATE BASED ON THIS ARTICLE STRUCTURE
        </script>
        <!--creating div for api for app.js -->
          <div id =info></div>
          <div id =description></div>

          <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_1.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>

        <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_2.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>

        <article class="article">
            <section class="featuredImage">
              <img src="images/ajax_loader.gif" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>

<!--           <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_1.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article> -->

        </section>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="js/handlebars.js"></script>
        <script src="js/helperUtils.js"></script>
        <script src="js/app.js"></script>

    </body>
</html>
