function tally() {
  var rubyTally = 0;
  var cSharpTally = 0;
  var cssTally = 0;
  var tallies = [];
  var questions = $(".radio");

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

function returnSuggestion() {
  tallies = tally();
  console.log(tallies);
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

// write function to count how many answers are checked
function countChecked() {
  // console.log("Reached");
  // var count = 0;
  // var questions = $(".radio");
  // for (i = 0; i < questions.length; ++i) {
    // var questionNumber = "question" + i;
  var lengthVar = $("input[name^=question]:checked").length
  console.log(lengthVar)
    // if ($("input[name=" + questionNumber + "]:checked").length === 6 {
    //   ++count;
    //   console.log(count)
    // }
  // }
}

$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault()

    // also on Submit, 1) hide quiz and 2) show relevant suggestion
    $(".quiz").hide();
    // var suggestion = returnSuggestion();
    countChecked();
    // console.log(suggestion);
  });
});
