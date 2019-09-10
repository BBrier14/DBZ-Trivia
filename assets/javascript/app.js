//Create variables that will be used for game
const triviaQuestions = [
{question: "Which character is the strongest?",
options: ["Goku", "Beerus", "Frieza"],
correctAnswer: "Beerus"
},
{question: "What wearable item is used to detect power levels?",
options: ["Scouter", "Radar", "Gauger"],
correctAnswer: "Scouter"
},
{question: "Who is Buu's best friend?",
options: ["Bulma", "Raditz", "Hercule"],
correctAnswer: "Hercule"
}]

var counter = 30;
var score = 0;
var missed = 0;
var currentQuestion = 0;
var timer; 

//function needed to put the questions and options list on the screen
function showQuestion() {
    var question = triviaQuestions[currentQuestion].question;
    var choices = triviaQuestions[currentQuestion].options;
    $('#time').html(counter);
    $('#questionSection').html(question);

}
