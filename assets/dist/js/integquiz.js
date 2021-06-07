"use strict"
var questions = [
  {
    question: "∫(1+3t) t^2  dt ",
    choices: ["a.t^3/3+(3t^4)/4+C ", "b.t^3/3+(3t^3)/3+C ", "c. 3t^3/3+t^4/4+C", "d. t^4/4+(3t^4)/4+C"],
    correctAnswer: 0
  },
  {
    question: "∫7 cos⁡(5x)dx",
    choices: ["a.(3 sin⁡(5x))/7+C", "b.(7 sin⁡(5x))/5+C", "c.(5 sin⁡(5x))/7+C", "d.(7 sin⁡(5x))/3+C"],
    correctAnswer: 1
  },
  {
    question: "∫9 sin⁡(3x)dx ",
    choices: ["a.	3sin(3x) + C", "b.	3cos(3x) + C", "c.	-3sin(3x) + C", "d.	-3cos(3x) + C"],
    correctAnswer: 3
  },
  {
    question: "∫(x^(3/2)+2x+3)dx ",
    choices: ["a.((2x^(5/2))/5)+x^2+3x+C", "b.((2x^(5/2))/5)+x^3+2x+C", "c.((2x^(5/2))/5)+x^2+4x+C", "d.((2x^(5/2))/5)+x^4+x+C"],
    correctAnswer: 0
  },
  {
    question: "∫-13e^6t  dt",
    choices: ["a. –(13e^6t)/6+ C", "b.(13e^6t)/6  + C", "c.–(14e^5t)/5+ C", "d.(14e^5t)/5+ C"],
    correctAnswer: 0
  },
  {
    question: "∫(8/x  –5/x^2   +6/x^3   ) dx",
    choices: ["a. 3/2 x^(3/2) +2/3 x^(1/2) + C", "b.2/3 x^(3/2)-2/3 x^(1/2)  + C", "c.3/2 x^(3/2)-2/3 x^(1/2)  + C", "d.2/3 x^(3/2)  +2/3 x^(1/2)  + C"],
    correctAnswer: 1
  },
   {
    question: "∫4 sin (x/3) dx",
    choices: ["a. 12cos(3/x)  + C", "b.	-12 sin (3/x)  + C", "c.12 sin (x/3) + C", "d.-12cos (x/3) + C"],
    correctAnswer: 3
  },
   {
    question: "∫-5 cos⁡〖πx dx〗",
    choices: ["a. -  (5 sin⁡(πx))/π+C", "b.(5 sin⁡(πx))/π+C", "c.(5 sin⁡(x))/π+C", "d.	-(5 sin⁡(x))/π+C"],
    correctAnswer: 0
  },
   {
    question: "∫〖12 cos⁡〖(4∅)d∅〗 〗 ",
    choices: ["a. 3 sin⁡〖4∅〗+C", "b.〖- 3 sin〗⁡〖4∅〗+C", "c.〖3 cos〗⁡〖4∅〗+C", "d.〖-3 cos〗⁡〖4∅〗+C"],
    correctAnswer: 0
  },
  {
    question: "∫5 cos (theta) dtheta",
    choices: ["a. -5cos (theta)+C", "b.	5cos (theta) + C", "c.3	5sin (theta) + C", "d.	-5sin (theta) + C"],
    correctAnswer: 2
  },
  {
    question: "∫4e^(-7x)  dx",
    choices: ["a. (4e^(-7x))/7+C", "b.-(4e^(-7x))/7+C", "c.	(4e^7x)/7+C", "d.-(4e^7x)/7+C"],
    correctAnswer: 1
  },
  {
    question: "∫-13 e^6t dt",
    choices: ["a.13 e^6t / 6 + C", "b.	13 e^-6t / 6 + C", "c.-13 e^e-6t / 6 + C", "d.-13 e^6t / 6 + C"],
    correctAnswer: 3
  },
  {
    question: "∫d(theta) ",
    choices: ["a. theta +C", "b.-(theta)+C", "c.-2(theta) + C", "d.	2 (theta)+C"],
    correctAnswer: 0
  },
  {
    question: "∫7 sin (x) dx ",
    choices: ["a.7cos (x) + C", "b.-7cos (x) + C", "c.7sin (x) + C", "d.-7sin (x) + C"],
    correctAnswer: 1
  },
  {
    question: "(2t^2 – 1) ^2 dt ",
    choices: ["a.-4t^5/5 – 4^t3/3 + t + C", "b.4t^5/5 + 4^t3/3 - t + C", "c.	4t^5/5 + 4^t3/3 + t + C", "d.	4t^5/5 – 4^t3/3 + t + C"],
    correctAnswer: 3
  }
  
 
];


