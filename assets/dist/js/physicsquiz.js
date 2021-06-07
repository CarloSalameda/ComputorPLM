"use strict"
var questions = [
  {
    question: "A scalar is a quantity that had.",
    choices: ["a.	Color ", "b.	Time ", "c.	Magnitude ", "d.	Direction"],
    correctAnswer: 2
  },
  {
    question: "When Representing velocity as a vector… ",
    choices: ["a.	The length represents speed.", "b.	The direction of the arrow shows the direction of motion.", "c.	The length of the arrow is drawn to a suitable scale.", "d.	All of these."],
    correctAnswer: 3
  },
  {
    question: "The horizontal component of a projectile’s velocity is independent of… ",
    choices: ["a.	It’s range.", "b.	The vertical alignment.", "c.	Time", "d.	None of these."],
    correctAnswer: 1
  },
  {
    question: "A particle moves in a straight line with a velocity of v(t) = 2t2. How far does the particle move between times t=1 and t=3? ",
    choices: ["a.	52/3", "b.	18", "c.	26/3", "d.	16"],
    correctAnswer: 0
  },
  {
    question: "A particle moves along the x-axis with velocity given by v(t) = 3t2 + 6t for time ≥ 0. If the particle is at position x = 2 at time t = 0, what is the position of the particle at t = 1? ",
    choices: ["a.	11", "b.	6C", "c.	4", "d.	9"],
    correctAnswer: 1
  },
  {
    question: "For times t > 0, a particle moves on the x axis with its acceleration defined by a(t) = 6t – 2. If the velocity of the particle is -7 at t = 1, then at what time is the particle at rest? ",
    choices: ["a.	t = 4", "b.	t = 3", "c.	t = 4/3", "d.	t = 2"],
    correctAnswer: 3
  },
   {
    question: "a __________ and _____________ are necessary factors to describe motion. ",
    choices: ["a.	time and speed", "b.	speed and distance", "c.	distance and time", "d.	uniform and speed"],
    correctAnswer: 2
  },
   {
    question: "90 km/hour is equals to… ",
    choices: ["a.	90 hours", "b.	90 meters in an hour", "c.	90 km", "d.	90 kilometers in an hour."],
    correctAnswer: 3
  },
   {
    question: "It is the change of the object’s position by equal distance at equal periods of time.  ",
    choices: ["a.	Kinetic Motion", "b.Non-uniform Speed", "c.	Uniform Speed", "d.	Projectile Motion"],
    correctAnswer: 2
  },
  {
    question: "A car with a rightward velocity and a leftward acceleration is ___. ",
    choices: ["a.	Moving to the right and speeding up", "b.	Moving to the right and slowing down", "c.	Moving to the left and slowing down", "d.	Moving to the left and speeding up"],
    correctAnswer: 1
  },
  {
    question: "An airplane accelerates down a runway at 3.20 m/s/s for 8 s until it finally lifts off the ground. Determine the velocity at take-off. ",
    choices: ["a.	2.5 m/s ", "b.0.4 m/s", "c.	15.6 m/s", "d.	25.6 m/s"],
    correctAnswer: 3
  },
  {
    question: "A car is travelling at 21.0 m/s. It slows to a stop at a constant rate over 5.00 s. How far does the car travel during those 5.00 seconds before it stops? ",
    choices: ["a.	3.20 m", "b.120 m", "c.	52.5 m", "d.	178 m"],
    correctAnswer: 2
  },
  {
    question: "How much object does it take an object to drop at 4.7 meters? ",
    choices: ["a.	0.959 s", "b.	0.979 s", "c.	4.79 s", "d.	4.389 s"],
    correctAnswer: 1
  },
  {
    question: "A ball is thrown upward in the air with an initial velocity of 40 m/s. How long does it take to reach back to the point it was thrown from?  ",
    choices: ["a.	4 s", "b.	6 sC", "c.	2 s", "d.	8 s"],
    correctAnswer: 3
  },
  {
    question: "In free fall, where does an object have the slowest speed?",
    choices: ["a.	Vtop", "b.	Vi", "c.	Vf", "d.	None of these."],
    correctAnswer: 0
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
