let fetchDataFromUrl = () => {
  const URL = "http://localhost:7500/employees";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayEmployees(data);
    })
    // Handle any errors that occur during the fetch request
    .catch((err) => {
      console.error("Error fetching data: ", err);
    });
};

let displayEmployees = (employees) => {
  const tableBody = document.getElementById("dataContainer");
  employees.forEach((employee) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.department}</td>
      <td><button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
};

fetchDataFromUrl();
