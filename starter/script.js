/********************
*Variables and data types


var firstName='John';
console.log(firstName);

var lastName='Smith';
var age=28;   

var fullAge=true;
console.log(fullAge);

var job;
console.log(job);

job='teacher';
console.log(job);

//variable namimng rules
var _3years=3;
var johnMark='John and Mark';

var function=23;
*/




/********************
*Variables mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName+' '+age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName+' '+age+' year old '+job+'.Is he ,arried?'+ isMarried);

//Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName+' '+age+' year old '+job+'.Is he ,arried? '+ isMarried);

var lastName=prompt('What is his last Name?');
console.log(firstName+' '+lastName);
*/

/********************
*Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn=28;
ageMark=33;

//Math operators
 yarJohn = now - ageJohn;
 yearMark = now - ageMark;

console.log(yarJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark');
var x;
console.log(typeof x);

*/

/********************
*CODING CHALLENGE 1

*/

var massJohn, massMark,heightJohn, heightMark , BMIJohn, BMIMark;

massJohn = 60; //kg
massMark = 85;

heightJohn = 1.85;
heightMark = 1.76;

BMIJohn = massJohn / (heightJohn * heightJohn);
BMIMark = massMark / (heightMark * heightMark);
console.log(BMIJohn,BMIMark);

var isWheter= BMIJohn < BMIMark ;
console.log('Is Mark\'s BMI higher than John\'s? ' + isWheter);














































