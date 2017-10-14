function newWord() {
	return words[Math.floor(Math.random() * words.length)];
}

function createDashLines(word) {
	var i;
	var span;

	for (i = 0; i < word.length; i++) {
		span = document.createElement("span");
		span.textContent = "_";
		wordArea.appendChild(span);
	}
	console.log(word);
}

var words = ["Apple", "Banana", "Grape", "Pear"];
var word = newWord();
var userGuess = [];
var wordArea = document.getElementById("word");
var wordAreaChildren = wordArea.childNodes;
var buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {

	button.addEventListener("click", function () {
		var buttonPressed = button.id.toLowerCase();
		userGuess.push(buttonPressed);
		if (word.toLowerCase().indexOf(buttonPressed) !== -1) {
			console.log(buttonPressed + " is in the word.");
			wordAreaChildren.forEach(function (child, index) {
				wordAreaChildren[index].textContent = buttonPressed;
			});
		} else {
			console.log("Incorrect");
		}
	});
	
});

createDashLines(word);