/* MODEL
  - functions that deal with the data
*/
function Question(num) {
  this.num = num;
  this.question = questions[num].question;
  this.choices = questions[num].choices;
  this.correctAnswer = questions[num].correctAnswer;
}
Question.prototype.getQuestion = function(num) {
  return questions[num];
};

/* CONTROLLER
  - logic that coordinates between model and view
*/
function Quiz(questions) {
  this.questions = questions;

  this.userAnswers = [];
}
Quiz.prototype.startQuiz = function(game) {
  this.num = 0;
  this.score = 0;

  var currentQuestion = new Question(this.num);
  game.showQuestion(currentQuestion.getQuestion(this.num));
};
Quiz.prototype.nextQuestion = function(choice) {
  var currentQuestion = new Question(this.num);
  if (this.checkAnswer(choice, currentQuestion.getQuestion(this.num))) {
    quiz.score++;
  }
  if (this.num + 1 >= questions.length) {
    this.endQuiz(this.score, this.userAnswers);
  }
  else {
    this.num++;
    var currentQuestion = new Question(this.num);
    game.showQuestion(currentQuestion.getQuestion(this.num));
  }
};
Quiz.prototype.checkAnswer = function(choice, currentQuestion) {
  this.currentQuestion = currentQuestion;
  this.choice = choice;
  this.userAnswers.push(this.choice);
  return currentQuestion.correctAnswer == choice;
};
Quiz.prototype.showAnswers = function(userAnswers) {
  var answers = "<h3>Answers (incorrect in red): </h3><ol>";
  var userAnswers = this.userAnswers;

  this.questions.forEach(function(question, index) {
    // if the correct answer doesn't match the user's answer, change styling
    if (question.correctAnswer != userAnswers[index]) {
      answers += "<li><p>" + question.question + "</p><p><b class='red'>" + question.choices[question.correctAnswer] + "</b></p></li>";
    }
    else {
      answers += "<li><p>" + question.question + "</p><p>" + question.choices[question.correctAnswer] + "</p></li>";
    }
    // if it's the last question, don't add a comma to the string
    if (index === questions.length - 1) {
      answers += "</ol>";
    }
  });
  return answers;
};
Quiz.prototype.endQuiz = function(score, userAnswers) {
  this.score = score;
  this.userAnswers = userAnswers;
  this.answers = this.showAnswers(this.userAnswers);
  game.resetQuiz(this.score, this.answers);
};


/* VIEW
  - displays data to user and handles click events
*/
function Game(quiz) {
  this.quiz = quiz;
}
$("#next").click(function() {
  var choice = $(".choices input[name=choice]:checked").val()
  if (choice == undefined) {
    $("#question-group").effect("shake");
    return;
  }
  quiz.nextQuestion(choice);
});
$("#reset").click(function() {
  $("#next").toggleClass("hide");
  $("#reset").toggleClass("hide");
  $("#answers").empty();

  $("#score").empty();
  game.newGame();
});
$("#show-answers").click(function() {
  $(this).parent().toggleClass("hide");
});
Game.prototype.showQuestion = function(currentQuestion) {
  this.currentQuestion = currentQuestion;
  var radios = "";

  $("#question").text(this.currentQuestion.question);
  for (var i = 0; i < this.currentQuestion.choices.length; i++) {
    radios += "<label><input type='radio' class='choice' name='choice' value='" + i + "'>" + this.currentQuestion.choices[i] + "</label>";
  }
  $(".choices").html(radios);
};
Game.prototype.resetQuiz = function(score, answers) {
  this.score = score;

  $("#question").text("Quiz Complete");
  $("#score").text("You scored " + this.score + " points!");
  $("#answers").html(answers).toggleClass("hide");

  $(".choices").empty();
  $("#next").toggleClass("hide");
  $("#reset").toggleClass("hide");
};
Game.prototype.newGame = function() {
  this.quiz = new Quiz(questions);
  game = new Game(this.quiz);
  quiz.startQuiz(game);
};

var quiz = new Quiz(questions);
var game = new Game(quiz);
quiz.startQuiz(game);
