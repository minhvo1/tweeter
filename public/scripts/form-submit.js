//Add event listener for form submit
$(document).ready(function() {
  $('.tweet-form').submit(function(event) {
    let data = $(this).serialize();
    if (data.slice(5) === "" || null) {
      alert("Invalid tweet");
    } else if (data.slice(5).length > 140) {
      alert("Tweet is too long!");
    } else {
      $.post('/tweets', data);
    }
    event.preventDefault();
  })
})