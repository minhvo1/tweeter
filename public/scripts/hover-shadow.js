//Script to activate shadow on hover

//Tweet submission button
$(document).ready(function() {
  $('.tweet-submission-counter').children('button').mouseenter(function() {
    $(this).css('box-shadow', '3.7px 3.7px #666666');
  })
  $('.tweet-submission-counter').children('button').mouseleave(function() {
    $(this).css('box-shadow', '');
  })
});

//Tweet article
$(document).ready(function() {
  $('.article-tweet').mouseenter(function() {
    $(this).css('box-shadow', '7px 7px #666666');
  })
  $('.article-tweet').mouseleave(function() {
    $(this).css('box-shadow', '');
  })
});

//Tweet article action buttons
$(document).ready(function() {
  $('.fa-flag').mouseenter(function() {
    $(this).css('color', '#E6AF2E');
  })
  $('.fa-flag').mouseleave(function() {
    $(this).css('color', '');
  })

  $('.fa-retweet').mouseenter(function() {
    $(this).css('color', '#12b058');
  })
  $('.fa-retweet').mouseleave(function() {
    $(this).css('color', '');
  })

  $('.fa-heart').mouseenter(function() {
    $(this).css('color', '#d43b3b');
  })
  $('.fa-heart').mouseleave(function() {
    $(this).css('color', '');
  })
});

