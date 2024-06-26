var StudentService = {
   checkConnection: function () {
      return $.ajax({
         url: this.baseUrl + "",
         method: "GET",
         success: function (response) {
            console.log("Connection successful:", response);
         },
         error: function (error) {
            console.log("Connection failed:", error);
         },
      });
   },

   getCustomers: function () {
      return $.ajax({
         url: this.baseUrl + "",
         method: "GET",
         dataType: "json",
         success: function (response) {
            console.log("Customers retrieved:", response);
         },
         error: function (error) {
            console.log("Error retrieving customers:", error);
         },
      });
   },

   getCustomerMeals: function (customerId) {
      return $.ajax({
         url: this.baseUrl + "/customer/meals/" + customerId,
         method: "GET",
         dataType: "json",
         success: function (response) {
            console.log("Customer meals retrieved:", response);
         },
         error: function (error) {
            console.log("Error retrieving customer meals:", error);
         },
      });
   },

   addCustomer: function (customerData) {
      return $.ajax({
         url: this.baseUrl + "",
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         data: JSON.stringify(customerData),
         success: function (response) {
            console.log("Customer added:", response);
         },
         error: function (error) {
            console.log("Error adding customer:", error);
         },
      });
   },

   getFoodsReport: function () {
      return $.ajax({
         url: this.baseUrl + "",
         method: "GET",
         dataType: "json",
         success: function (response) {
            console.log("Foods report retrieved:", response);
         },
         error: function (error) {
            console.log("Error retrieving foods report:", error);
         },
      });
   },
};

$(document).ready(function () {
   CustomersService.checkConnection();

   CustomersService.getCustomers().then(function (customers) {
      const selectElement = document.getElementById("customers-list");
      selectElement.innerHTML =
         "<option selected>Please select one customer</option>";
      customers.forEach((customer) => {
         const option = document.createElement("option");
         option.value = customer.id;
         option.textContent = `${customer.first_name} ${customer.last_name}`;
         selectElement.appendChild(option);
      });
   });

   document
      .getElementById("customers-list")
      .addEventListener("change", function () {
         const selectedCustomerId =
            document.getElementById("customers-list").value;
         CustomersService.getCustomerMeals(selectedCustomerId).then(function (
            meals
         ) {
            const tableBody = document
               .getElementById("customer-meals")
               .getElementsByTagName("tbody")[0];
            tableBody.innerHTML = "";
            meals.forEach((meal) => {
               const row = tableBody.insertRow();
               const foodNameCell = row.insertCell();
               const foodBrandCell = row.insertCell();
               const mealDateCell = row.insertCell();
               foodNameCell.textContent = meal.food_name;
               foodBrandCell.textContent = meal.food_brand;
               mealDateCell.textContent = meal.meal_date;
            });
         });
      });

   document
      .getElementById("add-customer-form")
      .addEventListener("submit", function (event) {
         event.preventDefault();
         const firstName = document.getElementById("first_name").value;
         const lastName = document.getElementById("last_name").value;
         const birthDate = document.getElementById("birth_date").value;

         CustomersService.addCustomer({
            first_name: firstName,
            last_name: lastName,
            birth_date: birthDate,
            status: "active",
         }).then(function () {
            CustomersService.getCustomers().then(function (customers) {
               const selectElement = document.getElementById("customers-list");
               selectElement.innerHTML =
                  "<option selected>Please select one customer</option>";
               customers.forEach((customer) => {
                  const option = document.createElement("option");
                  option.value = customer.id;
                  option.textContent = `${customer.first_name} ${customer.last_name}`;
                  selectElement.appendChild(option);
               });
            });

            var myModalEl = document.getElementById("add-customer-modal");
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
         });
      });
});
