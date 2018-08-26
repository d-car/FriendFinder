$(document).ready(function() {
    
    // Qs array
    var questions = [
        "I like to go out rather than stay in.",
        "I like to read books over watching tv or movies.",
        "I like dogs more than cats.",
        "I am a picky eater.",
        "I like winter over summer.",
        "I like to travel.",
        "I enjoy cooking for myself and others.",
        "I would rather live in a small town than a big cty.",
        "I enjoy working out.",
        "I like to drink."
    ];

    // Answer choices
    var choices = [
        '1 (Strongly Disagree)',
        '2 (Disagree)',
        '3 (Neutral)',
        '4 (Agree)',
        '5 (Strongly Agree)'
    ];

    // Identify div where questions will be inserted and initialize counter to 0.
    var questionDiv = $('#surveyQs');
    i = 0;

    // For each question, create a div.
    questions.forEach(function (question) {
        i++;
        // Fill that div with a header, the question, and the choices selector.
        var item = $('<div class="question">');
        var headline = $('<h4>').text('Question ' + i);
        var questionText = $('<p>').text(question);
        var dropDown = $('<div class="form-group">');
        var select = $('<select class="form-control selector">');
        // Create an option for each choice.
        choices.forEach(function(choice) {
            var option = $('<option>').text(choice);
            select.append(option);
        });
        select.attr('id', 'select' + i);
        // Add the dropdown to the item, then add the item to the questions div.
        dropDown.append(select);
        item.append(headline, questionText, dropDown);
        var br = $('<br>');
        questionDiv.append(item, br);
    });

    // Event handler for when the form is submitted.
    $('#submit').on('click', function(event) {

        // Prevent reload.
        event.preventDefault();

        // Capture username and image link values.
        var userName = $('#userName').val();
        var imageLink = $('#imageLink').val();

        // If both of those items were filled out, gather other answers and submit.
        if (userName.length > 0 && imageLink.length >0) {
            var answers = [];

            // Add the response for each selector to the array of answers.
            Object.keys($('.selector')).forEach(function(key) {
                if (answers.length < questions.length) {
                    // Take only the first character of the answer, which is the number.
                    answers.push($('.selector')[key].value.charAt(0));
                }
            });

            // Data into object
            var surveyData = {
                name: userName,
                photo: imageLink,
                answers: answers
            };

            // POST data to route
            $.post('/api/friends', surveyData, function(data) {

                // display result
                if (data) {

                    // Empty out modal and username and link fields.
                    $('.modal-body').empty();
                    $('#userName').val('');
                    $('#imageLink').val('');

                    // results array, grab name and pic
                    data.forEach(function(profile) {
                        var profileDiv = $('<div class="profile">');
                        var name = profile.name;
                        var photoURL = profile.profilePic;
                        // Put the name in a header.
                        var nameHeader = $('<h3>').text(name);
                        // add src attribute
                        var photo = $('<img>').attr('src', photoURL);
                        profileDiv.append(nameHeader, photo);

                        // Add these items to the modal
                        $('.modal-body').append(profileDiv);
                    });

                    // If there is a tie for the best match and so you have more than one,
                    if (data.length > 1) {
                        // grammar fixes, my mother would have a fit
                        $('.modal-title').text('Your best matches!');
                    } else {
                        // more grammar
                        $('.modal-title').text('Your best match!');
                    }

                    // Display the result modal
                    $('#resultModal').modal();
                }
            });
        // If either name or URL is missing, show the error modal.
        } else {
            $('#errorModal').modal();
            // The error modal can be dismissed but it will also disappear after 3 seconds.
            setTimeout(function() {
                $('#errorModal').modal('hide');
            }, 3000);
        }
    });

});






