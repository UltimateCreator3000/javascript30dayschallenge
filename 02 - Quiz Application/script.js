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
var options = document.getElementsByTagName("span");
var question = document.getElementById("question");
var submit = document.querySelector("#submit");

const length = options.length; // actually you must count choices
var answers = [];
var nextQuestion = 0;


/*init();

function init(){
	nextQuestion(1);
	/*answer();
	reset();*/

	

	setQuestion(nextQuestion);



	function inputHandler() {
		nextQuestion++;
		if (nextQuestion  < 5) {
			let correctAnswer = allQuestions[nextQuestion].correctAnswer;

			var test = document.querySelector('input[name="input"]:checked').value;
			answers.push(test);
			console.log(answers);

			setQuestion(nextQuestion);

			console.log(nextQuestion);
		} else {
			console.log("you reached the limit of questions");
		}

	};

	function setQuestion(num) {
		question.textContent = allQuestions[nextQuestion].question;
		for (let i = 0; i < length; i++) {
			options[i].textContent = allQuestions[nextQuestion].choices[i];
		}
	}
