$(document).ready(function() {

var count = 0;
var correct = 0;
var wrong = 0;

var quizQuestions = [
    { 
        q :"Which one of these is NOT a name of a Spice girl", 
        answers: ["Scary Spice", "Posh Spice", "Ginger Spice", "Smelly Spice"],
        correctAnswer: "Smelly Spice",
        image: "./assets/images/spiceGirls.gif"
    },
    {
        q: "What is the name of Andy's bank in Parks and Rec?",
        answers: ["Snakehole Club", "Cockroach", "Mouse Rat", "Pest Control"],
        correctAnswer: "Mouse Rat",
        image:"./assets/images/mouserat.gif"
    }

]

function yay() {
    correct++;
    console.log(correct);
    $('#questions').empty();
    $('#answers').empty(); //clearing answers to show message
    $('#user-message').text("Yas qween!");
    $('#image').html("<img src="+quizQuestions[count].image+">")
    count++;
    var windowTimeout = setTimeout(function() {
        playGame(quizQuestions[count]);
      }, 5000); //wait to start next question

}

function nay() {
    wrong++;
    console.log(wrong);
    $('#questions').empty();
    $('#answers').empty(); //clearing answers to show message
    $('#user-message').text("NOPE! ");
    $('#user-message').append("The correct answer is: "+quizQuestions[count].correctAnswer);
    $('#image').html("<img src="+quizQuestions[count].image+">");
    count++;
    var windowTimeout = setTimeout(function() {
        playGame(quizQuestions[count]);
      }, 5000); //wait to start next question
}

function playGame(quizQuestion){
   //clear button
   $('#start-here').html(""); 
   $('#answers').empty(); //clearing previous answers
   $('#user-message').html(""); 
   $('#image').html(""); 
   console.log("Inside playGame");
   
   //print question
   console.log(quizQuestion.q);
   $('#questions').text(quizQuestion.q);

   //print multiple choice answers
   $.each(quizQuestion.answers, function(key, value ) {
    $('#answers').append("<h2 id=\"answer-item\">"+value+"</h2>")
    console.log(value);
  });

   console.log("Before clicking") ;
  //check answer
  $("h2[id*='answer-item']").on("click", function(){
      console.log("Checking answer", $(this).text(), "vs", quizQuestion.correctAnswer)
    if ($(this).text() === quizQuestion.correctAnswer) {
        yay();
    } else {
        nay();
    }
  });

}
function initializeGame () {
    console.log(count);
    if (count===0 || count === quizQuestions.length){
        console.log("Start Game");
        $('#start-here').html("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">"+"Start here"+"</button>");
        correct=0;
        wrong=0;

    }
    $('#start-here').on("click",function(){
        playGame(quizQuestions[count]);
    });
}
initializeGame();

});