"use strict"
var questions = [
   {
    question: "Derive y = √x + 8 ∛x − 2 ∜x ",
    choices: ["a.(3 sin⁡(5x))/7+C", "b.(7 sin⁡(5x))/5+C", "c.(5 sin⁡(5x))/7+C", "d.(7 sin⁡(5x))/3+C"],
    correctAnswer: 0
  },
  {
    question: "Derive  f(y)=(y^5-5y^3+2y)/y^3 ",
    choices: ["a.f’(y)=2y+4y^3", "b.f’(y)=2y-4y^(-3)", "c.f’(y)=2y+4y^(-3)", "d.f’(y)=2y-4y^3"],
    correctAnswer: 1
  },
  {
    question: "Evaluate limx→-∞f(x); f(x)=(3x^7-4x^2+1)/(5-10x^2 )",
    choices: ["a.lim x→-∞    (3x^7-4x^2+1)/(5-10x^2 )=li m⁡x→-∞ ((x^2 (3x^5-4+〖1/x〗^2  )))/x2(5/x^2 -10) =lim⁡x→-∞  (3x5-4+1/x^2 )/(5/x^2 -10)=-∞/10=-∞", "b.	lim x→-∞    (3x^7-4x^2+1)/(5-10x^2 )=li m⁡x→-∞-((x^2 (3x^5-4+〖1/x〗^2  )))/x2(5/x^2 -10) =lim⁡x→-∞  (3x5-4+1/x^2 )/(5/x^2 -10)=-∞/10=∞", "c.	lim x→-∞  -(3x^7-4x^2+1)/(5-10x^2 )=li m⁡x→-∞ ((x^2 (3x^5-4+〖1/x〗^2  )))/x2(5/x^2 -10) =lim⁡x→-∞  (3x5-4+1/x^2 )/(5/x^2 -10)=-∞/10=∞", "d.	lim x→-∞    (3x^7-4x^2+1)/(5-10x^2 )=li m⁡x→-∞ ((x^2 (3x^5-4+〖1/x〗^2  )))/x2(5/x^2 -10) =lim⁡x→-∞  (3x5-4+1/x^2 )/(5/x^2 -10)=-∞/10=∞"],
    correctAnswer: 3
  },
  {
    question: "Evaluate lim⁡x→-∞ f(x); f(x)=(x^3-2x+11)/(3-6x^5 )",
    choices: ["a.0", "b.1", "c.–1", "d.2"],
    correctAnswer: 0
  },
  {
    question: "Find the derivative of y= x3-1 / x-1",
    choices: ["a.	2x+1", "b.2x+3", "c.2x-1", "d.2x-3"],
    correctAnswer: 0
  },
   {
    question: "Find the derivative of y=log e^x ",
    choices: ["a. 0", "b.-1", "c.2.72", "d.1"],
    correctAnswer: 3
  },
   {
    question: "Evaluate lim⁡x→-∞ f(x); f(x)=(x^3-2x+11)/(3-6x^5 )",
    choices: ["a.0", "b.1", "c.–1", "d.2"],
    correctAnswer: 0
  },
   {
    question: "Differentiate y = sec (x2 + 2) ",
    choices: ["a.2x cos (x2 + 2)", "b.	–cos (x2 + 2) cot (x2 + 2)", "c.	2x sec (x2 + 2) tan (x2 + 2)", "d.	cos (x2 +2)"],
    correctAnswer: 2
  },
  {
    question: "Differentiate y = log10 (x2 + 1)2 ",
    choices: ["a.	4x (x2 + 1)", "b.	(4x log10 e) / (x2 + 1)C", "c.	log e(x) (x2 + 1)C", "d.	2x (x2 + 1)"],
    correctAnswer: 1
  },
  {
    question: "Differentiate (x^2 + 2)1/2 ",
    choices: ["a.	((x^2 + 2)^1/2) / 2", "b.	x / (x^2 + 2)^1/2", "c.	(2x) / (x^2 + 2)^1/2", "d.(x^2 + 2)^3/2"],
    correctAnswer: 1
  },
  {
    question: "Find y’ if y = arc sin cos x ",
    choices: ["a.-1", "b.-2", "c.1", "d.2"],
    correctAnswer: 0
  },
  {
    question: "Find the minimum distance from the point (4, 2) to the parabola y^2 = 8x. ",
    choices: ["a. 4√3", "b.	2√2", "c.√3", "d.2√3"],
    correctAnswer: 1
  },
  {
    question: "Find the minimum amount of tin sheet that can be made into a closed cylinder having a volume of 108 cu. inches in square inches",
    choices: ["a.	125.50", "b.	127.50", "c.	129.50", "d.	123.50"],
    correctAnswer: 0
  },
  {
    question: "A poster is to contain 300 (cm square) of printed matter with margins of 10 cm at the top and bottom and 5 cm at each side. Find the overall dimensions if the total area of the poster is minimum.",
    choices: ["a.	27.76 cm, 47.8 cm", "b.	20.45 cm, 35.6 cm", "c.	22.24 cm, 44.5 cm", "d.	25.55 cm, 46.7 cm"],
    correctAnswer: 2
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
