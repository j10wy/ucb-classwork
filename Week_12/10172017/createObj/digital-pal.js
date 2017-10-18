var dp = process.argv[2],
	action = process.argv[3],
	animals = {};

// DIGITAL PAL
function DigitalPal(hungry = false, sleepy = false, bored = true, age = 0) {
	this.hungry = hungry;
	this.sleepy = sleepy;
	this.bored = bored;
	this.age = age;
	this.feed = function () {
		if (this.hungry === true) {
			console.log("That was yummy!");
			this.hungry = false;
			this.sleep = true;
		} else {
			console.log("No thanks! I'm full.");
		}
	}
	this.sleep = function () {
		if (this.sleepy === true) {
			console.log("Zzzzzzzz");
			this.sleepy = false;
			this.increaseAge();
		} else {
			console.log("No way! I'm not tired.");
		}
	}
	this.play = function () {
		if (this.bored === true) {
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		} else {
			console.log("Not right now. Later?");
		}
	}
	this.increaseAge = function () {
		this.age += 1;
		console.log("Happy Birthday to me! I am " + this.age + " old!");
	}
}
// DOG
animals.dog = new DigitalPal(true, false, true, 6);
animals.dog.outside = false;

animals.dog.bark = function () {
	console.log("Woof! Woof!");
}

animals.dog.goOutside = function () {
	if (this.outside === false) {
		console.log("Yay! I love the outdoors!");
		this.outside = true;
		this.bark();
	} else {
		console.log("We're already outside though...");
	}
}

animals.dog.goInside = function () {
	if (this.outside === true) {
		console.log("Do we have to? Fine...");
		this.outside = false;
	} else {
		console.log("I'm already inside...");
	}
}

// CAT
animals.cat = new DigitalPal(true, false, true, 8);

animals.cat.houseCondition = 100;
animals.cat.meow = function () {
	console.log("Meow! Meow!");
}
animals.cat.destroyFurniture = function () {
	if (houseCondition !== 0) {
		this.houseCondition -= 10;
		this.bored = false;
		this.sleepy = true;
		console.log("MUAHAHAHAHA! TAKE THAT, FURNITURE!");
	}

}
animals.cat.buyNewFurniture = function () {
	this.houseCondition += 50;
	console.log("Are you sure about that?");
}

if (dp && action) {
	animals[dp][action]();
}
