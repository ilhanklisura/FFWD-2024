$(document).ready(function () {
   // Initialize SPApp
   var app = $.spapp({
      pageNotFound: "error_404", // The id of the page that will be displayed when the page is not found
   });

   // Define routes
   app.route({
      view: "dashboard",
      load: "dashboard.html",
   });

   app.route({
      view: "students",
      load: "students.html",
   });

   app.route({
      view: "student_workflow",
      load: "student_workflow.html",
   });

   app.route({
      view: "student_add",
      load: "student_add.html",
   });

   // Run app
   app.run();
});
