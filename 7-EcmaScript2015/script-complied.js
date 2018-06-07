'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Lecture: let and const
/*

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);


{
  const a = 1;
  let b = 2;
}

// console.log(a+b);

// Lecture: strings

let firstName = 'John';
let lastName = 'Smith';
const yob = 1990;

function calcAge(yob){
  return 2016 - yob;
};

console.log(`This is ${firstName} ${lastName}. He was born in ${yob}. Today, he is ${calcAge(yob)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${n} `.repeat(10));

// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
  return 2016 - el;
});

console.log(ages5);

// ES6

let ages6 = years.map( el => 2016 - el); 

console.log(ages6);

ages6 = years.map( (el,index) => `Age element ${index + 1}: ${2016 - el}`);

console.log(ages6);

ages6 = years.map( (el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`;
})

console.log(ages6);


// lecture: Arrow function 2

// ES5

var box5 = {
  color: 'green',
  position: 1,
  clickMe: function (){
    var self = this;
    document.querySelector('.green').addEventListener('click', function (){
      var str = 'this is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}
// box5.clickMe();

// ES6

const box6 = {
  color: 'green',
  position: 1,
  clickMe: function (){
     document.querySelector('.green').addEventListener('click', () => {
      var str = 'this is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}
box6.clickMe();

// Lecture: Destructuring

// ES5

// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
let john = ['John', 26];

const [name, age] = john;
console.log(name);
console.log(age);


const obj = {
  firstName: 'John',
  lastName: 'Smith',
  yob: 1990
}

const {firstName, lastName, yob} = obj;
console.log(firstName);
console.log(lastName);
console.log(yob);

// or

const {firstName: a, lastName: b, yob: c} = obj;
console.log(`======`);

console.log(a);
console.log(b);
console.log(c);


function calAgeRetirement(year){
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
};


const [age, retirement] = calAgeRetirement(1990);

console.log(age);
console.log(retirement);



// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5


var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach( function (cur) {
  cur.style.backgroundColor = 'dodgerblue';
});


// ES6


const boxesArr6 = Array.from(boxes);
boxesArr6.forEach( cur => cur.style.backgroundColor = 'orangered');



// ES5
for(var i = 0; i < boxesArr5.length; i++){
  if (boxesArr5[i].className === 'box blue'){

    continue;

  }

  boxesArr5[i].textContent = 'I changed to blue!';

}


// ES6
for ( const cur of boxesArr6){

  if (cur.className.includes('orange')){

    continue;

  }

  cur.textContent = 'I changed to orange!';

}


// ES5

var ages = [12,25,17,8,21,16,18,19];

var full = ages.map(function (cur) {
  return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6

let try1 = ages.findIndex(cur => cur >= 18);

let try2 = ages.find(cur => cur >= 18);

console.log('====')

console.log(try1);
console.log(try2);

// Lecture: Spread operator

function addFourAges(a, b, c, d){
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

// ES5

var ages = [18, 30, 12, 21];

var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

// ES6

const sum3 = addFourAges(...ages);

console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familyMiller,'Lily', ...familySmith];

console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'pink');



// Lecture: Rest parameters

// ES5

function isFullAge5 () {
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(el) {
    console.log((2016 - el) >= 18);
  });
};

isFullAge5(1990, 1999, 1965);


// ES6

function isFullAge6(...years){
  years.forEach( cur => console.log((2016 - cur) >= 18 ));
};

isFullAge6(1990, 1999, 1965);


function isFullAge5(limit) {

  var argsArr = Array.prototype.slice.call(arguments, 1);


  argsArr.forEach(function (el) {
    console.log((2016 - el) >= limit);
  });
};

isFullAge5(21,1990, 1999, 1965);


// ES6

function isFullAge6(limit, ...years) {
  console.log(arguments);
  years.forEach(cur => console.log((2016 - cur) >= limit));
};

isFullAge6(21,1990, 1999, 1965);


// Lecture: Default Parameters

function SmithPerson (firstName, lastName, yob, nationality){

  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'Nigerian' : nationality;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yob = yob;
  this.nationality = nationality;
};

var john = new SmithPerson('John',undefined, 1990);

var emily = new SmithPerson('Emily', 'Miller', 1992, 'Spain');


// ES6

function SmithPerson(firstName, lastName = 'Smith', yob, nationality = 'American') {

  this.firstName = firstName;
  this.lastName = lastName;
  this.yob = yob;
  this.nationality = nationality;

};

var john = new SmithPerson('John', 1990);
console.log(john);


// Lecture: Maps

const question = new Map();
question.set('question','What is the official latest major JS version?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES2015');
question.set(4,'ES7');
question.set('correct', 3);
question.set(true,'Correct answer :D');
question.set(false,'Wrong, please try again! :(');

console.log(question.get('question'));

// question.delete(4);


if (question.has(4)) {
  
  // console.log('Answer 4 is here');


}

// question.clear();
// console.log(question.size);

// question.forEach( (value, key) => console.log(`This is ${key}, and its ${value}`) );


// you dont really need to put the .entries() it will still work.
for (let [key, value] of question.entries()) {
  if (typeof key === 'number') {
    console.log(`This is ${key}, and its ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));

// this is the same as the if else stament on the next line
console.log(question.get(ans === question.get('correct')));

// if (ans === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }



// Lecture: Classes

// ES5

var Person5 = function(name, yob, job){
  this.name = name;
  this.yob = yob;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.yob;
}

var john = new Person5('John', 1990, 'teacher');


// ES6

class Person6{
  constructor(name,yob,job){
    this.name = name;
    this.yob = yob;
    this.job = job;
  }
  calculateAge(){
    return new Date().getFullYear() - this.yob;
  }
  // will not get inherited
  static greeting() {
    console.log('Hey there!');
  }
}


// Lecture: Classes and subclasses

// ES5

var Person5 = function (name, yob, job) {
  this.name = name;
  this.yob = yob;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  return new Date().getFullYear() - this.yob;
}

var Athlete5 = function(name,yob,job,olympicGames, medals) {
  Person5.call(this, name, yob, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedals = function() {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);


// ES6

class Person6 {
  constructor(name, yob, job) {
    this.name = name;
    this.yob = yob;
    this.job = job;
  }
  calculateAge() {
    return new Date().getFullYear() - this.yob;
  }
}

class Athlete6 extends Person6 {
  constructor (name, yob, job, olympicGames, medals){
    super(name, yob, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal(){
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);


johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

*/

