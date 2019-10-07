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

/*

var firstName = 'John';
var age = 18;

//Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer') 
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

if (age >= 18){
    var drink = 'beer';
}else{
    drink = 'juice';
}*/


//Switch statement

/*
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


*/



/************************************

        *Truthy and falsy values and equality operators

*/

//falsy values undefined, null, 0, empty strings
//truthy

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
}else {
    console.log('Variable has NOT been defined');
}



//equality operators


if (height === ) {
    
    console.log('The == operator does type coercion!');
}
*/


/***********************************
        *Codding challenge 2

*/

/*

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.


var firstGameJ = 110;
var secondtGameJ = 120;
var thirdGameJ = 103;

var firstGameM = 116;
var secondtGameM = 94;
var thirdGameM = 123;


var averageJohn = (firstGameJ + secondtGameJ + thirdGameJ) / 3;
var averageMark = (firstGameM + secondtGameM + thirdGameM) / 3;

console.log(averageJohn,averageMark);

if (averageJohn > averageMark) {
    console.log('John\'s team  wins with ' + averageJohn + ' points.');
}else if(averageJohn === averageMark) {
    console.log('They have same points');
} else {
    console.log('Mark\'s team  wins with ' + averageMark + ' points.' );
}

//EXTRA

var firstGameMary = 97;
var secondtGameMary = 134;
var thirdGameMary = 105;

var averageMary = (firstGameMary + secondtGameMary + thirdGameMary) / 3;

if (averageJohn > averageMark && averageJohn > averageMary) {
    console.log('John\'s team was winning with ' + averageJohn + ' points.');
}else if(averageJohn === averageMark === averageMary) {
    console.log('They are all the winner with ' + averageJohn + ' points.' );    
} else if (averageJohn < averageMark && averageMark > averageMary) {
    console.log('Mark\'s team is the winner with ' + averageMark + ' points.' );
}else {
     console.log('Mary\'s team is the winner with ' + averageMary + ' points.' );
}

console.log(averageJohn,averageMark,averageMary);

*/




/***********************************
        *Functions

*/

/*
function calculateAge(birthYear) {
    return 2019 - birthYear; 
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);


console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
    console.log(firstName + ' retires in ' + retirement +' years.');
    }else{
        
        console.log(firstName + ' is already retired.');
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/



/***********************************
        *Functions statements and expresions


//function declaration
function whatDoYouDo (job, firstName){}


//function expresion
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drived a uber in Lisbon.';
        case ' designer': 
            return firstName + ' designs beautiful websites. ';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

*/




/***********************************
        *Arrays

*/

/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK ðŸ˜€
*/



































