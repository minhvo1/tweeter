$(document).ready(function() {
  $('#tweet-text').on('input', function(event) {
    $('.counter').text(140 - $(this).val().length);
  })
});