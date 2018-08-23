var friends = require("../data/friends.js");
var compare = [];

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    
}