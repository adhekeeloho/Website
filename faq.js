/**
 * Handle the App Animation from here...
 */
// $('#appAnimation');
$(document).scroll(function () {
  let height = window.innerHeight;
  console.log(height);
});

/**
 * Password Reset...
 */
// $('#resets password');

$(document).ready(function () {
  $(".pass_show").append('<span class="ptxt">./upward.png</span>');
});

$(document).on("click", ".pass_show .ptxt", function () {
  $(this).text(
    $(this).text() == "./upward.png" ? "./downward.png" : "./upward.png"
  );

  $(this)
    .prev()
    .attr("type", function (index, attr) {
      return attr == "password" ? "text" : "password";
    });
});

function myFunc() {
  document.getElementById("try").innerHTML = "./upward.png";
}
