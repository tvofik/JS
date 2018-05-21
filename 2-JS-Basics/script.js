// Lecture: variables

/*
var fName = 'John';
console.log(name);

var lName = 'Smith';
console.log(lName);

var age = 20;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2

/*
var name = 'John';
var age = 26;

// console.log(`${name} is ${age} years old.`);

var job, isMarried;

// console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? : ' + isMarried);


age = 'thirty six';
job = 'driver';
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? : ' + isMarried);

var lastName = prompt('What is the last name?');

console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? : ' + isMarried);
*/

// Lecture: Operatiors

/*
var now = 2016;

var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;

ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


// Lecture; if/else statements

/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried) {
  console.log('Yes!');
} else {
  console.log('No!');
}
*/


// lecture: boolean logic and switch

/*
var age = 35;

if (age < 20) {
  console.log('John is under aged.');
} else if ( age > 20 && age < 30 ){
  console.log('John is a young man.');
} else {
  console.log('John is an adult.');
}

var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches Kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Nigeria.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log(`John is a ${job}.`);
    break;
}
*/

// Coding Challenge 1

/*
var ageOne = 20;
var ageTwo = 11;
var ageThree = 18;

var heightOne = 200;
var heightTwo = 200;
var heightThree = 100;

scoreOne = heightOne + 5 * ageOne;
scoreTwo = heightTwo + 5 * ageTwo;
scoreThree = heightThree + 5 * ageThree;

if (scoreOne === scoreTwo === scoreThree) {
  console.log('Its a draw. with all players having ' + scoreOne + 'points.' );
} else if (scoreOne > scoreTwo && scoreOne > scoreThree){
  console.log('Player One wins! with ' + scoreOne + ' points.');
} else if (scoreTwo > scoreOne && scoreTwo > scoreThree) {
  console.log('Player Two wins! with ' + scoreTwo + ' points.');
} else if (scoreThree > scoreOne && scoreThree > scoreTwo) {
  console.log('Player Three wins! with ' + scoreThree + ' points.');
}
*/

// Lecture: Functions

/*
function calculateAge(yearOfBirth){
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, yob) {
  var age = calculateAge(yob);
  var retirement = 65 - age;
  if (retirement <= 0 ) {
    console.log(name + ' has retired.');
  } else {
    console.log(name + ' retires in ' + retirement +' years.');
  }
};

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);

*/

// Lecture: Statements and expressions

/*
// Statement
function someFun(par) {
  
}

// expressions
var someFun = function (par) {
  
}
*/

// Lecture: Arrays

/*
var names = ['John', 'Jane', 'Mark'];
 
var years = new Array(1990,1969,1948);

console.log(names);

names[1] = 'Ben';

console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);
john.pop();
console.log(john);
john.shift();

console.log(john);

if (john.indexOf('teacher') === -1 ){
  console.log('John is not a teacher.');
} else {
  console.log('John is a teacher.');
}

*/

// Lecture: Objects

/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yob: 1990,
  job: 'teacher',
  isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';

console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yob'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

*/

// Lecture: Objects and methods

// v1.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yob: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function (){
    return 2016 - this.yob;
  }
};

console.log(john.calculateAge());

var age = john.calculateAge();

john.age = age;

console.log(john);


// v2.0

var john = {
  name: 'John',
  lastName: 'Smith',
  yob: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function () {
    this.age = 2016 - this.yob;
  }
};

john.calculateAge();
console.log(john);

*/

// Lecture: Loops

/*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// For loops
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = names.length - 1; i >= 0 ; i--) {
  console.log(names[i]);
}
*/

// While loop

/*
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

// break and continue
for (let i = 1; i <= 5; i++) {
  console.log(i);  
  if (i === 3) {
    break;
  }
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

*/

// Coding Challenge 2

/*

var years = [1990, 1999, 1992, 2015, 1960];
var ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2016 - years[i]); My Solution
  ages[i] = 2016 - years[i]; 
}

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
  } else {
    console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not of full age.');
  }
}

function printFullAge(years) {
  var ages = [];
  var fullAges = [];

  for (let i = 0 ; i < years.length; i++) {
    // ages.push(2016 - years[i]); My Solution
    ages[i] = 2016 - years[i];
  }

  for (let i = 0; i < ages.length; i++) {

    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
      fullAges.push(true);
    } else {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is not of full age.');
      fullAges.push(false);
    }
  }
  return fullAges;
}

var years_1 = [1990, 1999, 1992, 2015, 1960];
var years_2 = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years_1);
var full_2 = printFullAge(years_2);

*/