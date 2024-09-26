/*
console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");

let developer = "Naomi";
console.log(developer);


Step 26

let cities = ["London", "New York", "Munbai"];
console.log(cities);
cities[2] = "Mexico City";
console.log(cities);
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
console.log(rows);


Step 27
Another method essential for this project is the .pop() method. It removes the last element from an array and returns that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

Create a new variable called popped and assign it the result of rows.pop(). Then, log popped to the console.

let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped;
popped = rows.pop();
console.log(popped);
console.log(rows);


Step 28

You should have seen "freeCodeCamp" printed to the console. This is because .pop() returns the value that was removed from the array - and you pushed "freeCodeCamp" to the end of the array earlier.

But what does .push() return? Assign your existing rows.push() to a new pushed variable, and log it.

rows.push("freeCodeCamp");
let pushed;
pushed = rows.push();
console.log(pushed);



Step 29

Were you expecting to see 4 in the console? .push() returns the new length of the array, after adding the value you give it.

It is important to be aware of what values a method returns. Take some time to experiment with .push() and .pop(). When you are ready, remove all of your .push() and .pop() calls, and your console.log statements.

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
let pushed = rows.push("freeCodeCamp");
console.log(pushed);
let popped = rows.pop();
console.log(popped);
console.log(rows);


Step 30

Change your rows declaration to be assigned an empty array again.

Also, change your 'Hello' string to use double quotes again. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project.


let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

character = "Hello";
rows = [];


Step 31

Declaring a variable with the let keyword allows it to be reassigned. This means you could change character later to be a completely different value.

For this project, you will not want to change these variable values. So instead, you should use const to declare them. const variables are special.

First, a const variable cannot be reassigned like a let variable. This code would throw an error:

Example Code
const firstName = "Naomi";
firstName = "Jessica";
A const variable also cannot be uninitialized. This code would throw an error:


const character = "Hello";
const count = 8;
const rows = [];


Step 32

You are now ready to start building your pyramid generator. Your character variable will serve as the building block for the pyramid.

"Hello" might not work very well for that. Change the value of character to be the hash character "#".


const character = "#";
const count = 8;
const rows = [];

Step 33

To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a loop. There are many ways to write a loop.

You are going to start with a basic for loop. for loops use the following syntax:

Example Code
for (iterator; condition; iteration) {
  logic;
}
In the upcoming steps, you'll explore each component of a loop in detail. For now, construct a for loop that includes the terms "iterator", "condition", and "iteration" for the three components. Keep the loop body, the section within the curly braces {}, empty.
*/

for ("iterator"; "condition"; "iteration") {
}