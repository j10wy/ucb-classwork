function Character(name, profession,gender,age,strength, hp) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hp = hp;
	this.printStats = function(){
		console.log("-----------------------");
		console.log(`Name: ${this.name}\nProfession: ${this.profession}\nGender: ${this.gender}\nAge: ${this.age}\nStrength: ${this.strength}\nHP: ${this.hp}`);
	}
}

Character.prototype.isAlive = function(){
	if (this.hp > 0) {
		console.log(`\n${this.name} is alive!`);
	} else {
		console.log(`\n${this.name} is dead...`);
	}
}

Character.prototype.attack = function(opponent){
	console.log(`\n${this.name} attacked ${opponent.name} reducing his hp by ${this.strength}\n`);
	opponent.hp -= this.strength;
}

Character.prototype.levelUp = function(){
	this.strength += 5;
	this.hp += 25;
	this.age += 1;
}

var jeff = new Character("Jeff","Student","Male",34,100,100);
var nick = new Character("Nick","Annoying brother","Male",32,99,99);

jeff.printStats();
nick.printStats();

jeff.attack(nick);

nick.levelUp();
nick.printStats();
nick.isAlive();