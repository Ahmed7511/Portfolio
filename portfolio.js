$(document).ready(function () {
    $(window).on("scroll", function () {
      $(".progress").each(function (index, progress) {
        var progressBar = $(progress).find(".progress-bar");
        var progressPercent = parseInt($(progressBar).attr("data-progress"));
        if ($(window).scrollTop() > $(progress).offset().top - 400) {
          $(progressBar)
            .css("width", progressPercent + "%")
            .text(progressPercent + "%");
        }
      });
    });
  });

  $('#more').on('click', function(){ 
    $(this).hide();
  });


  $('#scrollToTop').on('click', function(){
         window.scrollTo(0,0);
 });

 $('#submit').on('click', function(){
    alert('We are working on this feature. Thank you for contacting us by e-mail !')
    window.location.reload();
});