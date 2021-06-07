"use strict"
var questions = [
  {
    question: "It is the sequence of steps necessary to solve any problems. ",
    choices: ["a.	Web system ", "b.	Application Software", "c.	Algorithm ", "d.	Binary Language"],
    correctAnswer: 2
  },
  {
    question: "It is used as a machine language using 0s and 1s.  ",
    choices: ["a.	Binary Language.", "b.	C++", "c.C#", "d. Javascript"],
    correctAnswer: 1
  },
  {
    question: "The Hardware Component that Processes Data.  ",
    choices: ["a.	Motherboard", "b.	Graphics processing unit (GPU)", "c.	RAM", "d.	Central Processing Unit (CPU)"],
    correctAnswer: 3
  },
  {
    question: "It designates the end of a pseudocode structure.  ",
    choices: ["a.	Start-end Statement.", "b.	Dual", "c.	End-structure Statement.", "d.	Block"],
    correctAnswer: 2
  },
  {
	question: "It is another name for a selection structure. ",
    choices: ["a.	If-then-else", "b.	If and only If", "c.	Loop Body", "d.	Loop Structure"],
    correctAnswer: 0
  },
  {
	question: "It contains two or more conditions, and all conditions must be true for an action to take place. ",
    choices: ["a.	IF Decision", "b.	WHICH Decision", "c.	WHEN Decision", "d.	AND Decision"],
    correctAnswer: 3
  },
  {
	question: "It represents one or two states, usually true or false. ",
    choices: ["a.	Compound Condition", "b.	Boolean Expression", "c.	Else Clause", "d.	If-then Clause"],
    correctAnswer: 1
  },
  {
	question: "It can be used to code definite loops. It contains a loop control variable that it automatically initializes, evaluates, and increments. ",
    choices: ["a.	Definite Loop", "b.	For Statement ", "c.	Loop Statement", "d.	Counter"],
    correctAnswer: 1
  },
  {
	question: "It is any numeric variable you use to count the number of times an event has occurred",
    choices: ["a.	Counter", "b.	Accumulator", "c.	Decrement", "d.	Forcing"],
    correctAnswer: 0
  },
  {
	question: "It is a series or list of values in computer memory, all of which have the same name but are differentiated with special numbers call subscripts",
    choices: ["a.	Binary Search", "b.	Element", "c.	Array", "d.	Linear Search"],
    correctAnswer: 2
  },
  {
	question: "It is a single data item in an array. ",
    choices: ["a.	Array", "b.	Element", "c.	Flag", "d.	Indirect Relationship"],
    correctAnswer: 1
  },
  {
	question: "A small unit of Storage. ",
    choices: ["a.	Characters", "b.	Child File", "c.	Binary Files", "d.	Byte"],
    correctAnswer: 3
  },
  {
	question: "A loop in which the number of repetitions is a predetermined value.",
    choices: ["a.	Definite Loop", "b.	For Statement", "c.	Loop Statement", "d.	Counter"],
    correctAnswer: 0
  },
  {
	question: "English-like representation of the logical steps it takes to solve a problem. ",
    choices: ["a.	Flowchart", "b.	Pseudocode", "c.	Maintenance", "d.	Conversion"],
    correctAnswer: 1
  },
  {
	question: "Pictorial representation of the logical steps it takes to solve a problem ",
    choices: ["a.	Flowchart", "b.	Pseudocode", "c.	Maintenance", "d.	Conversion"],
    correctAnswer: 2
  },
  {
	question: "",
    choices: ["", "", "", ""],
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
