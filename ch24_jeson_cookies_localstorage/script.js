// Save data to localStorage
function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
  alert("Name saved!");
}

// Load data from localStorage
function loadName() {
  const name = localStorage.getItem("username");
  document.getElementById("output").textContent = name
    ? "Saved Name: " + name
    : "No name found";
}

// Clear data from localStorage
function clearName() {
  localStorage.removeItem("username");
  document.getElementById("output").textContent = "";
  alert("Name cleared!");
}
