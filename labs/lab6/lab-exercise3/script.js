$(document).ready(function () {
   var employees = [
      {
         name: "Ilhan Klisura",
         position: "Software Engineer",
         department: "Engineering",
         salary: "$120,000",
         hireDate: "14.11.2019.",
      },
      {
         name: "Harun Musa",
         position: "QA Engineer",
         department: "Engineering",
         salary: "$90,000",
         hireDate: "20.05.2022.",
      },
      {
         name: "Elvira Delić",
         position: "Project Manager",
         department: "Management",
         salary: "$140,000",
         hireDate: "16.05.2020.",
      },
      {
         name: "Dželila Mehanović",
         position: "CEO",
         department: "All Departments",
         salary: "$220,000",
         hireDate: "20.01.2016.",
      },
   ];

   $("#employeeTable").DataTable({
      data: employees,
      columns: [
         { data: "name" },
         { data: "position" },
         { data: "department" },
         { data: "salary" },
         { data: "hireDate" },
      ],
   });

   $("#employeeTable tbody").on("click", "tr", function () {
      var data = $("#employeeTable").DataTable().row(this).data();
      $("#employeeModal .modal-content").html(`
      <div class="modal-header">
        <h5 class="modal-title" id="employeeModalLabel">${data.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Position: ${data.position}</p>
        <p>Department: ${data.department}</p>
        <p>Salary: ${data.salary}</p>
        <p>Hire Date: ${data.hireDate}</p>
      </div>
    `);
      $("#employeeModal").modal("show");
   });
});
