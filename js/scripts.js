NUMBER_OF_QUESTIONS = 6

function disableSubmit () {
  $("#submit").prop("disabled", "true");
}

function enableSubmit() {
  $("#submit").removeAttr("disabled");
}

function validateInput() {
  var count = countChecked();
  if (count === NUMBER_OF_QUESTIONS) {
    enableSubmit();
  }
}

// write function to count how many answers are checked
function countChecked() {
  var answerCount = $("input[name^=question]:checked").length
  return answerCount;
}

function tally() {
  var questions = $(".radio");
  var rubyTally = 0;
  var cSharpTally = 0;
  var cssTally = 0;
  var tallies = [];

  // loop through questions and log value of checked answer
  for (i = 1; i < questions.length + 1; ++i) {
    var questionNumber = "question" + i;
    var answer = $("input[name=" + questionNumber + "]:checked").val();
    if (answer === "ruby") {
      ++rubyTally;
    }
    else if (answer === "c-sharp") {
      ++cSharpTally;
    }
    else if (answer === "css") {
      ++cssTally;
    }
    else {
      return "Something went wrong with the tally function";
    }
  }

  // finally, return the tallies for each track (ruby, C#, CSS)
  tallies.push(rubyTally);
  tallies.push(cSharpTally);
  tallies.push(cssTally);
  return tallies;
}

function ShowSuggestion() {
  tallies = tally();
  console.log(tallies);
  var rubyTally = tallies[0];
  var cSharpTally = tallies[1];
  var cssTally = tallies[2];
  if ((rubyTally > cSharpTally) && (rubyTally > cssTally)) {
    $(".suggestion-ruby").show();
  } else if ((cSharpTally > rubyTally) && (cSharpTally > cssTally)) {
    $(".suggestion-c-sharp").show();
  } else if ((cssTally > rubyTally) && (cssTally > cSharpTally)) {
    $(".suggestion-css").show();
  } else if ((rubyTally === cSharpTally) && (rubyTally === cssTally)) {
    $(".multiple").show();
    $(".suggestion-css").show();
    $(".suggestion-ruby").show();
    $(".suggestion-c-sharp").show();
  } else if (rubyTally === cSharpTally) {
    $(".multiple").show();
    $(".suggestion-ruby").show();
    $(".suggestion-c-sharp").show();
  } else if (rubyTally === cssTally) {
    $(".multiple").show();
    $(".suggestion-css").show();
    $(".suggestion-ruby").show();
  } else if (cSharpTally === cssTally) {
    $(".multiple").show();
    $(".suggestion-css").show();
    $(".suggestion-c-sharp").show();
  } else {alert("Something went wrong with the ShowSuggestion fucntion")}
}


$(document).ready(function(){
  disableSubmit();

  $("label").click(function() {
    validateInput();
  });

  $("#submit").click(function(e){
    e.preventDefault()

    // also on Submit, hide quiz and show relevant suggestion
    $(".quiz").hide();
    ShowSuggestion();
  });
});
