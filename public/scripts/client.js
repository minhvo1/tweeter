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

//Append multiple tweet articles to main container
const renderTweets = function() {
  for (const obj of data) {
    $('.container').append(createTweetElement(obj));
  }
}

//Test data
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//driver code (temporary)

$(document).ready(function() {
  renderTweets(data);
});