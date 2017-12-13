
db.animals.insert({ "name": "Dog", "legs":"4", "class":"mammal", "weight":50});
db.animals.insert({ "name": "Cat", "legs": "4", "class": "mammal", "weight": 15 });
db.animals.insert({ "name": "Elephant", "legs": "4", "class": "mammal", "weight": 10000 });

db.animals.find().sort({ _id: 1 });
db.animals.find().sort({ _id: 1 });