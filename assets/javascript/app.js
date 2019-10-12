$(document).ready(function() {

var count = 0;
var quizQuestions = [
    { 
    q :"Which one of these is NOT a name of a Spice girl", 
    answers: ["Scary Spice", "Posh Spice", "Ginger Spice", "Smelly Spice"],
    correctAnswer: "Smelly Spice",
    image: "/assets/images/spiceGirls.gif"
    }
]

function playGame(quizQuestion){
   //clear button
   $('#start-here').html(""); 
   console.log("Inside playGame");
   
   //print question
  // $('#questions').text(quizQuestion.q);
   console.log(quizQuestion.q);

   //print multiple choice answers
   $('#answers').html("<ul class=\"list-group\">");
   
   var secondKey = Object.keys(quizQuestion)[2]; 
   console.log("This is the secondKey",secondKey;
   console.log("Alternative print:", Object.keys(quizQuestion)[2].wrong2);

    for (key in quizQuestion) {
        console.log("key: " +   quizQuestion[key]);
        $('#questions').text(quizQuestion.q);
    }

    for (var i=0; i<4; i++);
    {

    }
}

function initializeGame () {
    console.log(count);
    if (count===0 || count === quizQuestions.length){
        console.log("Start Game");
        $('#start-here').html("<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">"+"Start here"+"</button>");
    }
    $('.btn').on("click",function(){
        playGame(quizQuestions[count]);
    });
}

initializeGame();

});