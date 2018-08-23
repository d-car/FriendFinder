// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
//=========================
var app = express();

// Set Port
var PORT = process.env.PORT || 8080;

// Handle Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", function(req, res) {
  res.render("home", res);
});

app.get("/survey", function(req, res) {
  res.render("survey", res);
});

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});