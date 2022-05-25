/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement (tweetData) {
  let $tweet = `
  <article class="article-tweet">
    <header class="header-tweet">
      <!-- User information header -->
      <div class="user-tweet">
        <img src=${tweetData.user.avatars}>
        <p>${tweetData.user.name}</p>
      </div>
      <p>${tweetData.user.handle}</p>
    </header>
    <!-- Tweet content -->
    <p class="content-tweet">
      ${tweetData.content.text}
    </p>
    <!-- Date posted and tweet actions footer -->
    <footer class="footer-tweet">
      <p>${tweetData.created_at}</p>
      <div class="actions-tweet">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article> 
  `
  return $tweet;
}

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$(document).ready(function() {
  $('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
}); 
  