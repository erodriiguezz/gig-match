$(document).ready(() => {
  // handle active navigation link
  let page = window.location.pathname.split("/").pop();
  $(`.nav-link[href="/${page}"]`)
    .parent()
    .addClass("active");

  // auto update footer copyright year
  let year = new Date().getFullYear();
  $("#year").text(year);
});
