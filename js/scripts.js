function tally() {
  var rubyTally = 0;
  var cSharpTally = 0;
  var cssTally = 0;
  var tallies = [];
  var questions = $(".radio");

  // loop through questions and log value of checked answer
  for (i = 1; i < questions.length + 1; ++i) {
    questionNumber = "question" + i;
    var answer = $("input[name=" + questionNumber + "]:checked").val();
    console.log(answer);
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

function returnSuggestion() {
  tallies = tally();
  var rubyTally = tallies[0];
  var cSharpTally = tallies[1];
  var cssTally = tallies[2];
  if ((rubyTally > cSharpTally) && (rubyTally > cssTally)) {
    return "ruby"
  } else if ((cSharpTally > rubyTally) && (cSharpTally > cssTally)) {
    return "c-sharp"
  } else if ((cssTally > rubyTally) && (cssTally > cSharpTally)) {
    return "css"
  } else if ((rubyTally === cSharpTally) && (rubyTally === cssTally)) {
    return "all"
  } else if (rubyTally === cSharpTally) {
    return "ruby and c-sharp"
  } else if (rubyTally === cssTally) {
    return "ruby and css"
  } else if (cSharpTally === cssTally) {
    return "s-sharp and css"
  } else {alert("Something went wrong with the returnSuggestion fucntion")}
}

$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault()

    // also on Submit, 1) hide quiz and 2) show relevant suggestion
    $(".quiz").hide();
    var suggestion = returnSuggestion();
    console.log(suggestion);
  });
});
