$(document).ready(function () {
  $("#articleArea").delegate("article", "click", function () {
    const articleDiv = $("#article").clone();
    console.log(articleDiv);
    $("#articleArea").append(articleDiv);
  });
});
