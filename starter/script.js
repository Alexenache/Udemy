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
/*
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
*/



/************************************

        *If/Else statements

*/
/*

var firstNAme = 'John';
var civilStatus = 'single';

if (isMarried === 'married') {
    console.log(firstNAme + ' is married!'); 
} else{
    console.log(firstNAme + ' will hopefully marry soon :) ');
}


var isMarried = true;

if (isMarried) {
    console.log(firstNAme + ' is married!'); 
} else{
    console.log(firstNAme + ' will hopefully marry soon :) ');
}



var massJohn, massMark,heightJohn, heightMark , BMIJohn, BMIMark;

massJohn = 60; //kg
massMark = 85;

heightJohn = 1.85;
heightMark = 1.76;

BMIJohn = massJohn / (heightJohn * heightJohn);
BMIMark = massMark / (heightMark * heightMark);

if (BMIMark > BMIJohn){
    console.log('Mark\'s BMI is higher than John\'s');
}else{
    console.log('John\'s BMI is higher than MArk\'s')
}

//var isWheter= BMIJohn < BMIMark ;
//console.log('Is Mark\'s BMI higher than John\'s? ' + isWheter);

*/
/************************************

        *Boolean Logic

*/

/*
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName+ ' is a boy.');
}else if (age >= 13 && age < 20){
          console.log(firstName+ ' is a teenager.');
}else if(age >= 20 && age < 30){
          console.log(firstName+ ' is a young man.');
         }else
    console.log(firstName+ ' is a man.');


*/



/************************************

        *The Ternary Operator and Switch Statements

*/


var firstName = 'John';
var age = 18;

//Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer') 
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

/*if (age >= 18){
    var drink = 'beer';
}else{
    drink = 'juice';
}*/


//Switch statement

var job = 'driver';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + 'designs beautiful websites.');
        break;
    default:
        console.log(firstName + 'does something else.');
}


age = 30;
switch(true) {
    case age < 13:
        console.log(firstName+ ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName+ ' is a teenager.');
        break;
    case age >= 20 && age < 30:
         console.log(firstName+ ' is a young man.');
        break;
    default:
         console.log(firstName+ ' is a man.');
        
}


/*
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName+ ' is a boy.');
}else if (age >= 13 && age < 20){
          console.log(firstName+ ' is a teenager.');
}else if(age >= 20 && age < 30){
          console.log(firstName+ ' is a young man.');
         }else
    console.log(firstName+ ' is a man.');


*/

























