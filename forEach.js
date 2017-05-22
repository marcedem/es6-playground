
var colors = ['red', 'blue', 'green'];

/* Iterating through array with for Loop */
for( var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

/* Iterating through array with forEach */
// We use an iterator function
colors.forEach(function(color){
    console.log(color);
});

// create an array of numbers
var numbers = [1,2, 4, 5, 6, 7];

// create a varialbe to hold the sum
var sum = 0;

function adder(number){
    sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum variable

console.log(sum);


/**
 * refactor the code below to instead use the forEach helper.
 */
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    /*
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
    */
    posts.forEach(savePost);
}

/**
 * Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  
 * The area of an image can be calculated as 'image.height * image.width'.
 */
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
    areas.push(image.height * image.width);
});