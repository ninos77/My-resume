 $(document).ready(function() {

  
$('[data-toggle="collapse"]').click(function() {
  $(this).toggleClass( "active" );
  if ($(this).hasClass("active")) {
    $(this).text("Show Less");
  } else {
    $(this).text("Show More>>");
  }
});
  
  
// document ready  
});