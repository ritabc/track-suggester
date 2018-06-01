function countRuby() {
  var rubyTally = 0;
  var questions = $(".radio");

  // loop through questions and increment tally variable if val="ruby"
  for (i = 1; i < questions.length + 1; ++i) {
    questionNumber = "question" + i;
    test = $([type="radio"]:checked);
    console.log(test);
  };
}

$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    countRuby();

  });


});
