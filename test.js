// Complete Object Oriented Programming exercises:

// Create a Basic JavaScript Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object
let myInfo = {
    name: "Aaditya Acharya",
    age: 30,
    occupation: "web Developer",
}

// Use Dot Notation to Access the Properties of an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object
myInfo.name;
myInfo.age;
myInfo.occupation;


Create a Method on an Object
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object
let myInfo = {
    name: "Aaditya Acharya",
    age: 30,
    occupation: "web Developer",
    haveKids: function(){
        console.log("I have two");
    }
}
myInfo.haveKids();


// // Make Code More Reusable with the this Keyword
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword
var myInfo = {
    name: "Aaditya Acharya",
    age: 30,
    occupation: "web Developer",
    aboutMe: function(){
        console.log("I am ${this.name}, I am ${this.age} years old.");
    }
}
myInfo.aboutMe;


// Define a Constructor Function
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function
// Constructor function is a function used to create and initialize objects. constructors are always uppercase.
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Use a Constructor to Create Objects
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects

function Dog() {
    this.name = "Bailey";
    this.color = "black";
    this.numLegs = 4;
  }

// Extend Constructors to Receive Arguments
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog("George", "White");

// Verify an Object's Constructor with instanceof
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }

  let myHouse = new House(4);
  myHouse instanceof House;
// Understand Own Properties
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties

// Use Prototype Properties to Reduce Duplicate Code
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code
function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  Dog.prototype.bark = "woof";
  let beagle = new Dog("Snoopy");
