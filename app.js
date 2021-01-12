const mongoose = require('mongoose');


const fruitsName = [];
// Loking for connection on port 27017 and db fruitsDB, if it's doesn't exist mongoose will create fruitsDB
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a new schema/model for fruits collection
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You didn't provide a name for the fruit!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

//Create a collection
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 10,
  review: "Pretty solid as a fruit"
});

const kivi = new Fruit({
  name: "Kivi",
  rating: 8,
  review: "Nice"
});

const banana = new Fruit({
  name: "banana",
  rating: 11,
  review: "The best fruit ever"
})

// Fruit.insertMany([kivi, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Saved 2 items");
//   }
// })

// fruit.save();
// banana.save();

// Create a new schema/model for people collection
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create a people collection
const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "James",
  age: 25
});

// person.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      fruitsName.push(fruit.name);
    });
    console.log(fruitsName);
  }
})

// Fruit.updateOne({ _id: "5ffd79e47ad8030ca94e4707"},{ rating: 1},function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document.");
//     }
//   });

  // Fruit.deleteOne( { _id: "5ffd842c9dcde60e2b0e591d"}, function(err) {
  //   if(err) {
  //     console.log(err);
  //   } else {
  //     console.log("Successfully deleted item.");
  //   }
  // });

  Fruit.deleteMany( { name: "banana"}, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("Successfully deleted items.");
    }
  });
