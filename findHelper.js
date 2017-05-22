var users = [
    { name: 'Jill'},
    { name: 'Alex'},
    { name: 'Bill'}
];

var user;
for( var i = 0; i < users.length; i++){
    if(users[i].name === 'Alex'){
        user = users[i];
        break;
    }
}
console.log(user);


// FIND HELPER by default only return the first matching 
users.find(function(user){
    // Return keyword is mandatory
    return user.name === 'Alex';
});

function Car(model){
    this.model = model;
}

var cars = [
    new Car('BMW'),
    new Car('Toyota'),
    new Car('Ford')
]

cars.find(function(car){
    return car.model === 'Ford';
});

var post = {id: 4, title: 'New Post'};

var comments = [
    {postId: 4, content: 'awesome post'},
    {postId: 3, content: 'It was ok'},
    {postId: 4, content: 'great'}
];

function commentsForPost(post, comments){
    return find.filter(function(post){
        return post.id === comment.postId;
    });
};

console.log(commentsForPost(post, comments));

/**
 * Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.
 */
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true;
});

/**
 * Find the account with a balance of 12 and assign it to the variable 'account'.
 */
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
});

/**
 * Write a 'findWhere' function that achieves this shorthand approach.  'findWhere' should return the found object.
 */
var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  return array.find(function(arr){
     return arr.height === criteria.height; 
  });
}