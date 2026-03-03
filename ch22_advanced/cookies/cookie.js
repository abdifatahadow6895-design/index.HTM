// ==========================
// 1. Set Cookie
// ==========================
function setCookie() {
  let name = document.getElementById("username").value;

  if (name) {
    // Cookie expires in 7 days
    let days = 7;
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();

    document.cookie = "username=" + name + ";" + expires + ";path=/";

    document.getElementById("output").textContent = "Cookie saved!";
  }
}

// ==========================
// 2. Get Cookie
// ==========================
function getCookie() {
  let name = "username=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookie.split(";");

  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      let value = cookie.substring(name.length);
      document.getElementById("output").textContent = "Welcome back, " + value;
      return;
    }
  }

  document.getElementById("output").textContent = "No cookie found.";
}

// ==========================
// 3. Delete Cookie
// ==========================
function deleteCookie() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.getElementById("output").textContent = "Cookie deleted!";
}
