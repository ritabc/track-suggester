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
      return "Something went wrong"
    }
  }

  tallies.push(rubyTally);
  tallies.push(cSharpTally);
  tallies.push(cssTally);
  console.log(tallies)
  return tallies;
}

$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    tally();
  });


});
