// ES5

// var name = 'Jane';
// var title = 'Software Bla';
// var hourlyWage = 40;

// refactoring using const ES6
const name = 'Jane';        // this is assumed to be constant
let title = 'Software Bla'; // assume this might change later
let hourlyWage = 40;

// assume we are making some changes now:
name = "Marc" // this will return "TypeError: Assignement to const variable"
title = "blablabla";
hourlyWage = "40";

function count(targetString){
    const chars = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for(let i = 0; i < targetString.length; i++){
        if(targetString.includes(targetString[i])){
            ++ number;
        }
    }
    return number;
}
count('asdfahasdlasdfald9pwepasdfasdn');


const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}