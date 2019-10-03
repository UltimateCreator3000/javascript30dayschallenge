var options = document.getElementsByTagName("span");
let length = options.length;
var question = document.getElementById("question");
var submit = document.querySelector("#submit");

var allQuestions = [
{question: "Who is Prime Minister of the United Kingdom?", 
choices: ["Boris Johnson", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
correctAnswer:0},
{question: "In which state was George W Bush governor before becoming President of the United States?",
choices: ["California", "Alabama", "New York", "Texas"], 
correctAnswer:3},
{question: "Who was the Portuguese dictator at the time of Franco?", 
choices: ["Don Quixote", "Franco", "Salazar", "Columb"], 
correctAnswer:2},
{question: "What is the most spoken language in Belgium?", 
choices: ["Dutch", "German", "French", "Belgian"], 
correctAnswer:0}
];
// We need question1, question2, etc.
let questionNum = 2;
let correctAnswer = allQuestions[questionNum].correctAnswer;
let evalNote = 0;
// or somehow make an increment each time the user press the submit button
// maybe to build a linkedlist and work with it (next, previous) ?
// ex - if submit then questionNum++;

init();

function init(){
	nextQuestion(1);
	/*answer();
	reset();*/
}


submit.addEventListener("click", () => {
	var answers = [];
	var test = document.querySelector('input[name="input"]:checked').value;
	if (test !== correctAnswer) {
		evalNote--;
	} else {
		evalNote++;
	}
	console.log(evalNote);
	nextQuestion(2);
});


function nextQuestion(plusOne) {
		options[plusOne].textContent = allQuestions[plusOne].choices[plusOne];
		question.textContent = allQuestions[plusOne].question;
}





