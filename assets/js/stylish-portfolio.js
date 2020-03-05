AOS.init();

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top - 200
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Adds box-shadow to navbar on scroll
  $(document).scroll(function() {
    if ($(document).scrollTop() >= 50) {
      $("#navbar").addClass("box-shadow");
    } else {
      $("#navbar").removeClass("box-shadow");
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $("#navbarSupportedContent .js-scroll-trigger").click(function() {
    $("#navbarSupportedContent").removeClass("show");
  });

  $(".nav-link").click(function() {
    $(".nav-link").removeClass("active");
  });
})(jQuery); // End of use strict
