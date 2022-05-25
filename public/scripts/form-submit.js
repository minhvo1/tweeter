//Add event listener for form submit
$(document).ready(function() {
  $('.tweet-form').submit(function(event) {
    let data = $(this).serialize();
    if (data.slice(5) === "" || null) {
      $('#tweet-invalid-error').css({'display':'block'});
    } else if (data.slice(5).length > 140) {
      $('#tweet-length-error').css({'display':'block'});
    } else {
      $.post('/tweets', data);
    }
    event.preventDefault();
  })
  $(document).on('click', function() {
    $('#tweet-invalid-error').css({'display':'none'});
    $('#tweet-length-error').css({'display':'none'});
  })
})