var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Akash",
    score: 3,
  },

  {
    name: "Rahul",
    score: 4,
  },
]

var questions = [{
  question: "Where do I live? ",
  answer: "Ludhiana"
}, {
  question: "My favorite Movie character is? ",
  answer: "Sherlock Holmes"
},
{
  question: "In which month does his birthday falls? ",
  answer: "June",
},
{
 question: "What is his best friend's name? ",
  answer: "Shivam",
},
{
 question: "What rank did he got in NIMCET? ",
  answer: "349",
}
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Ranjeet?");
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
