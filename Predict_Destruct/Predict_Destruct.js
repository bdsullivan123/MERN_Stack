const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar);
console.log(otherRandomCar);

// Prediction:Tesla,Mercedes
// Actual:Tesla,Mercedes

const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Prediction:undefined, Elon
// Actual:ReferenceError: name is not defined => console.log(name);

const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

// Prediction:12345, error
// Actual:12345, undefined

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// Prediction:false,false
// Actual:false,true

const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Prediction:object,object,value,array
// Prediction:"value",[1,5,1,8,3,3],1,5
// Actual:value ,[1,5,1,8,3,3] ,1 ,5

// const person = {
//   firstName: "Bob",
//   lastName: "Marley",
//   email: "bob@marley.com",
//   password: "sekureP@ssw0rd9",
//   username: "barley",
//   createdAt: 1543945177623,
// };
// const animals = ["horse", "dog", "fish", "cat", "bird"];

// // AFTER ES6
// // const { email } = person;
// const [unicorn, ...firstRemoved] = animals;
// // console.log(email);
// // => bob@marley.com
// console.log(firstRemoved);
// // => horse
