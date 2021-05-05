// 1

console.log(hello);
var hello = "world";

// Prediction: undefined

// Actual:

//////////////////////

// 2

var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}

// Prediction: undefined

// Actual: magnet

///////////////////////

// 3

var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// Prediction:only okay, super cool

// Actual:super cool

///////////////////////

// 4

var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}

// Prediction: chicken, halfchicken

// Actual:chicken, halfchicken

///////////////////////

// 5

mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
console.log(food);

// Prediction: undefined,chicken,fish,fish

// Actual:mean is not a function

///////////////////////

// 6

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);

// Prediction:undefined, rock,r&b,r&b

// Actual:undefined, rock,r&b,disco

///////////////////////

// 7

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);

// Prediction:undefined,undefined,burbank,undefined

// Actual: san jose seattle burbank san jose,

///////////////////////

// 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}

// Prediction:null,null

// Actual: { name: 'Chicago', students: 65, hiring: true }, TypeError: Assignment to constant variable.
