// ABOUTME: Small script that toggles the mobile navigation menu open/closed.
// ABOUTME: No dependencies; attaches on DOMContentLoaded to the nav toggle button.

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
