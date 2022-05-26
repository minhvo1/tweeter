$(document).ready(function() {
  // Toggle composer form
  $('.action').on('click', function() {
    $('.new-tweet').slideToggle('slow', function(){
    })
  })

  // Change action button color on hover
  $('.action').on('mouseover', function() {
    $(this).find('.icon').css('color', '#ba5e0d');
    $(this).find('p').css('color', '#ba5e0d');
  })
  $('.action').on('mouseleave', function() {
    $(this).find('.icon').css('color', '');
    $(this).find('p').css('color', '');
  })
})