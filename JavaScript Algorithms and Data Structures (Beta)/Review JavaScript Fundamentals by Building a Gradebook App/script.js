/*
Step 1
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

Complete the getAverage function which takes in an array of test scores and returns the average score.

The average is calculated by adding up all the scores and dividing by the total number of scores.

Example Code
average = sum of all scores / total number of scores
A couple of function calls have been provided for you so you can test out your code.

Tips

You can use a loop to iterate over the scores array and add up all the scores.
You can use the length property to get the total number of scores.


function getAverage(scores) {
    let promedio = 0;
    for(let i = 0; i < scores.length; i++){
     promedio += scores[i];
    }

    return promedio / scores.length;

}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


Step 2
Now the teacher needs your help converting the student score to a letter grade.

Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
Tips

Remember that you learned about conditional statements (if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).


function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
    let grade = "";

    if (score > 99) {
        grade = "A++";
    } else if (score > 89) {
        grade = "A";
    } else if (score > 79) {
        grade = "B";
    } else if (score > 69) {
        grade = "C";
    } else if (score > 59) {
        grade = "D";
    } else if (score < 60) {
        grade = "F";
    }

    return grade;
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));
  
  
  
  Step 3
The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.

Tips

Use the getGrade function to get the student's grade. Then check if the grade is passing or not.
*/

function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  
  function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
  
  function hasPassingGrade(score) {
    let passing;
    if (getGrade(score) !== "F") {
        passing = true;
    } else {
        passing = false;
    }
    return passing;
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));