// Function constructor

/*
var john = {
  name: 'John',
  yob: 1990,
  job: 'teacher',
};

var Person = function (name,yob,job) {
  this.name = name;
  this.yob = yob;
  this.job = job;
};

Person.prototype.calculateAge = function (){
  console.log(2016 - this.yob);
}
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(john.lastName);


// Object.create

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yob);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yob = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yob: { value: 1969 },
  job: { value: 'designer' }
});


// Primitives v. Objects

// Primitives
var a = 23;
var b = a;

a = 46;

console.log(a,b);

// Objects

var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1);
console.log(obj2);

// Functions
var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Abuja'
};

function change(a,b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj);

// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}


function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return 0;
  }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);



// Lecture: Functions returning functions

function interviewQuestion(job) {
  if (job === 'designer'){
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher'){
    return function (name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Jane');



// Lecture: IIFE

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

// game();

(function (el){
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


// Lecture: Closures

function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yob){
    var age = 2016 - yob;
    console.log((retirementAge - age) + a);
  }
}

// var retirementUS = retirement(66)(1990);
var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

// Turning the Interview question into a closure

function interviewQuestion(job) {
  return function (name) {
    if (job ==='designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('Jane');

var designer = interviewQuestion('designer');
designer('John');



// My example

function hello (time){
  var greetings = 'How are you doing today?';
  
  function whatsup (name){
    console.log(`Good ${time} ${name}, ${greetings}`);
  }
  return whatsup;
}


var morning = hello('Morning')('John');
// or
var morning = hello('Morning');
morning('John');

var afternoon = hello('Afternoon')('Jane');
// or
var afternoon = hello('Afternoon');
afternoon('Jane');

var evening = hello('Evening')('Mark');
// or
var evening = hello('Evening');
evening('Mark');


// Lecture: Bind, call and apply

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal'){
      console.log(`Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name}, I'm ${this.job}, I'm ${this.age} years old.`);
    } else if (style === 'friendly'){
      console.log(`Hey! what's up? I'm ${this.name}, I'm ${this.job}, I'm ${this.age} years old. Have a nice ${timeOfDay}.`);
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};

john.presentation('formal','morning');
john.presentation('friendly','afternoon');

john.presentation.call(emily, 'formal', 'afternoon');
// john.presentation.apply(emily,['formal', 'afternoon']);

var johnFormal = john.presentation.bind(john, 'friendly');

johnFormal('night');
johnFormal('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (let i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}


function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/
