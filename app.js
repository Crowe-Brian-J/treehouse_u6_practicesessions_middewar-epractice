const express = require("express");
const app = express();

// 5. Import your function from authUser.js
// 6. Add your function as the first middleware called in the /settings & /secret routes.
// 7. Test both routes with a username query parameter using ?username=<name> at the end of the URL
// Example URL to test with
// http://localhost:3000/secret?username=Brian

app.get("/", (req, res, next) => {
  res.send("<h1>🎉 Welcome to the home page! 🎉</h1>");
});

app.get("/settings", (req, res, next) => {
  res.send(`<h1>⚙️ Welcome to your settings page ${req.currentUser}! ⚙️</h1>`);
});

app.get("/secret", (req, res, next) => {
  res.send("<h1>🤫 Shhh... it's a secret! 🤫</h1>");
});

app.get("/forbidden", (req, res, next) => {
  res.send("<h1>🚫 You're not authorized to view that page! 🚫</h1>");
});

app.listen(3000);
