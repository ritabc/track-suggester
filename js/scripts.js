function countRuby() {
  var rubyTally = 0;
  var questions = $(".radio"); 

  // loop through question1 answers and return value of checked answer
  for (i = 1; i < questions.length + 1; ++i) {
    questionNumber = "question" + i;
    //
    test = $("input[name=question1]:checked", "#quiz").val();
    console.log(test);
  };
}

$(document).ready(function(){
  $("#submit").click(function(e){
    e.preventDefault();
    countRuby();

  });


});
