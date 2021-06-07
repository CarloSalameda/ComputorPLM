"use strict"
var questions = [
  {
	question: "Find the differential equation whose solution is given by y = cx+c ",
    choices: ["a.	y' = (x+1)", "b.	y = y'", "c.	y=y'(x-1)", "d.	y = y' (x+1)"],
    correctAnswer: 3
  },
  {
	question: "Given: y = c1 e-x + c2 e2x, eliminate the arbitrary constants c1 and c2. ",
    choices: ["a.	y+y'' = 3c2e^-x", "b.	y+2y' = 3c2e^-x", "c.	y' = 6c2e^2x", "d.	none of the above"],
    correctAnswer: 3
  },
  {
	question: "Find the differential equation having the solution as y = a sin(x+b",
    choices: ["a.	y+y'' = 0", "b.	y+y'' = a cos (x+b)", "c.	y' = a cos (x+b)", "d.	y-y' = 0"],
    correctAnswer: 0
  },
  {
	question: "Differential equation of family of lines y=mx, where m is arbitrary constant is",
    choices: ["a.	y''=0", "b.	y=x+y", "c.	y=xy'", "d.	y'=0"],
    correctAnswer: 2
  },
  {
	question: "Differential equation of the curve y=Acosx-Bsinx, where A and B are arbitrary constant is ",
    choices: ["a.	y'' +xy=0", "b.	y''+y=0", "c.	y''-y=0", "d.	y''+x=0"],
    correctAnswer: 1
  },
  {
	question: "Differential equation representing the curve y=cx+c2 where c being arbitrary constant is ",
    choices: ["a.	y=xy'+(y)^2", "b.	y=xy' +y^2", "c.	y=xy'+(y' )^2", "d.	y=xy+(y')^2"],
    correctAnswer: 2
  },
  {
	question: "Solve the given differential equation by separation of variables. x(dy/dx)=6y ",
    choices: ["a.	y=6x", "b.	y=cx−6", "c.	y=x^6", "d.	y=cx^6"],
    correctAnswer: 3
  },
  {
	question: "Solve the following separable differential equation: y'=5yt^4 with y(0)=3",
    choices: ["	y=3e^t", "	y=3e^(t^5 )", "	y=3e^(t^4 )", "	y=3〖e^t〗^2"],
    correctAnswer: 1
  },
  {
	question: "Solve the general solution for the ODE: dy/dx=x^8 y (",
    choices: ["	ln⁡(y)=x^9/9+C", "b.	ln(y)=x8+C", "	y=x^9/9+C", "d. none of the above"],
    correctAnswer: 0
  },
  {
	question: "Determine the order and the degree of y’ + y = ex ",
    choices: ["a.	1,2", "b.	2,2", "c.	1,1", "d.	2,1"],
    correctAnswer: 2
  },
  {
	question: "Determine the order and the degree of (y’’’)2 +(y’’)3 + (y’)4 + y5 = 0 ",
    choices: ["a.	5,3", "b.	3,5", "c.	5,2", "d.	3,2"],
    correctAnswer: 3
  },
  {
	question: "What is the order and degree of the differential equation? (ds/dt)^4  + 3s(d^2s/(dt^2 ))  ",
    choices: ["a.	1,2", "b.	2,1", "c.	3,2", "d.	2,3"],
    correctAnswer: 1
  },
  {
	question: "What is the order of a differential equation? ",
    choices: ["a.	the highest power of y", "b.	the highest order of the derivative", "c.	The highest power of x", "d.	the coefficient of y"],
    correctAnswer: 1
  },
  {
	question: "What is the degree of the differential equation? (d^4y/(dx^4 ))  sin(y’’’)=0 ",
    choices: ["a.	4", "b.	2", "c.	6", "d.	Not Define"],
    correctAnswer: 3
  },
  {
	question: "What is the order and degree of the differential equation? (ds/dt)^4  + 3s(d^2s/(dt^2 ))  = 0",
    choices: ["a.	1,2", "b.	3,2", "c.	2,1", "d.	2,3"],
    correctAnswer: 2
  },
  
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
