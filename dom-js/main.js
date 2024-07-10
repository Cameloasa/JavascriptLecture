// data - array of objects
const data = [
    {firstname: "John", lastname: "Doe", email: "john@example.com"},
    {firstname: "Mary", lastname: "Moe", email: "mary@example.com"},
    {firstname: "July", lastname: "Dooley", email: "july@example.com"},

];

// show table

function showTable(){
    //create a nable if not exist 
    if (!document.getElementById("dynamicTable")) {
    //create a table element -const table
    const table = document.createElement("table");
    // add some attributes first is id
do {
        table.id("dynamic table");
    
} while (condition);    //add a list of  bootstrap classes to this table
    table.classList.add("table", "table-striped");
    //*create  table's thead
    const thead = document.createElement("thead");
    //*create table's tbody
    const tbody = document.createElement("tbody");
    //create theader row
    const headerRow = document.createElement("tr");
    //create theader text array of header text []
    const headerText = ["Firstname", "Lastname", "Email"];
    //iterate over the array using forEach
    headerText.forEach((text) => {
        //for each element I want to create a teable head element
        const th = document.createElement("th");
        //add this thex to each table head I created
        th.textContent = text;
        //append text to the header row
        headerRow.appendChild(th);

    });
    //append the row to the table head
    thead.appendChild(headerRow);
    //append thead to the table
    table.appendChild(thead);

    //create row and columns for table body using for each
    data.forEach((person) =>{
        //for each person I want to create a  table row tr
        const row = document.createElement("tr");
        //create columns using an array 
        const column = ["firstname", "lastname", "email"];
        //add the value to the table 
        column.forEach((value) => {
            const td = document.createElement("td");
            td.textContent = person[value];
            row.appendChild(td)
    });
    //append the row to the tbody
    tbody.appendChild(row);
    });
    //append the tbody to the table
    table.appendChild(tbody);




    //append the table to his section
    const dataTable = document.getElementById("data-table");
    dataTable.appendChild(table);
    displayMessage();
    
}

}


// document.getElementById("showTable").onclick = showTable;


function hideTable() {
    console.log("hideTable has been executed.");
    const table = document.getElementById("dynamicTable");
    if (table) {
      table.remove();
    }
    hideMessage();
  }
  


function displayMessage() {
    //?<div id="message"></div>
    //*<div class="alert alert-success">
    //*<strong>Success!</strong> Indicates a successful or positive action.
    //*</div>
  
    const messageElement = document.getElementById("message");
    messageElement.innerHTML =
      "<strong>Success!</strong> The table has been shown.";
    messageElement.classList.add("alert", "alert-success");
    messageElement.style.display = "block";
  }


  function hideMessage() {
    const messageElement = document.getElementById("message");
    messageElement.style.display = "none";
  }
  
  function validateAndSubmit() {
    console.log("validateAndSubmit has been executed");
  
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (!firstName || !lastName || !email) {
      if (!firstName) {
        document.getElementById("firstName").classList.add("is-invalid");
      }
      if (!lastName) {
        document.getElementById("lastName").classList.add("is-invalid");
      }
      if (!email) {
        document.getElementById("email").classList.add("is-invalid");
      }
      return;
    }
    document.getElementById("firstName").classList.remove("is-invalid");
    document.getElementById("lastName").classList.remove("is-invalid");
    document.getElementById("email").classList.remove("is-invalid");
    showTable();
  }
  
  //* document.getElementById("reg-btn").addEventListener("click", validateAndSubmit);
  document
    .getElementById("reg-btn")
    .addEventListener("click", () => validateAndSubmit());
  // document
  //   .getElementById("reg-btn")
  //   .addEventListener("click", () => console.log("Validation has been done"));
  
  resetForm = () => {
    document.getElementById("registrationForm").reset();
    document.getElementById("firstName").classList.remove("is-invalid");
    document.getElementById("lastName").classList.remove("is-invalid");
    document.getElementById("email").classList.remove("is-invalid");
    hideTable();
  };