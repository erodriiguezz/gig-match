$(document).ready(() => {
  $(".nav .nav-link").on("click", function() {
    console.log($(this));

    $(".nav-item")
      .find(".active")
      .removeClass("active");
    $(this)
      .parent()
      .addClass("active");
  });
});
