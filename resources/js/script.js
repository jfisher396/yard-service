
$(document).ready(function () {
  // sticky navbar animation
  $(".js--section-about-us").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //   scroll to plans section animation
  $(".js--scroll-to-contact").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      500
    );
  });

  //   scroll to specials section animation
  $(".js--scroll-to-specials").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-specials").offset().top },
      500
    );
  });

  //   animations on scroll
  //  services fade-in
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );


  // specials pulse animation
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  // mobile nav
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });
});
