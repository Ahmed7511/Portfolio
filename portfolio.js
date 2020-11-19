// progress bars 
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
<<<<<<< HEAD

  $(document).ready(function () {
  $('#more').on('click', function(){ 
    $(this).hide();
  });
});

=======
  
// hide see more on click
  $('#more').on('click', function(){ 
    $(this).hide();
  });

// scroll to top on click 
>>>>>>> branchtest
  $('#scrollToTop').on('click', function(){
         window.scrollTo(0,0);
 });
