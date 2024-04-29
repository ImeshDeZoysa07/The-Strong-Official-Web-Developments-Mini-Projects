// Mock database of users
const users = [
    { username: "admin", password: "admin123" },
    { username: "cashier", password: "cashier123" }
  ];
  
  // Function to validate user credentials
  function login(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user;
  }
  
  // Function to handle login form submission
  function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = login(username, password);
  
    if (user) {
      // Successful login
      alert("Login successful!");
      // Redirect to POS system or display POS interface
      // Replace the next line with the appropriate action
      window.location.href = "pos.html";
    } else {
      // Invalid credentials
      alert("Invalid username or password. Please try again.");
    }
  }
  
  // Event listener for login form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    handleLogin();
  });
  