//Create variables that will be used for game
var triviaQuestions = [
{question: "Which character is the strongest?",
choices: ["Goku", "Beerus", "Frieza"],
correctAnswer: "Beerus"
},
{question: "What wearable item is used to detect power levels?",
choices: ["Scouter", "Radar", "Gauger"],
correctAnswer: "Scouter"
},
{question: "Who is Buu's best friend?",
choices: ["Bulma", "Raditz", "Hercule"],
correctAnswer: "Hercule"
},
{question: "What kind of bean can heal a fighter?",
choices: ["Senzu Bean", "Dragon Bean", "Demon Bean"],
correctAnswer: "Senzu Bean"
},
{question: "What was the power level of the farmer in the first episode?",
choices: ["10", "5", "2"],
correctAnswer: "5"
},
]

var counter = 30;
var score = 0;
var missed = 0;
var currentQuestion = 0;
var timer; 


//On-click function to make game start when start button is pressed
$(document).on('click', '#start', function() {
    $('#start').remove();
    $('#time').html(counter);
    showQuestion();
    });



//function needed to put the questions and options list on the screen
function showQuestion() {
    counter = 30;
    timer = setInterval(countDown,1000);

    var question = triviaQuestions[currentQuestion].question;
    var choices = triviaQuestions[currentQuestion].choices;

    $('#time').html('Seconds Left: ' + counter);
    $('#questionSection').html(`
    <h2>${question}</h2>
    ${showChoices(choices)}
    `);
}

//function to itterate through the choices of each question 
function showChoices(choices){
    var result = '';
    for (var i = 0; i < choices.length; i++){
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }
        return result;
}

//function to make timer count down to 0 and do something if the timer counts to 0
function countDown(){
    counter--;
    $('#time').html('Seconds Left: ' + counter);
    if (counter === 0){
        timeOver()
    }
}

//function to be called by the countdown when time runs out
function timeOver(){
    missed++;
    clearInterval(timer);
    nextQuestion();

}

//function to move on to next question if time is over and stop when there are no questions left
function nextQuestion() {
    var questionsOver = (triviaQuestions.length - 1) === currentQuestion;
    if (questionsOver) {
        console.log("game over");
    } else {
        currentQuestion++;
        showQuestion();
    }
}

//on-click function to determine if choice selected is right or wrong based on data-answer
$(document).on('click', '.choice', function() {
    clearInterval(timer);
    var rightAnswer = triviaQuestions[currentQuestion].correctAnswer;
    var buttonClicked = $(this).attr('data-answer');
    if (rightAnswer === buttonClicked) {
        score++;
        console.log("yes");
        nextQuestion();
    } else {
        missed++;
        console.log("no");
        nextQuestion();
    }
})


//Function call to test code
// showQuestion()
