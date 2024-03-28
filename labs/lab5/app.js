const users = [
   {
      id: 1,
      name: "Ilhan Klisura",
      country: "Bosnia and Herzegovina",
      email: "work@ilhanklisura.com",
   },
   {
      id: 2,
      name: "Harun Musa",
      country: "Bosnia and Herzegovina",
      email: "harun.musa@stu.ibu.edu.ba",
   },
   ,
   {
      id: 3,
      name: "Thomas Muller",
      country: "Germany",
      email: "muller@thomas.de",
   },
   {
      id: 4,
      name: "Jacques Cousteau",
      country: "France",
      email: "jacques@cousteau.fr",
   },
   {
      id: 5,
      name: "Amerigo Vespucci",
      country: "Italy",
      email: "amerigo@vespucci.it",
   },
];

function populateTable(data) {
   const tableBody = document
      .getElementById("infoTable")
      .getElementsByTagName("tbody")[0];
   tableBody.innerHTML = "";
   data.forEach((user) => {
      let row = tableBody.insertRow();
      row.innerHTML = `
          <td>${user.id}</td>
          <td><img src="https://placehold.co/20x20" alt="Logo" class="logo">${user.name}</td>
          <td>${user.country}</td>
          <td>${user.email}</td>
          <td><button class="btn btn-primary" onclick="showModal('${user.name}')">Click</button></td>
      `;
   });
}

function showModal(userName) {
   document.getElementById(
      "modalText"
   ).textContent = `You clicked on the user: ${userName}`;
   new bootstrap.Modal(document.getElementById("clickModal")).show();
}

document.querySelectorAll("th[data-sort]").forEach((header) => {
   header.innerHTML += ' <i class="fas fa-sort"></i>';
   header.addEventListener("click", function () {
      const sortKey = this.getAttribute("data-sort");
      const isSortedAsc = this.classList.contains("sorted-asc");
      document.querySelectorAll("th").forEach((th) => {
         th.classList.remove("sorted-asc", "sorted-desc");
         if (th.children.length > 0) {
            th.children[0].className = "fas fa-sort";
         }
      });
      users.sort((a, b) => {
         if (a[sortKey] < b[sortKey]) {
            return isSortedAsc ? 1 : -1;
         }
         if (a[sortKey] > b[sortKey]) {
            return isSortedAsc ? -1 : 1;
         }
         return 0;
      });

      if (isSortedAsc) {
         this.classList.remove("sorted-asc");
         this.classList.add("sorted-desc");
         this.children[0].className = "fas fa-sort-down";
      } else {
         this.classList.remove("sorted-desc");
         this.classList.add("sorted-asc");
         this.children[0].className = "fas fa-sort-up";
      }
      populateTable(users);
   });
});

populateTable(users);
