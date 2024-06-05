$(document).ready(function () {
   var app = $.spapp({ defaultView: "#home", templateDir: "./views/" });

   app.route({
      view: "view_more",
      onLoad: function () {
         setTitle("view_more");
         var data = localStorage.getItem("selectedData");
         if (data) {
            $("#detailedInfo").html(data);
         } else {
            $("#detailedInfo").html("No data available");
         }
      },
   });

   app.run();
});
