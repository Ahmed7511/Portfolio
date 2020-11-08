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


  document.getElementById('scrollToTop').addEventListener('click', function(){
         window.scrollTo(0,0);
 });

 document.getElementById('submit').addEventListener('click', function(event){
  alert('We are working on this feature. Thank you for contacting us by e-mail !')
  window.location.reload();
});