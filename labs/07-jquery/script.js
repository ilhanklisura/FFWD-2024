$(document).ready(function () {
   var colorCardinal = "rgb(196, 30, 58)"; // Cardinal color in RGB format

   $("#button_change").click(function () {
      var inputValue = $("#input_color").val();
      $(".cow_color").html(inputValue);
   });

   $("#button_toggle_colors").click(function () {
      $(".box").each(function () {
         if ($(this).css("background-color") === colorCardinal) {
            $(this).css("background-color", "");
         } else {
            $(this).css("background-color", colorCardinal);
         }
      });
   });

   $("#button_toggle_roundedges").click(function () {
      $(".box").each(function () {
         $(this).toggleClass("round-edge");
      });
   });

   $("#button_add_box").click(function () {
      var new_box = document.createElement("div");
      var existingBoxes = $(".box").length;
      var new_id = existingBoxes + 1;
      $(new_box).attr("id", "box" + new_id);
      $(new_box).addClass("box outlined");
      $("#boxes").append(new_box);
   });
});
