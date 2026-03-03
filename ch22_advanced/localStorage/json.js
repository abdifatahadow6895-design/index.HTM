// User fills form
let user = {
  name: "moha",
  email: "moha@gmail.com",
  age: 22,
};

// Convert to JSON before sending to server
let jsonData = JSON.stringify(user);

console.log("Sending to server:", jsonData);

// Server sends JSON back
let response = '{"status":"success","message":"Account created"}';

// Convert back to object
let parsedResponse = JSON.parse(response);

console.log(parsedResponse.message);
