$(document).ready(function() {

var count = 0;
var correct = 0;
var wrong = 0;
var number = 30; //This shall be decreased
var intervalId; //I'll use this for countdown

var quizQuestions = [
    { 
        q: "Which one of these is NOT a name of a Spice girl", 
        answers: ["Scary Spice", "Posh Spice", "Ginger Spice", "Smelly Spice"],
        correctAnswer: "Smelly Spice",
        image: "./assets/images/spiceGirls.gif"
    },
    {
        q: "What is the name of Andy's bank in Parks and Rec?",
        answers: ["Snakehole Club", "Cockroach", "Mouse Rat", "Pest Control"],
        correctAnswer: "Mouse Rat",
        image: "./assets/images/mouserat.gif"
    },
    {
        q: "According to Michael Scott, how many salaries should an engagement ring cost?",
        answers: ["3 months", "3 years", "1 year", "6 months"],
        correctAnswer: "3 years",
        image: "./assets/images/michaelholly.gif"
    }

];

function clearMessages()
{
    clearInterval(intervalId);
    $('#time-remaining').empty();
    $('#questions').empty();
    $('#answers').empty(); //clearing answers to show message
    $('#start-here').empty(); 
    $('#question-count').empty();
    $('#user-message').html(""); 
    $('#image').html(""); 
}

function checkStatus() { //Checks counter status
    if (count===0 || count === quizQuestions.length){
        count=0;
        var windowTimeout = setTimeout(function(){
            initializeGame();
        },3000);
    } else {
        var windowTimeout = setTimeout(function() {
            playGame(quizQuestions[count]);
          }, 3000); //wait to start next question

    } 
}

function yay() { //this is what happens if you choose the right answer
    correct++;
    console.log("Correct answers:", correct);
    //some UX stuff here
    clearMessages();
    $('#user-message').text("YAAAAS QWEEEN! ");
    $('#image').html("<img src="+quizQuestions[count].image+">")
    count++; 
    checkStatus();
}

function nay() { //this is what happens if you choose the wrong answer
    wrong++;
    console.log("Wrong answers:", wrong);
    //some UX stuff here
    clearMessages();
    $('#user-message').text("NOPE! ");
    $('#user-message').append("<br>The correct answer is: "+quizQuestions[count].correctAnswer);
    $('#image').html("<img src="+quizQuestions[count].image+">");
    count++;
    checkStatus();
}

function timesUp(){ //this is what happens if your time is up
    wrong++;
    console.log("Wrong answers:", wrong);
    clearMessages(); 
    $('#user-message').text("Time's Up! ");
    $('#user-message').append("<br>The correct answer is: "+quizQuestions[count].correctAnswer);
    $('#image').html("<img src="+quizQuestions[count].image+">");
    count++;
    checkStatus();
}

function playGame(quizQuestion){
   //clear functionalities, resetting number too
   number=30;
   clearMessages();
   console.log("Inside playGame");
   
   //print question 
   console.log(quizQuestion.q);
   $('#question-count').text('Question: '+(count+1)+" of "+quizQuestions.length);
   $('#questions').text(quizQuestion.q);

   //print multiple choice answers
   $.each(quizQuestion.answers, function(key, value ) {
    $('#answers').append("<h2 id=\"button-style\">"+value+"</h2>")
    console.log(value);
  });

  //set timer
  intervalId = setInterval(function decrement(){
    number--;
    $("#time-remaining").text(number+" seconds left!");
    if (number === 0) {
        timesUp();
    }}, 1000);

  //check answer
  $("h2[id*='button-style']").on("click", function(){ //REUSABLE CODEEEEEEE
      console.log("Checking answer", $(this).text(), "vs", quizQuestion.correctAnswer)
    if ($(this).text() === quizQuestion.correctAnswer) {
        yay(); //or how to avoid clicks stacking up
    } else {
        nay(); //or how to avoid clicks stacking up
    }
  });

}
function initializeGame () {

    clearMessages();
    console.log("Start Game");
    $('#start-here').html("<h2 id=\"button-style\">"+"Start here"+"</h2>");
    correct=0;
    wrong=0;
    $('#start-here').on("click",function(){
        playGame(quizQuestions[count]);
    });
}
initializeGame();

});