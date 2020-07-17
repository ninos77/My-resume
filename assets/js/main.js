$(document).ready(function() {

  
$('[data-toggle="collapse"]').click(function() {
  $(this).toggleClass( "active" );
  if ($(this).hasClass("active")) {
    $(this).text("Read More");
  } else {
    $(this).text("Read Less");
  }
});
});
