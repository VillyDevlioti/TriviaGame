$(document).ready(function() {

var count = 0;
var correct = 0;
var wrong = 0;
var number = 30; //This shall be decreased
var intervalId; //I'll use this for countdown

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
    //some UX stuff here
    clearInterval(intervalId);
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
    //some UX stuff here
    clearInterval(intervalId);
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

function timesUp(){
    wrong++;
    console.log(wrong);
    //some UX stuff here
    clearInterval(intervalId);
    $('#questions').empty();
    $('#answers').empty(); //clearing answers to show message
    $('#user-message').text("Time's Up! ");
    $('#user-message').append("The correct answer is: "+quizQuestions[count].correctAnswer);
    $('#image').html("<img src="+quizQuestions[count].image+">");
    count++;
    var windowTimeout = setTimeout(function() {
        playGame(quizQuestions[count]);
      });
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

  //set timer
  intervalId = setInterval(function decrement(){
    number--;
    $("#time-remaining").text("00:"+number);
    if (number === 0) {
        timesUp();
    }}, 1000);

   console.log("Before clicking") ;
  //check answer
  $("h2[id*='answer-item']").on("click", function(){ //REUSABLE CODEEEEEEE
      console.log("Checking answer", $(this).text(), "vs", quizQuestion.correctAnswer)
    if ($(this).text() === quizQuestion.correctAnswer) {
        yay(); //or how to avoid clicks stacking up
    } else {
        nay(); //or how to avoid clicks stacking up
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