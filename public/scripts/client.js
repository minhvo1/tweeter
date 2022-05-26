/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Create a new single tweet article element from data
const createTweetElement = function(tweetData) {
  let $tweet = `
  <article class="article-tweet">
    <header class="header-tweet">
      <!-- User information header -->
      <div class="user-tweet">
        <img src=${tweetData.user.avatars}>
        <p>${escape(tweetData.user.name)}</p>
      </div>
      <p>${escape(tweetData.user.handle)}</p>
    </header>
    <!-- Tweet content -->
    <p class="content-tweet">
      ${escape(tweetData.content.text)}
    </p>
    <!-- Date posted and tweet actions footer -->
    <footer class="footer-tweet">
      <p>${timeago.format(tweetData.created_at)}</p>
      <div class="actions-tweet">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article> 
  `;
  return $tweet;
};

//Append multiple tweet articles to main container
const renderTweets = function(dataArr) {
  let container = $('.tweet-articles-container');
  for (const obj of dataArr) {
    container.append(createTweetElement(obj));
  }
};

// Calls a GET request to /tweets to render tweets
const loadTweets = function() {
  $.ajax({
    type: 'GET',
    url: '/tweets',
    success: function(data) {
      renderTweets(data);
    }
  });
};

//Form submission function
$(document).ready(function() {
  $('.tweet-form').submit(function(event) {
    event.preventDefault();
    let tweetData = $(this).serialize();
    if (tweetData.slice(5) === "" || null) {
      $('#tweet-invalid-error').css({'display':'block'}); // Displays error message if tweet is empty
    } else if (tweetData.slice(5).length > 140) {
      $('#tweet-length-error').css({'display':'block'}); // Displays error message if tweet is too long
    } else {
      // Send POST request to /tweets
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: tweetData,
        success: function() {
          $.ajax({
            type: 'GET',
            url: '/tweets',
            success: function(data) {
              renderTweets([data[data.length - 1]]); // Only render the last tweet added
            }
          });
        }
      });
    }
  });
  $('.tweet-button').on('click', function() {
    $('#tweet-invalid-error').css({'display':'none'}); // Disable error message
    $('#tweet-length-error').css({'display':'none'});
  });
});

// Escape function
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Driver code
$(document).ready(function() {
  loadTweets();
});