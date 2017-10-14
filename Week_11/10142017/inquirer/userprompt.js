// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

function checkPassword(value) {
	if (value != 1234) {
		return true;
	}
	return "1234 is the worst password ever. Try again."
}

inquirer.prompt([{
		type: 'input',
		name: 'first_name',
		message: 'What\'s your first name'
	},
	{
		type: 'password',
		message: 'Enter a password',
		name: 'password',
		validate: checkPassword
	}, {
		type: 'list',
		name: 'food',
		message: 'What do you want to eat?',
		choices: [
			'An entire pizza',
			'A slice of pizza'
		]
	},
	{
		type: 'checkbox',
		message: 'Select toppings',
		name: 'toppings',
		choices: [
			new inquirer.Separator(' = The Meats = '),
			{
				name: 'Pepperoni',
				checked: true
			},
			{
				name: 'Bacon'
			},
			{
				name: 'Plain'
			},
			new inquirer.Separator(' = The Cheeses = '),
			{
				name: 'Mozzarella',
				checked: true
			},
			{
				name: 'Cheddar'
			},
			{
				name: 'Parmesan'
			}
		]
	},
	{
		type: 'confirm',
		name: "confirm",
		message: "Is this for delivery?"
	}
]).then(function (answers) {
	console.log(answers);
});