console.log("Hello from intro2.js");

/**
 * IF STATEMENTS
 */

 // truthy or falsy expression
if (true) {
    console.log("true is true");
}// no semicolon needed here;

if (false) {
    console.log("this never is evaluate");
}

// Basic equal operator
if (false === true) {
    // not going to evaluate
}

var x = 10;
if (x === 10) {
    console.log("Hey, it's 10!");
}

// Truthy values
if (10) {
    console.log("numbers are truthy");
}
if ({}) {
    console.log("hey, objects are true too");
}

// Falsy values
if (0) {
    console.log("javascript is weird")
}

if ("") {
    console.log("javascript weirdly evaluates this as false");
}

// Type conversion.. avoid this.
if (x == "10") {
    console.log("Type conversion: javascript is weird");
}

if (x === "10") {
    console.log("this doesn't evaluate");
}

var name = "brent";
if (name === "brent") {
    console.log("hello brent");
}

if ({ key1: "hello"} === { key1: "hello"}) {
    console.log("These are different objects.. false");
}

name = "sarah";
if (name === "brent") {
    console.log("hello brent");
}
// Put that back up there ^
else if (name === "sara") {
    console.log("hi sara");
}
else {
    console.log("everything else goes here");
}

if (name !== "Brent") {
    console.log("Not Brent");
}


// if statements without brackets (avoid these)
if (true) console.log("one line if statement");

var o1 = { key1: "hello" };
var o2 = { keyone: "hello" };

if (o1 === o2) {
    // this doesn't run
}

// same as if ("hello === "hello")
if (o1.key1 === o2.keyone) {
    // this will run
}

var myNumber = 7 + "7";// => "77"
var myNumber2 = 7 + parseInt("7");// => 14
myNumber = myNumber + 1; // => 15
myNumber += 1;// => 16 (more typical)
myNumber ++;// => 17
myNumber -= 1;// => 16
myNumber --;// => 15


if (myNumber > 15) { // false
}
if (myNumber < 15) { // false
}
if (myNumber >= 15) { // true
}

// You can even assign comparator values to vars
var isMyNumberGreaterThan15 = myNumber > 15;

// You can combine operators
if (myNumber > 15 || myNumber === 15 || "hello" === "whatever") {

}

/**
 * 
 * Sometimes it's helpful to put complicated comparisons into a variable
 * simply for readability
 * var isSummer = myDate > summerStart && myDate < summerEnd; 
 * 
 * if (isSummer) {
 *   // do something
 * }
 */

if ((myNumber > 15 && myNumber === 15) || false === true) {
}


// SWITCHES (these are like if statements)
// I prefer not to use them.
// Look them up if you're interested

// ARRAYS
var myColors = ["red", "violet", "cyan"];
var myFirstColor = myColors[0];
//Add to an array
myColors.push("blue");// => adds blue to myColors
// myColors.pop(); // => removes last item
// myColors.shift();// => removes the first item
myColors.splice(1, 1);

// Grab subset of array
var aSliceOfColors = myColors.slice(0, 2);

// FUNCTIONS AND HOISTING
// This function can't be used before it's delcared
var myFunc = function() {
    return 5;
};
myFunc();// this would error if called before declaration

myFunction2();// This works because it's "hoisted"

// An alternative way to do the same thing as before
// HOISTING: 
// These types of methods can be used before they're declared
function myFunction2() {
    console.log("hoisting is interseting...")
}

console.log("------------ LOOPS! -----------")

/**
 * FOR LOOPS
 * - generally you can avoid these
 */
var myFavoriteColors = ["red", "orange", "blue"];

// i stands for index
for (let i = 0; i < myFavoriteColors.length; i++) {
    // I changes every time this is ran in here.
    let color = myFavoriteColors[i];

    // if (color !== "orange") {
    //     console.log(color);
    // }

    if (color === "orange") {
        // break;
        continue; // => skip to next part
    }

    console.log(color);
}
// i doesn't exist here since I use let

// WHILE LOOP (generally I don't use these)
let i = 0;
while (i < 5) {
    i++;
    console.log("while: ", i);
    // do something
}

var students = [
    {
        name: "brent",
        computer: {
            OS: "OSX",
            type: "mac"
        }
    },
    {
        name: "erik",
        computer: {
            OS: "OSX",
            type: "mac"
        },
        say: function() {
            return "dude";
        }

    },
    {
        name: "Chase",
        computer: {
            OS: "Windows 15",
            type: "PC"
        },
        say: function() {
            return "hello, what's up man";
        }
    }
];

var loopThrough = function(list, doThis) {
    for (let i = 0; i < list.length; i++) {
        doThis(list[i]);
    }
};

var logMe = function(item) {
    console.log("logme:", item);
};

loopThrough(students, logMe);

loopThrough(students, function(student) {
    console.log("funky:", student);
});

var operatingSystems = [];
var studentNames = [];
loopThrough(students, function(student) {
    operatingSystems.push(student.computer.OS);
    studentNames.push(student.name);
});
console.log(operatingSystems);
console.log(studentNames);

/**
 * Arrayy pipeline methods
 */
students.forEach(function(student) {
    console.log("forEach:", student);
    // No need to return something
});

var listOfNames = students.map(function(student) {
    return student.name;
});
console.log(listOfNames);

var studentsWithOSX = students.filter(function(student) {
    return student.computer.OS === "OSX";
});
console.log(studentsWithOSX);

students.filter(function(student) {
    return student.computer.OS === "OSX";
}).forEach(function(student) {
    console.log("student with OSX", student.name);
});

// cf. array functions: filter, reduce, some
// alert/prompt('hello');