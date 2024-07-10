// data - array of objects
const data = [
    {firstname: "John", lastname: "Doe", email: "john@example.com"},
    {firstname: "Mary", lastname: "Moe", email: "mary@example.com"},
    {firstname: "July", lastname: "Dooley", email: "july@example.com"},

];

// show table

function showTable(){
    //create a table element -const table
    const table = document.createElement("table");
    // add some attributes first is id
    table.id("dynamic table");
    //add a list of  bootstrap classes to this table
    table.classList("table", "table-striped");
    //*create  table's thead
    const thead = document.createElement("thead");
    //*create table's tbody
    const tbody = document.createElement("tbody");
    //create theader row
    //create theader text


}