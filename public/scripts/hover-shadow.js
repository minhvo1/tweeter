//Activate shadow on hover

//Tweet submission button shadow
$(document).ajaxComplete(function() {
  $('.tweet-submit-errors').children('button').mouseenter(function() {
    $(this).css('box-shadow', '3.7px 3.7px #666666');
  });
  $('.tweet-submit-errors').children('button').mouseleave(function() {
    $(this).css('box-shadow', '');
  });
});

//Tweet article shadow
$(document).ajaxComplete(function() {
  $('.article-tweet').mouseenter(function() {
    $(this).css('box-shadow', '7px 7px #666666');
  });
  $('.article-tweet').mouseleave(function() {
    $(this).css('box-shadow', '');
  });
});

//Tweet article action buttons changing color when hover
$(document).ajaxComplete(function() {
  $('.fa-flag').mouseenter(function() {
    $(this).css('color', '#E6AF2E');
  });
  $('.fa-flag').mouseleave(function() {
    $(this).css('color', '');
  });

  $('.fa-retweet').mouseenter(function() {
    $(this).css('color', '#12b058');
  });
  $('.fa-retweet').mouseleave(function() {
    $(this).css('color', '');
  });

  $('.fa-heart').mouseenter(function() {
    $(this).css('color', '#d43b3b');
  });
  $('.fa-heart').mouseleave(function() {
    $(this).css('color', '');
  });
});