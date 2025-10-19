

function processData() {
  const form = document.getElementById("form-id");
  const submitButton = document.querySelector("button[id=submit-button]");
  const formData = new FormData(form, submitButton);

  form.addEventListener("submit", handleSubmission);

  const table = document.querySelector("table");

  if (!table) {
    createTable(formData);
  }

  addRow(formData);
}

function handleSubmission(event) {
  event.preventDefault();
}

function createTable(formData) {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");

  table.appendChild(headerRow);

  for (const key of formData.keys()) {
    const thead = document.createElement("th");
    const headerTitle = key.split("-").join(" ");

    thead.textContent = headerTitle;
    headerRow.appendChild(thead);
  }

  document.getElementById("table-wrapper").appendChild(table);
}

function addRow(formData) {
  const table = document.querySelector("table");
  const dataRow = document.createElement("tr");

  for (const value of formData.values()) {
    const tdata = document.createElement("td");
    const data = value.split("/[ ]+/").join(" ");

    console.log(data);
    tdata.textContent = titleCase(data);
    dataRow.appendChild(tdata);
  }

  table.appendChild(dataRow);
}

function titleCase(str) {
  return str.replace(/\b\w+/g, name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
}