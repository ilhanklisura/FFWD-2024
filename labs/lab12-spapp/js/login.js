$(document).ready(function () {
   $("#loginForm").submit(function (event) {
      event.preventDefault();
      var username = $("#username").val();
      var password = $("#password").val();

      if (UserService.login(username, password)) {
         window.location.href = "#home";
      } else {
         alert("Invalid credentials");
      }
   });
});
