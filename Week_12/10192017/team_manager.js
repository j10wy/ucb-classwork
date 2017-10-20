const inquirer = require('inquirer');

function Player(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.goodGame = function goodGame() {}
	this.badGame = function badGame() {}
	this.printStats = function printStats() {}
}

function validateRating(value) {
	let number = parseInt(value);
	if (number !== NaN) {
		return true;
	}
	return "Enter a number!";
}

var starters = [];
var subs = [];
var numPlayers = 0;

function buildTeam() {
	if (numPlayers < 8) {
		inquirer.prompt([{
				type: 'input',
				name: 'name',
				message: 'What\'s your name'
			}, {
				type: 'input',
				name: 'position',
				message: 'What\'s your title/position'
			},
			{
				type: 'input',
				name: 'offense',
				message: 'What\'s your offense rating',
				validate: validateRating
			},
			{
				type: 'input',
				name: 'defense',
				message: 'What\'s your defense rating',
				validate: validateRating
			},
		]).then(function (answers) {
			var teamMember = new Player(answers.name, answers.position, answers.offense, answers.defense);

			if (numPlayers < 5) {
				starters.push(teamMember);
				numPlayers = starters.length + subs.length;
				buildTeam();
			} else if (numPlayers < 8) {
				subs.push(teamMember);
				numPlayers = starters.length + subs.length;
				buildTeam();
			}
		});
	} else {
		console.log("Starters", starters, "Subs", subs);
	}
}

buildTeam();