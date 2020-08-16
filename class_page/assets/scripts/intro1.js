/*comment*/
// one line comments

/**
 * VARIABLES
 * names start with letters, followed by
 * a letter, number or a underscore
 */
var variablename = 1;
var variableName = 2;// camelCase
var myGreatVariableName = 1;
var variable_name = 1;// snake case

// Let is an alternative to var
// Let is block scope based
let variable2 = 1;

// You can't override constants.
// By convention, constants typically are uppercase and snake case
const MY_CONSTANT = 1;

var x = 1;
x = 2;

// NUMBERS
var myNumber = 1;
var myNumber2 = 0.1;
var myNumber3 = 10 + myNumber + 5;// this should be 16

// STRINGS (by convention, teams typically chose one method)
var myString = "this is a string";
var myString2 = 'this is another string';

// String concatination
var myString3 = `this ${x} is also a string`;// => "this 2 is also a string"
var myString4 = "this is my favorite number:" + x + myString;

// Loose typing: I can change the type of value in a variable.
var myNum1 = 10;
myNum1 = "oops, just chagned to a string";
myNum1 = 15 + 1;
// var myNum1; This throws an error: you can't re declare with var.

// Converting numbers and strings
myNum1 = myNum1.toString();// => "16"
myNum1 = parseInt(myNum1);// => 16

// BOOLEANS (true or false)
// var true = 1; // You can't use special keywords as variable name
var myBoolean1 = true;
var myBoolean2 = false;
var myConvertedBoolean = !!"String to boolean";// => true

// NULL represents nothing.
var myNullVariable = null;

// undefined
// By default, if you don't assign a variable with value, it's undefined.
var undefinedVar;// You don't have to assign variables.
var undefinedVar2 = undefined;// Never assign as undefined, use null instead

// ^ those are all considered primitive types
// i.e. their value's are static.

/**
 * OBJECTS
 * Most other types of things in javascript are objects
 * - an array is technically a special object.
 * - a function, is also a special object.
 */

// This is an empty object (this is an object literal)
var myObject = {};
// An object is just keys and values
var myObjectWithValues = {
    key1: 1,
    key2: 2,
    key3: "string value",// last comma is optional
    key4IsAnObject: {},
    "aKeyIsJustAString": {
        key1: 50,
        key2: "hello",
        key3: { key1: 'hi' }
    },
    "this is also a key": { myKey: "hello" }
    // any type can be placed as a value here.. I can put arrays and functions in here.
};

var personName = "Brent"
var personAge = 10;
var personComputerOS = "OSX";

// Objects allow you to encapsolate/organize data
var person = {
    name: "brent",
    age: 10,
    computer: {
        OS: "OSX"
    }
};

// We use dot notation to reference object keys
var myNumberFromObject = myObjectWithValues.key1;// => 1
var var3 = myObjectWithValues.aKeyIsJustAString.key1;
// We can also use the [] notation
var var4 = myObjectWithValues["this is also a key"].myKey; // => "hello"
var keyName = "key2";
var var5 = myObjectWithValues[keyName]; // => 2
var var6 = myObjectWithValues.keyName // => undefined

/**
 * ARRAYS
 * - arrays are zero indexed (the first element in an array is 0)
 */
var myArray1 = [];// an empty array
var myArray2 = [1, 2, 3, "string val", {}, [1, 2, []]];
var students = ["brent", "erik", "abby", "brent2"];
var students2 = [
    {
        name: "Brent",
        age: 10
    },
    {
        name: "Justin",
        age: 18
    },
    {
        name: "Gabriela",
        age: 25
    }
];

var firstStudent = students2[0];// => brent object
var secondStudent = students2[1];// => justin object
var num1 = 1;
var aStudent = students2[num1];// => second object.. justin
var anotherStudent = students2[num1 - 1*1]// => returns Brent object

var numberOfStudents = students2.length;// => 3
var numberOfStudentNames = students.length;// => 4

var specialNumber = 10 * 15 / 100;

/**
 * FUNCTIONS!
 * - functions are like a container for code. You can call it at anytime. 
 * - ANY code can live in a function
 * - functions create a new scope
 */

// any variable declared outside a function, is accessible in a function
var myObject2 = { "brent": "instructs" };

// This function returns nothing
var myFunction = function() {
    // any variable declared inside the function, is NOT acessible outside the function
    var myName = "brent";
    var whatBrentDoes = myObject2[myName];

    var number1 = 1;
    number1 = 2;
    number1 = "string";
};

// The function above doesn't run until I call it!
// it's the function's variable name followed by the parenthesis
var returnedValueOfMyFunction = myFunction();// => undefined

var myCalculation = function() {
    var x = 1;
    var output = 5 * 10 / x;
    return output;
};

// You call functions with the variable name and parenthesis
var myReturnedValue = myCalculation(); // => 50
var referenceOfFunction = myCalculation;
var myReturnedValue3 = referenceOfFunction(); // => 50

// Let's create private variables
// Self invoked function, or IIFE (immediately invoked function expression)
(function() {
    // This var is considered 'private' or hidden from the
    // outside scope
    var myVar = 1;
})();

// This throws an error since myName var was declared in the 
// function's new scope above ^
// var whatSomeoneDoes = myObject2[myName];

var whatSomeoneDoes = myObject2["nonexistentkey"];// => undefined


/**
 * FUNCTIONS AND ARGUMENTS
 * arguments are very similar to variables
 * - arguments are comma separated
 * - you can have zero or more arguments
 */
var add = function(argument1, argument2, argument3) {
    // almost like running:
    // var argument1 = 10;
    // var argument2 = 5;
    return argument1 + argument2 + argument3;
};

var outputOfCalculation = add(10, 5, 0);// => 15