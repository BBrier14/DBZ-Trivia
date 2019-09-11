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
    
}

//Function call to test code
showQuestion()
