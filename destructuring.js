var expense = {
    type:  'Business',
    amount: '$50 USD'
}

//var type = expense.type;
//var amount = expense.amount;


// ES6
const  { type } = expense; // declare a new const "type" and assign it the value of "expense.type"
const { amount } = expense; // declare a new const "type" and assign it the value of "expense.type"

// destructuring avoiding duplication
const {type, amount } = expense;    // name of the variable might be the same as the property we are refering to.


// More examples
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}){
    return `The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(savedFile));

// Destructuring arrays
const companies = [
    'Google',
    'Facebook',
    'Microsoft',
    'Apple'
];

const [name] = companies; //Google
const [name1, name2, ...rest] = companies; //Google
const [ length ] = companies; // length of the array is 4


// Destructuring arrays and objects together
const techCompanies = [
    {name: 'Google', location: 'Mountain View'},
    {name: 'Facebook', location: 'Menlo Park'},
    {name: 'Microsoft', location: 'Seattle'},
    {name: 'Apple', location: 'Palo Alto'}
];
// var location = techCompanies[0];
const [{location}] = techCompanies;

const Google = {
    cities:  ['Mountain View', 'New York', 'London']
};
const {cities: [city]} = Google;

// More examples
function singnup(username, password, email, dateOfBirth, cityOfBirth){
    // create new user
}

signup('myname', 'mypassword', 'me@me.me', '1/1/2001', 'Berlin'); // hard to keep all arguments order in complex codebase

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'me@me.com',
    dateOfBirth: '1/1/1990',
    city: 'Berlin'
}

// by destructuring the argument object, we avoid the headache of the order of appearance of those arguments
function singnup2({username, password, email, dateOfBirth, cityOfBirth}){
    // create new user
}

const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

points.map(pair => {
    // const [x, y] = pair;
});

// equivalent to
points.map(([x, y]) => {
    return {x, y}; // similar to return {x:x, y:y}
});


const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer(profile) {
    const {title, department} = profile;
    // var title = profile.title;
    // var department = profile.department;
    return title === 'Engineer' && department === 'Engineering';
}

/**
 * The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  
 * Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' 
 * and assign the result to 'classesAsObject.  Use array destructuring and the map helper.
 * An array for a class has the form [subject, time, teacher]
 * The resulting data structure should look something like the following:
 * const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
 */

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});


/**
 * Use array destructuring, recursion, and the rest/spread operators to create a function 'double' 
 * that will return a new array with all values inside of it multiplied by two.
 * Input: double([1,2,3])
 * Output: [2,4,6]
 */

const numbers = [1, 2, 3];

function double([num , ...rest]) {
    if (!num) { return []; }
     return [num * 2, ...double(rest) ];
}