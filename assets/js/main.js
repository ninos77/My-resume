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

  function toggleLanguage(language) {
    let description = document.getElementById("description");
    if (language === "Swedish") {
        window.location.href="se/index.html";
    }
    else {
      window.location.href="/index.html";
    }
  }