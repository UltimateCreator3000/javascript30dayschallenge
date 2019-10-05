var allQuestions = [
{question: "Comparative politics tends to produce certain kinds of arguments. Which of the following is the best label for those arguments?", 
choices: ["a. Basic Descriptions", 
          "b. Rationalizations", 
          "c. Explanations", 
          "d. Tautologies"], 
correctAnswer:2},

{question: "Which of the following could be a good comparative politics explanation of the revolutions of the Arab Spring?",
choices: ["a. Every country naturally turns to democracy: it's just a matter of when.", 
          "b. The revolutions were products of revolutionary processes.",
          "c. The Arab Spring happened because the relevant countries have culture.", 
          "d. Important groups felt discontent, the capacity to organize increased, and the relevant states were unable to repress dissenters."
], 
correctAnswer:3},

{question: "Which of the following is the best social scientific question?", 
choices: ["a. Why is development better than underdevelopment for countries in Africa?", 
          "b. Why should we listen when some people in Africa complain about their lack of rights?",
          "c. Why is capitalism the morally preferable economic system?", 
          "d. Why have some sub-Saharan African countries been so much better off than others in recent years?"
], 
correctAnswer:3},
{question: "What is the most spoken language in Belgium?", 
choices: ["Dutch", "German", "French", "Belgian"], 
correctAnswer:0},
{question: "Who is Prime Minister of the United Kingdom?", 
choices: ["Boris Johnson", /*"Gordon Brown", */"Winston Churchill", "Tony Blair"], 
correctAnswer:0},
{question: "Who is Prime Minister of the United Kingdom?", 
choices: ["Boris Johnson", "Gordon Brown", /*"Winston Churchill",*/ "Tony Blair"], 
correctAnswer:0}
];

var options = document.getElementsByTagName("span");
var answers = document.getElementsByClassName("answer");
var question = document.getElementById("question");
var submit = document.querySelector("#submit");
var scorePage = document.getElementById("score");
scorePage.style.display = 'none';
var form = document.querySelector('form');


const answersLength = answers.length;
const questLength = allQuestions.length;
var nextQuestion = 0;
var userAnswers = [];
let correctAnswers = [];
for (let i = 0; i < questLength; i++) {
	correctAnswers.push(allQuestions[i].correctAnswer);
}
console.log(correctAnswers);


init();

function init() {
	hideAnswers();
	setQuestion(nextQuestion);
}

function inputHandler() {
	nextQuestion++;
	if (nextQuestion < questLength) {
		getAnswers();
		hideAnswers();
		setQuestion(nextQuestion);
	} else {
		getAnswers();
		scorePage.textContent = scoreSum(correctAnswers, userAnswers);
		form.style.display = 'none';
		scorePage.style.display = "block";			
	}
};


function setQuestion(num) {
		// updating the question
		question.textContent = allQuestions[num].question;

		let choicesLength = allQuestions[num].choices.length;
		console.log("choices : ", choicesLength);
		for (let i = 0; i < choicesLength; i++) {
			// as many spans as available choices 
			answers[i].style.visibility = 'visible';
			// filling the spans with choices
			options[i].textContent = allQuestions[num].choices[i];
		}}

	
// getting and saving the answer of the user in a global var	
function getAnswers() {
	let data = document.querySelector('input[name="input"]:checked').value;
	userAnswers.push(data);
	console.log(userAnswers);
}


// count the right answers (return a string)
function scoreSum(correctAnswers, testAnswers) {
	let score = 0;
	for (let i = 0; i < correctAnswers.length; i++) {
		if (testAnswers[i] == correctAnswers[i]) {
			score++;
		}
	}
	return `You answered correctly ${score} questions`;
}


function hideAnswers() {
	for(let i = 0; i < answersLength; i++) {
		answers[i].style.visibility = 'hidden';
	}
}
