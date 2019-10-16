var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var input = document.querySelector("input");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("#limitDisplay");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
	if (!gameOver) { // if gameOver is false is true then (if it is true that gameOver is false then...)
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});


p2Button.addEventListener("click", function() {
	if (!gameOver) { // if gameOver is false is true then (if it is true that gameOver is false then...)
		p2Score++;
		console.log(p2Score, winningScore);
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});


resetButton.addEventListener("click", function() {
	reset();
});


input.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	// returned value is a string so we have to turn it into a number
	// otherwise the if(p1Score === winningScore) won't work
	// it compares a number with a string :) 
	winningScore = Number(this.value);
	reset();
});


function reset() {
	p1Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Score = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove("winner");
	gameOver = false;
}
