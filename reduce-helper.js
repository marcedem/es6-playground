var numbers =  [10, 20, 30, 40, 50, 60];

var sum = 0;

for( var i = 0; i < numbers.length;  i++){
    sum += numbers[i];
}

numbers.reduce(function(sum, number){
    return sum + number;
}, -10);


// ----
// always keep in mind with the startValue or the initialValue that will be passed to the callback function
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
    { color: 'green' },
    { color: 'black' }
];

primaryColors.reduce(function(previous, primaryColor){
    previous.push(primaryColor.color);
    return previous;
}, []);


// example of balancing parenthesis
/*
"()()()()()"
"()((()))"
"((())))))"
"))))(()))"
*/

function balancedParenthesis(string){
    // split the string into array for better user of reduce helper
    // we can add a "!" in front of the return to convert the value to true or false
    return !string.split("").reduce(function(previous, char){
        // we can use a counter here that increment whenever we have an openening and decrement whenever we find a closing parethesis
        if(previous< 0) return previous;
        if(char === "(") return ++previous;
        if(char === ")") return --previous;
        
        return previous;
    }, 0);
}

console.log(balancedParenthesis("()()()()()"));
console.log(balancedParenthesis("()((()))"));
console.log(balancedParenthesis("((())))))"));
console.log(balancedParenthesis("))))(()))"));

/**
 * Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'
*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(previous, trip){
    return previous + trip.distance;
}, 0);

/**
 * Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
 * The object returned should have the form '{ sitting: 3, standing: 2 }'.
 */
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {

    if(desk.type ==='sitting'){
        ++previous.sitting;
    }
    if(desk.type ==='standing'){
        ++previous.standing;
    }
    
    return previous;
}, { sitting: 0, standing: 0 });


/**
 * Write a function called 'unique' that will remove all the duplicate values from an array.
 */

// Given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
//unique function should return [1, 2, 3, 4]

function unique(array) {
  return array.reduce(function(previous, arr){
     var unik = previous.find(function(prev){
         return prev === arr;
     });
     if(!unik){
         previous.push(arr);
     }
     return previous;
  }, []);
}