// Coding Challenge

var Element = function Element(name, year) {
  _classCallCheck(this, Element);

  this.name = name;
  this.year = year;
};

var Park = function (_Element) {
  _inherits(Park, _Element);

  function Park(name, year, area, nTrees) {
    _classCallCheck(this, Park);

    var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, year));

    _this.area = area;
    _this.nTrees = nTrees;
    return _this;
  }

  _createClass(Park, [{
    key: 'treeDensity',
    value: function treeDensity() {
      var density = this.nTrees / this.area;
      console.log(this.name + ' has a tree density of ' + density + ' trees per square km.');
    }
  }]);

  return Park;
}(Element);

var Street = function (_Element2) {
  _inherits(Street, _Element2);

  function Street(name, year, length) {
    var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

    _classCallCheck(this, Street);

    var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, year));

    _this2.length = length;
    _this2.size = size;
    return _this2;
  }

  _createClass(Street, [{
    key: 'classifyStreet',
    value: function classifyStreet() {
      var classification = new Map();
      classification.set(1, 'Tiny');
      classification.set(2, 'Small');
      classification.set(3, 'Normal');
      classification.set(4, 'Big');
      classification.set(5, 'Huge');
      console.log(this.name + ', build in ' + this.year + ', is a ' + classification.get(this.size) + ' street.');
    }
  }]);

  return Street;
}(Element);

var allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Blvd', 1982, 2.5, 5)];

function calc(arr) {

  var sum = arr.reduce(function (prev, cur, index) {
    return prev + cur;
  }, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {

  console.log('------PARKS REPORT------');

  // Density
  p.forEach(function (element) {
    return element.treeDensity();
  });

  // Average Age
  var ages = p.map(function (el) {
    return new Date().getFullYear() - el.year;
  });

  var _calc = calc(ages),
      _calc2 = _slicedToArray(_calc, 2),
      totalAge = _calc2[0],
      avgAge = _calc2[1];

  console.log('Our ' + p.length + ' parks have an average of ' + avgAge + ' years.');

  // Which park has more than 1000 trees
  var i = p.map(function (el) {
    return el.nTrees;
  }).findIndex(function (el) {
    return el >= 1000;
  });

  console.log(p[1].name + ' has more than 1000 trees.');
}

function reportStreets(s) {

  console.log('------STREET REPORT------');

  // Total and average length of the town's streets

  var _calc3 = calc(s.map(function (el) {
    return el.length;
  })),
      _calc4 = _slicedToArray(_calc3, 2),
      tLength = _calc4[0],
      avgLength = _calc4[1];

  console.log('Our ' + s.length + ' streets have a total length of ' + tLength + ' km, & an average length of ' + avgLength + ' km.');

  s.forEach(function (el) {
    return el.classifyStreet();
  });
}

reportParks(allParks);
reportStreets(allStreets);