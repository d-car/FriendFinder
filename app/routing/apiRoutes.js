var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends)
    })

    // POST route for adding new users to friends.js friends array 
    app.post('/api/friends', function(req, res) {
        // Our user is the data sent in the request.
        var thisUser = req.body;
        var differences = [];

        // If there is more than one friend to compare to,
        if (friends.length > 1) {
            // Step through these potential friends.
            friends.forEach(function(user) {
                var totalDifference = 0;

                // For each answer, compare the answers and add the absolute value of the difference to the total difference.
                for (var i = 0; i < thisUser.answers.length; i++) {
                    var otherAnswer = user.answers[i];
                    var thisAnswer = thisUser.answers[i];
                    var difference = +otherAnswer - +thisAnswer;
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });

            // Find the min dif
            var minimumDifference = Math.min.apply(null, differences);

            // Create array to catch all.
            var bestMatches = [];

            //if equal to min dif push into array
            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(friends[i]);
                }
            }

            // Then send bestMatches to the client
            res.json(bestMatches);
        // return only friend if just one value
        } else {
            res.json(friends);
        }

        // Once you're done comparing, add the new user to the potential friends data
        friends.push(thisUser);

    });

    
}