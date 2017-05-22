var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'orange', type: 'fuit', quantity: 20, price: 34 },
    { name: 'celery', type: 'vegetable', quantity: 7, price: 21 },
    { name: 'mango', type: 'fruit', quantity: 20, price: 12 }
];

var filteredProducts = [];

for( var i = 0; i < products.length; i++){
    if(products[i].type === 'fruit'){
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

// FILTER HELPER
products.filter(function(product){
    // return statement is mandatory
    return product.type === 'fruit';
}); 

// Type is 'vegetable', quantity is greater than 0, price is less than 20
products.filter(function(product){
    // return statement is mandatory
    return product.type === 'vegetale'  && product.quantity > 0 && product.price < 20;
}); 

// More example with filter helper
var post = {id: 4, title: 'New Post'};

var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'It was ok'},
    {postId: 4, content: 'great'}
];

function commentsForPost(post, comments){
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
};

console.log(commentsForPost(post, comments));


/**
 * Filter the array of numbers using the filter helper, creating a new array that only contains numbers greater than 50. 
 * Assign this new array to a variable called 'filteredNumbers'.  Don't forget to use the 'return' keyword in the function!
 */
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
   return number > 50;
});


/**
 * Filter the array of users, only returning users who have admin level access.  
 * Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!
 */
var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});


/**
 * This is a hard one!  Create a function called 'reject'.  Reject should work in 
 * the opposite way of 'filter' - if a function returns 'true', 
 * the item should *not* be included in the new array.  Hint: you can reuse filter.
 */
var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
}); 
lessThanFifteen // [ 10 ];

function reject(array, iteratorFunction) {
  return array.filter(function(arr){
      return arr < 15;
  });
}