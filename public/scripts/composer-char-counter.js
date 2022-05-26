//Calculate and display remaining characters in tweet composer counter
$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    $(this).parent().find('.counter').text(140 - $(this).val().length);
    if ($(this).parent().find('.counter').text() < 0) {
      $(this).parent().find('.counter').css('color', 'red');
    } else {
      $(this).parent().find('.counter').css('color', '#191716');
    }
  });
});