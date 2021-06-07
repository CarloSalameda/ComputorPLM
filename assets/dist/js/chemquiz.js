"use strict"
var questions = [
  {
	question: "It is the scientific study of the properties and behavior of matter. ",
    choices: ["a.	Physics", "b.	Biology", "c.	Chemistry", "d.	Science"],
    correctAnswer: 2
  },
  {
	question: "The value of Avogardo’s Number. ",
    choices: ["a.	6.023 × 10^23", "b.	6.023 × 10^-23", "c.	6.023 × 10^18", "d.	6.023 × 10^-18"],
    correctAnswer: 0
  },
  {
	question: "Hardness is caused by",
    choices: ["a.	Salts of Ca & Mg", "b.	Dissolved salts of Ca & Mg", "c.	Salts of Na & K", "d.	All the above"],
    correctAnswer: 1
  },
  {
	question: "Energy that is stored in chemical bonds based on the position of the bonds and is then released as thermal energy through chemical reactions is. ",
    choices: ["a.	Thermal Energy", "b.	Chemical Kinetic Energy", "c.	Electrical Potential Energy", "d.	Charcoal is burned in a barbecue pit."],
    correctAnswer: 3
  },
  {
	question: "The Law of Conservation of Energy states that__________ ",
    choices: ["a.	The overall amount of energy remains the same, but some energy is destroyed during energy transformations.", "b.	The overall amount of energy can change depending on the energy conversions that take place.", "c.	The overall amount of energy remains the same energy cannot be created or destroyed.", "d.	The overall amount of energy can change because sometimes energy is lost to the environment"],
    correctAnswer: 2
  },
  {
	question: "What type of energy can chemical transform into? ",
    choices: ["a.	Electrical", "b.	Heat", "c.	Light", "d.	All the Above"],
    correctAnswer: 3
  },
  {
	question: "Energy of motion is which type of energy? ",
    choices: ["a.	Potential", "b.	Kinetic", "c.	Gravitational", "d.	Sound"],
    correctAnswer: 1
  },
  {
	question: "Energy that is transferred by objects touching is called. ",
    choices: ["a.	Induction", "b.	Convection", "c.	Conduction", "d.	Radiation"],
    correctAnswer: 2
  },
  {
	question: "On a roller coaster, where is maximum kinetic energy? ",
    choices: ["a.	At the bottom of a big hill", "b.	When going upside down", "c.	At the top of a big hill", "d.	When going around a corner"],
    correctAnswer: 0
  },
  {
	question: "The particles in an atom that are neutral and have no charge are... ",
    choices: ["a.	Negatrons", "b.	Electrons", "c.	Neutrons", "d.	Protons"],
    correctAnswer: 2
  },
  {
	question: "The central region of an atom where its neutrons and protons are its... ",
    choices: ["a.	Core", "b.	Nucleus", "c.	Electron Cloud", "d.	Center"],
    correctAnswer: 1
  },
  {
	question: "Electrons have what type of charge? ",
    choices: ["a.	Neutral", "b.	Positive", "c.	Neutron", "d.	Negative"],
    correctAnswer: 3
  },{
	question: "How many electrons are in the element oxygen",
    choices: ["a.	10", "b.	9", "c.	7", "d.	8"],
    correctAnswer: 3
  },
  {
	question: "Which statement best describes an electron? ",
    choices: ["a.	Greater mass than a proton and a negative charge.", "b.	Smaller mass than a proton and a negative charge", "c.	Smaller mass than a proton and a positive charge", "d.	Greater mass than a proton and a positive charge"],
    correctAnswer: 1
  },
  {
	question: "What does the nucleus consist of? ",
    choices: ["a.	Protons + Electrons", "b.	Neutrons + Electrons", "c.	Protons + Neutrons", "d.	Atoms"],
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
