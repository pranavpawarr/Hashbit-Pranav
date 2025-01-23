// 1. Variable Declaration Scopes
function demonstrateVariableScopes() {
  var varVariable = "Function Scope";
  let letVariable = "Block Scope";
  const constVariable = "Block Scope (Constant)";

  // Differences:
  // var: Function-scoped, can be redeclared
  // let: Block-scoped, cannot be redeclared in same scope
  // const: Block-scoped, cannot be reassigned
}

// 2. Fruit Array and Retrieval
function getSecondFruit() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
  return fruits[1];
}

// 3. Array Manipulation with push() and pop()
function modifyArray(arr) {
  arr.push("NewElement");
  arr.pop();
  return arr;
}

// 4. Squaring Numbers with map()
function squareNumbers(numbers) {
  return numbers.map((num) => num * num);
}

// 5. Filtering Odd Numbers with filter()
function getOddNumbers(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

// 6. Object Greeting
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

function greetPerson(person) {
  return `Hello, I'm ${person.name}, a ${person.age}-year-old ${person.occupation}.`;
}

// 7. Rectangle Area Calculation
function calculateRectangleArea(rectangle) {
  return rectangle.width * rectangle.height;
}

// 8. Object Keys Retrieval
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// 9. Object Merging
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// 10. Array Sum with reduce()
function calculateArraySum(numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

// Example Usage
console.log(getSecondFruit()); // 'Banana'
console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(getOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(greetPerson(person)); // 'Hello, I'm John, a 30-year-old Developer.'
console.log(calculateRectangleArea({ width: 5, height: 10 })); // 50
console.log(calculateArraySum([1, 2, 3, 4, 5])); // 15
