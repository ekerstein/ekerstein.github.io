// Wait for the document to be ready before loading
$(document).ready(function() {
  // Push the body and the nav over by 250px when menu is clicked
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "250px"
    }, 200);
  });

  // Push them back when close icon is clicked
  $('.icon-close i').click(function() {
    $('.menu').animate({
      left: "-250px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  // Change class of Menu li when clicked
    $('.menu li').click(function() {
      $('.menu li').removeClass('current'); 
      $(this).addClass('current');
  });
  
}); 