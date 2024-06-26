const data = [
   {
      id: 1,
      name: "John Doe",
      country: "Afghanistan",
      email: "john1@example.com",
      img: "https://via.placeholder.com/50",
   },
   {
      id: 2,
      name: "Jane Smith",
      country: "Albania",
      email: "jane2@example.com",
      img: "https://via.placeholder.com/50",
   },
   {
      id: 3,
      name: "Jim Brown",
      country: "Algeria",
      email: "jim3@example.com",
      img: "https://via.placeholder.com/50",
   },
   {
      id: 4,
      name: "Jake White",
      country: "Andorra",
      email: "jake4@example.com",
      img: "https://via.placeholder.com/50",
   },
   {
      id: 5,
      name: "Julie Black",
      country: "Angola",
      email: "julie5@example.com",
      img: "https://via.placeholder.com/50",
   },
   {
      id: 6,
      name: "Jennifer Green",
      country: "Antigua and Barbuda",
      email: "jennifer6@example.com",
      img: "https://via.placeholder.com/50",
   },
];

const tableBody = document.getElementById("table-body");
data.forEach((row) => {
   const tr = document.createElement("tr");
   tr.innerHTML = `
      <td>${row.id}</td>
      <td><img src="${row.img}" alt="${row.name}" class="rounded-circle" width="30"> ${row.name}</td>
      <td>${row.country}</td>
      <td>${row.email}</td>
      <td><button class="btn btn-outline-secondary" onclick="showModal('${row.name}')">Click</button></td>
  `;
   tableBody.appendChild(tr);
});

function sortTable(n) {
   const rows = Array.from(tableBody.rows);
   let isAscending = true;

   if (tableBody.getAttribute("data-sort-column") == n) {
      isAscending = !(tableBody.getAttribute("data-sort-order") === "asc");
   }

   rows.sort((a, b) => {
      const aText = a.cells[n].innerText;
      const bText = b.cells[n].innerText;
      return isAscending
         ? aText.localeCompare(bText)
         : bText.localeCompare(aText);
   });

   tableBody.setAttribute("data-sort-column", n);
   tableBody.setAttribute("data-sort-order", isAscending ? "asc" : "desc");

   tableBody.innerHTML = "";
   rows.forEach((row) => tableBody.appendChild(row));
}

function showModal(name) {
   const modal = document.getElementById("myModal");
   const modalText = document.getElementById("modal-text");
   modalText.innerText = `You clicked on the user: ${name}`;
   modal.style.display = "block";
}

function closeModal() {
   const modal = document.getElementById("myModal");
   modal.style.display = "none";
}

window.onclick = function (event) {
   const modal = document.getElementById("myModal");
   if (event.target === modal) {
      modal.style.display = "none";
   }
};
