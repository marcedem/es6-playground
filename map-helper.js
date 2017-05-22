var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = [];

for ( var i = 0; i < numbers.length; i ++){
    doubledNumbers.push(numbers[i] *  2);
}

console.log(doubledNumbers);


// using map helper
var mapDoubled = numbers.map(function(number){
    // return key word is critical inside a map function
    return number * 2;
});

console.log(mapDoubled);

var cars = [
    { model: 'Buick', price: 'CHEAP'},
    { model: 'Toyota', price: 'Expensive'},
    { model: 'BWM', price: 'Luxury'},
];

var prices = cars.map(function(car){
    return car.price;
});

console.log(prices);


/**
 * Using map, create a new array that contains the 'height' property of each object.  
 * Assign this new array to the variable 'heights'.  Don't forget to use the 'return' keyword in the function!
 */
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});

/**
 * Using map, create a new array that contains the distance / time value from each trip.  
 * In other words, the new array should contain the (distance / time) value.  Assign the result to the variable 'speeds'.
 */
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip){
    return trip.distance / trip.time;
});

/**
 * Implement a 'pluck' function.  Pluck should accept an array and a string representing 
 * a property name and return an  array containing that property from each object. 
 */
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

function pluck(array, property) {
    
    var newPluck = array.map(function(arr){
        return arr.color;
    });
    
    return newPluck;
}