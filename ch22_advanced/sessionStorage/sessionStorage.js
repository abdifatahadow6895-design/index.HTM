// sessionStorage.js

// Get elements
const input = document.getElementById("username");
const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const display = document.getElementById("display");

// =======================
// 1. Load saved data when page loads
// =======================
window.onload = function () {
  let savedName = sessionStorage.getItem("username");

  if (savedName) {
    display.textContent = "Welcome back, " + savedName;
  }
};

// =======================
// 2. Save data
// =======================
saveBtn.addEventListener("click", function () {
  let name = input.value;

  if (name) {
    sessionStorage.setItem("username", name);
    display.textContent = "Saved: " + name;
    input.value = "";
  }
});

// =======================
// 3. Remove data
// =======================
removeBtn.addEventListener("click", function () {
  sessionStorage.removeItem("username");
  display.textContent = "Username removed";
});
