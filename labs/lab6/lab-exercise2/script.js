$(document).ready(function () {
   $(".box").addClass("outlined");

   $("#button_toggle_colors").click(function () {
      $(".box").each(function () {
         $(this).css(
            "background-color",
            $(this).css("background-color") == "rgb(200, 20, 30)"
               ? ""
               : "rgb(200, 20, 30)"
         );
      });
   });

   $("#button_toggle_roundedges").click(function () {
      $(".box").toggleClass("round-edge");
   });

   $("#button_add_box").click(function () {
      var boxNumber = $(".box").length + 1;
      var newBox = $('<div class="box outlined"></div>').attr(
         "id",
         "box" + boxNumber
      );
      $("#boxes").append(newBox);
   });
});
