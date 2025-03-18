// header sticky
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
      $("#myHeader").addClass("sticky");
    } else {
      $("#myHeader").removeClass("sticky");
    }
  });
});

// light to dark mode
if (localStorage.getItem("theme") === "dark") {
  document
    .querySelectorAll(".dark-mode")
    .forEach((el) => el.classList.add("active-dark"));
}

document.getElementById("lightTheme").addEventListener("click", function () {
  document
    .querySelectorAll(".dark-mode")
    .forEach((el) => el.classList.remove("active-dark"));
  localStorage.setItem("theme", "light");
});

document.getElementById("darkTheme").addEventListener("click", function () {
  document
    .querySelectorAll(".dark-mode")
    .forEach((el) => el.classList.add("active-dark"));
  localStorage.setItem("theme", "dark");
});

$(document).ready(function () {
  // Function to check and adjust navigation based on window width
  function checkNav() {
    var windowWidth = $(window).width();

    if (windowWidth > 991) {
      // Reset mobile menu styles when switching to desktop view
      if ($(".pxp-header-nav-trigger").hasClass("pxp-active")) {
        $(".pxp-header-nav-trigger").removeClass("pxp-active");
        $(".pxp-logo").removeClass("pxp-logo-nav");
        $(".pxp-header").removeClass("pxp-mobile");
      }

      // Show main navigation and hide submenus (Desktop Mode)
      $(".pxp-nav").show();
      $(".pxp-nav .pxp-nav-sub").hide();
    } else {
      // Hide navigation when switching to mobile unless menu is active
      if (!$(".pxp-header-nav-trigger").hasClass("pxp-active")) {
        $(".pxp-nav").hide();
      }

      // Always show submenus in mobile mode
      $(".pxp-nav .pxp-nav-sub").show();
    }
  }

  // Hover effect for dropdown menus (Desktop Only)
  $(".pxp-nav > li").hover(
    function () {
      var subMenu = $(this).children("ul:first");

      if (subMenu.length > 0 && !$(".pxp-header").hasClass("pxp-mobile")) {
        var subMenuWidth = subMenu.width();
        var menuItemLeft = $(this).offset().left;
        var windowWidth = $(window).width();
        var menuItemRight = windowWidth - menuItemLeft;

        // Adjust submenu position if it overflows on the right
        if (menuItemRight < subMenuWidth) {
          subMenu.css({ right: "0", left: "auto" });
        }

        // Animate submenu appearance
        subMenu
          .fadeIn({ queue: false, duration: 200 })
          .animate({ top: "24px" }, 200);
      }
    },
    function () {
      var subMenu = $(this).children("ul:first");

      if (subMenu.length > 0 && !$(".pxp-header").hasClass("pxp-mobile")) {
        // Animate submenu disappearance
        subMenu
          .fadeOut({ queue: false, duration: 200 })
          .animate({ top: "10px" }, 200);
      }
    }
  );

  // Mobile navigation toggle button
  $(".pxp-header-nav-trigger").click(function () {
    $(this).toggleClass("pxp-active");
    $(".pxp-logo").toggleClass("pxp-logo-nav");
    $(".pxp-header").toggleClass("pxp-mobile");
    $(".pxp-nav").toggle();
  });

  // Check navigation layout on window resize
  $(window).resize(checkNav);

  // Run checkNav on page load
  checkNav();
});
