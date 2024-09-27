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


for ("iterator"; "condition"; "iteration") {
}


Step 34
Your loop now needs a proper iterator. The iterator is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic.

It is a common convention to use i as your iterator variable in a loop. A for loop allows you to declare this in the parentheses (). For example, here is a for loop that declares an index variable and assigns it the value 100.

Example Code
for (let index = 100; "second"; "third") {

}
Replace the string "iterator" with a let declaration for the variable i. Assign it the value 0 to start. This will give the i variable the value 0 the first time your loop runs.

const character = "#";
const count = 8;
const rows = [];

for (let i = 0; "condition"; "iteration") {

}

Step 35
The condition of a for loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

In JavaScript, a Boolean value can be either true or false. These are not strings - you will learn more about the difference later on.

For now, you will use the less than operator (<). This allows you to check if the value on the left is less than the value on the right. For example, count < 3 would evaluate to true if count is 2, and false if count is 4.

Replace your "condition" string with a condition to check if i is less than count.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; "iteration") {

}

Step 36
Your iteration statement will tell your loop what to do with the iterator after each run.

When you reassign a variable, you can use the variable to reference the previous value before the reassignment. This allows you to do things like add three to an existing number. For example, bees = bees + 3; would increase the value of bees by three.

Use that syntax to replace your "iteration" string with a reassignment statement that increases i by one.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {

}

Step 37
Your loop should now run eight times. Inside the body of the loop, print the value of the i iterator and see what happens.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
    console.log(i);
}

Step 38
You should see the numbers zero through seven printed in your console, one per line. This will serve as the foundation for generating your pyramid.

Replace your log statement with a statement to push i to your rows array.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

Step 39
Unfortunately, now you cannot see what your loop is doing.

Use let to declare a result variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as "".


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = "";


Step 40
Add a log statement to print the value of result. Depending on which console you use, you may not see anything printed.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

console.log(result);


Step 41
To manipulate the result string, you will use a different type of loop. Specifically, a for...of loop, which iterates over each item in an iterable object and temporarily assigns it to a variable.

The syntax for a for...of loop looks like:

Example Code
for (const value of iterable) {

}
Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

Create a for...of loop to iterate through your rows array, assigning each value to a row variable.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""


for (const row of rows){
    
}

console.log(result);


Step 42
Remember in your previous loop that you used the addition operator + to increase the value of i by 1.

You can do a similar thing with a string value, by appending a new string to an existing string. For example, hello = hello + " World"; would add the string " World" to the existing string stored in the hello variable. This is called concatenation.

In your for...of loop, use the addition operator to concatenate the row value to the result value.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
    result = result + row;
}

console.log(result);


Step 43
Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special escape sequence \n, which is interpreted as a new line when the string is logged. For example:

Example Code
lineOne = lineOne + "\n" + lineTwo;
Use a second addition operator to concatenate a new line between the existing result value and the added row value.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


Step 44
Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your rows array, it's time to update your original loop.

Instead of pushing i to the array, push the value of your character variable.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


Step 45
Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

Example Code
const activity = "Code! ";
activity.repeat(3);
Use the .repeat() method on your character, and give it i for the number.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i));
  
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


Step 46
You're getting closer! At this point, you're encountering what's known as an off-by-one error, a frequent problem in zero-based indexing languages like JavaScript.

The first index of your rows array is 0, which is why you start your for loop with i = 0. But repeating a string zero times results in nothing to print.

To fix this, add 1 to the value of i in your .repeat() call. Do not assign it back to i like you did in your loop conditions.


const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


Step 47
The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.

A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

Example Code
function name(parameter) {

}
The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

Declare a padRow function. Do not create any parameter variables yet. The function body should be empty. Remember that you need to use camel case for your naming convention.


const character = "#";
const count = 8;
const rows = [];

function padRow() {} 


for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);


Step 48
In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses. For example, this code defines and calls a test function.

Example Code
function test() {

}
test();
Call your padRow function.


*/

const character = "#";
const count = 8;
const rows = [];

function padRow() {

}

padRow();

for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1))
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);