const UserService = {
   login: function (username, password) {
      if (username === "admin" && password === "password") {
         localStorage.setItem("user", JSON.stringify({ username }));
         return true;
      }
      return false;
   },
   isLoggedIn: function () {
      return localStorage.getItem("user") !== null;
   },
   logout: function () {
      localStorage.removeItem("user");
   },
};
