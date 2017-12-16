
db.animals.insert({ "name": "Dog", "color":"brown"});
db.animals.insert({ "name": "Cat", "color": "black" });

db.animals.find().sort({ _id: 1 });
db.animals.find().sort({ _id: 1 });