function Programmer(name, title, age, lang) {
	this.name = name;
	this.title = title;
	this.age = age;
	this.fav_lang = lang;
	this.print = function print(){
		console.log(`\nName:${this.name}`,
		`\nTitle: ${this.title}`,
		`\nAge: ${this.age}`,
		`\nFavorite Language: ${this.fav_lang}`	
	);
	}
}

var kali = new Programmer("Kali", "Full Stack Dev", "6", "Borks!");

kali.print();