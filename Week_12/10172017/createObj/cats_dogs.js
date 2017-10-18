function makeNoise() {
	if (this.raining) {
		console.log(this.noise);
	}
}

function massHysteria(obj1, obj2) {
	if (obj1.raining && obj2.raining) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}

var dogs = {
	raining: true,
	noise: 'Woof!',
	makeNoise: makeNoise
}

var cats = {
	raining: false,
	noise: 'Meow!',
	makeNoise: makeNoise
}

dogs.makeNoise();

//cats.raining = true;
cats.makeNoise();

massHysteria(cats, dogs);