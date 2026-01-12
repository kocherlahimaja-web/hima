let selectedRow = null;

const form = document.querySelector("form");
const tableBody = document.getElementById("student table");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let college = document.getElementById("college").value;
    let contact = document.getElementById("contact").value;

    if (selectedRow === null) {
        insertRecord(name, roll, college, contact);
    } else {
        updateRecord(name, roll, college, contact);
    }

    clearForm();
});
function insertRecord(name, roll, college, contact) {
    let row = tableBody.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = college;
    row.insertCell(3).innerHTML = contact;
    row.insertCell(4).innerHTML = `
        <button onclick="editRecord(this)">Edit</button>
        <button onclick="deleteRecord(this)">Delete</button>
    `;
}
function editRecord(btn) {
    selectedRow = btn.parentElement.parentElement;

    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("roll").value = selectedRow.cells[1].innerHTML;
    document.getElementById("college").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(name, roll, college, contact) {
    selectedRow.cells[0].innerHTML = name;
    selectedRow.cells[1].innerHTML = roll;
    selectedRow.cells[2].innerHTML = college;
    selectedRow.cells[3].innerHTML = contact;

    selectedRow = null;
}
function deleteRecord(btn) {
    if (confirm("Are you sure you want to delete this record?")) {
        let row = btn.parentElement.parentElement;
        tableBody.deleteRow(row.rowIndex - 1);
    }
}
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("college").value = "";
    document.getElementById("contact").value = "";
}