// Variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var initialTime = 10;
var totalScore = 0;

var myObject = {
    firstPropperty: 'stuff'
}



console.log(myObject.firstPropperty)
// our variable questions hold the questions, answers, and and correct answer, 
// also includes an image of the player
var questions = [
    {
        question: 'this is question 1',
        choices: ['choice 1 ', ' choice 2 '],
        correctAnswer: 'choice 2',
        image: 'assets/images/rivaldo.jpeg',
    },
    {
        question: 'this is question 2',
        choices: ['hola ', ' sayonara '],
        correctAnswer: 'hola',
        image: 'assets/images/ronaldo.jpeg',
    },
    {
        question: 'this is question 3',
        choices: [' bondia', '  todo belesa '],
        correctAnswer: 'choice 1',
        image: 'assets/images/kaa.jpeg',
    }
]

// Function start coundown take cares of the time
var startCountdown = function() {
    setInterval(function() {
        // initialTime = initialTime - 1
        initialTime--;
        // console.log(initialTime)
        $('#clock').text("you Have "+initialTime+ " Seconds Left");
    }, 1000)
}

// Dynamically append html with jquery
// with this for loop we will display the questions an answers
//funtion renderquestion give us the question an answers in the webpage
function renderquestion(currentQuestion){
    
    var i = currentQuestion;
    var questiones = questions[i].question;
    $("#fotos").html("<img src=" + questions[i].image + " width='400px'>");
    $("#questions").html("<div class='list-group-item'>"+ questiones + "</div>");
    for(var j = 0; j < questions[i].choices.length; j++) {
        $("#answ").append("<div class='btn btn-light'>"+ questions[i].choices[j] + "</div>");
        
          
      }  
      $("#answ").click(function(event) {
        var userguess = event.target.textContent;
    //  console.log(event.target.textContent);
       console.log(userguess);
       
    });    
    i++;
}

// function reset(){
//     initialTime =10;

// }

// function answerCheck(){

//     var chose;
//     $("answ").on("click", function() {
//         chose = questions[i].choices;
//         console.log(chose);

   
//       }); 
// }

// main funtion runs everything 
function mainFunction() {
    
    startCountdown();
    var currentQuestion = 0;
    renderquestion(currentQuestion);
      
   
  
    // $("#answ").click(function(event) {
    //     var userguess = event.target.textContent;
    // //  console.log(event.target.textContent);
    //    console.log(userguess);
       
    // });   
    
for(var k=0; k < questions.length; k++){
    // if(currentQuestion < questions.length){
        var userguess = questions[k].choices;
        
    if(userguess === questions.correctAnswer && initialTime >= 0){

        correct ++;
        currentQuestion ++;
        initialTime = 10
        console.log(correct);
        console.log(currentQuestion);
        



    // if they choose wrong
    // increment wrongAnswer counter
    }else if(userguess != questions.correctAnswer && initialTime >= 0){

        incorrect ++;
        currentQuestion++
        initialTime = 10
        console.log(correct);
        console.log(currentQuestion);
       

     

    }else if(initialTime <= 0){
        unanswered ++;
        console.log(unanswered);

    }

    // }

    }
}
mainFunction();

// intial start trivia functions



// 

// renderQuestion
// add onClick to the choices
// check if the answer they clicked on is the correct answer


// if time is up
    // then act like they choose the wrong answer

// render the next Question 
// currentQuestion++;

// if no more questions












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
