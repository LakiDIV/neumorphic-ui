const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Serve HTML files
function serveHtmlFile(route, filePath) {
  app.get(route, function (req, res) {
    res.sendFile(__dirname + filePath);
  });
}

serveHtmlFile("/", "/index.html");
serveHtmlFile("/logo", "/logo.html");
serveHtmlFile("/alpha", "/alpha.html");



// Start the server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
