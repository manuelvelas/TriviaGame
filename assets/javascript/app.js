// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var initialTime = 60;
var totalScore = 0;

var myObject = {
    firstPropperty: 'stuff'
}

console.log(myObject.firstPropperty)

var questions = [
    {
        question: 'this is question 1',
        choices: ['choice 1 ', ' choice 2 '],
        correctAnswer: 'choice 2',
        image: 'assets/images/rivaldo.jpeg',
    },
    {
        question: 'this is question 2',
        choices: [' hola ', ' sayonara '],
        correctAnswer: 'choice 1',
        image: 'assets/images/ronaldo.jpeg',
    },
    {
        question: 'this is question 3',
        choices: [' bondia', '  todo belesa '],
        correctAnswer: 'choice 1',
        image: 'assets/images/kaa.jpeg',
    }
]

// Functions
var startCountdown = function() {
    setInterval(function() {
        // initialTime = initialTime - 1
        initialTime--;
        // console.log(initialTime)
        $('#clock').text(initialTime)
    }, 1000)
}

// Dynamically append html with jquery
// with this for loop we will display the questions an answers

function renderquestion(){

for (i = 0; i <= questions.length -1; i++) {
    var questiones = document.querySelector("#questions").text = questions[i].question;
    // var questiones = questions[i].question;
    var respuesta = document.querySelector("#answ").text = questions[i].choices;
    // var respuesta = questions[i].choices;
    $("#image-holder").html("<img src=" + questions[i].image + " width='400px'>");
    $("#questions").text(questiones);
    $("#answ").text(respuesta);
    console.log(questions[i].question);
    console.log(respuesta);
// // questions.forEach(function(element, i) {
//     var question = questions[i].question;*
//     var respuesta = questions[i].choices;*
//     var div = $('<div>').addClass('.card');*
//     var divCard = $('<div>').addClass('.card-body');*
//     var pregunta = $('<h5>').addClass('.card-title').text(question);*
//     var userpick = $('<h6>').addClass('.card-answer').text(respuesta);*
   
    
//     // pregunta.append(divCard);
//     // divCard.append(div);
    
//     console.log(question);*
//     console.log(respuesta);*
//     // div.append(divCard).append(pregunta);
//     $('#questions').append(div, [divCard, pregunta]);*
//     $('#questions').append(div, [divCard, respuesta]);*
//     // $("#cardtitle").text(pregunta);
//     // $('#questions').append(div, [divCard, [pregunta]])
// // })
}
}


// Event Listeners



// intial start trivia functions
startCountdown();
renderquestion();