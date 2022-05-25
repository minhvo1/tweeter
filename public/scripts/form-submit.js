//Add event listener for form submit
$(document).ready(function() {
  $('.tweet-form').submit(function(event) {
    let data = $(this).serialize();
    $.post('/tweets', data);
    event.preventDefault();
  })
})