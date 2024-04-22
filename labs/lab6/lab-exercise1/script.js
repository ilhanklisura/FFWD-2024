$(document).ready(function () {
   $("#button_change").click(function () {
      var colorToChangeTo = $("#input_color").val();
      $(".cow_color").text(colorToChangeTo);
   });
});
