$(document).ready(function() {
    
    // Qs array
    var questions = [
        "I like to go out rather than stay in.",
        "I like to read books over watching tv or movies",
        "I like dogs more than cats",
        "I am a picky eater",
        "I like winter over summer",
        "I like to travel",
        "I enjoy cooking for myself and others.",
        "I would rather live in a small town than a big cty.",
        "I enjoy working out",
        "I like to drink"
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

});






