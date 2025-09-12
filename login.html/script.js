// Blacklisted IP's
const blacklists = ["", ""];

// Blacklist system
fetch('https://api.db-ip.com/v2/free/self')
.then(response => response.json())
.then(data => {
  var ip = data.ipAddress;
  if (blacklists.includes(ip)) {
    alert("Your IP Address (" + ip + ") has been blacklisted from this website.");
    window.open('https://blocked.goguardian.com/teacher/block.html/', '_self').focus();
  }
})

// Function to show the password
function showPassword() {
  var passw = document.getElementById("psw");
  if (passw.type === "password") {
    passw.type = "text";
  } else {
    passw.type = "password";
  }
}

// Database of usernames and passwords
const database = [
  { username: "admin", password: "admin" },
  { username: "username123", password: "password" },
  { username: "skibidi", password: "toilet" },
  { username: "yamal", password: "155555" },
  { username: "25dgarcia@htps.org", password: "2025david" }
];

// Checking the database for the username and password and seeing if they're correct to show the secret button
function checkDatabase() {
  var usernameEntered = document.getElementById("lgin").value;
  var passwordEntered = document.getElementById("psw").value;
  const found = database.find(entry =>
    entry.username === usernameEntered && entry.password === passwordEntered
  );
  if (found) {
    window.location.href = '../94199925-7986-498e-ab8e-8809b8b6133e.html/';
    console.log(found);
  }  
    else 
  {
    document.getElementById("incorrect").innerText = "You got it wrong. Try again.";
  }
}
