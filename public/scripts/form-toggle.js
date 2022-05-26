// Composer form toggle
$(document).ready(function() {
  // Toggle composer form
  $('.action').on('click', function() {
    $('.new-tweet').slideToggle('slow', function() {
    })
  });

  // Change action button color on hover
  $('.action').on('mouseover', function() {
    $(this).find('.icon').css('color', '#ba5e0d');
    $(this).find('p').css('color', '#ba5e0d');
  });
  $('.action').on('mouseleave', function() {
    $(this).find('.icon').css('color', '');
    $(this).find('p').css('color', '');
  });
});

// Function for scroll up toggle
$(document).ready(function() {
  // Hide and show button after scrolling past 100px
  $('#button-scroll-up').hide();
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('#button-scroll-up').fadeIn('fast');
    } else {
      $('#button-scroll-up').fadeOut('fast');
    }
  });

  // Button changes color when hover
  $('#button-scroll-up').on('mouseover', function() {
    $(this).css('color', '#ba5e0d');
    $(this).css('border', '0.23rem solid #ba5e0d');
  });

  $('#button-scroll-up').on('mouseleave', function() {
    $(this).css('color', '#000000');
    $(this).css('border', '0.23rem solid #000000');
  });

  //Goes back to the top of page when clicked
  $('#button-scroll-up').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0},300);
  });
});