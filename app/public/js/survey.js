var callback = function(){
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








  };
  
  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }