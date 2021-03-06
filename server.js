// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
//=========================
var app = express();

// Set Port
var PORT = process.env.PORT || 3030;

// Handle Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/public'));

// Routes
require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});